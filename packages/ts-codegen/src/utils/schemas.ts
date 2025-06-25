import { ContractInfo } from '@cosmwasm/ts-codegen-ast';
import {
  ExecuteMsg,
  IDLObject,
  JSONSchema,
  QueryMsg,
} from '@cosmwasm/ts-codegen-types';
import { compile } from '@pyramation/json-schema-to-typescript';
import { readFileSync } from 'fs';
import { globSync as glob } from 'glob';

import { cleanse } from './cleanse';
import { parser } from './parse';
interface ReadSchemaOpts {
  schemaDir: string;
  clean?: boolean;
}

/**
 * Takes a schema directory and returns a list of relevant file paths
 */
export const findSchemaFiles = async (schemaDir: string): Promise<string[]> => {
  const files = glob(schemaDir + '/**/*.json')
    .filter((file) => !file.includes('/raw/')) // raw JSON Schema files that are also included in the main <contract_name>.json
    .filter((file) => !file.includes('/cw_schema/')) // sub-folder for the new schema format for CosmWasm 3+
    .sort();
  return files;
};

export const readSchemas = async ({
  schemaDir,
  clean = true,
}: ReadSchemaOpts): Promise<ContractInfo> => {
  const fn = clean
    ? cleanse
    : (schema: JSONSchema[] | Partial<IDLObject>) => schema;

  const files = (await findSchemaFiles(schemaDir)).map((path) =>
    readFileSync(path, 'utf-8')
  );

  if (files.length > 1) {
    // legacy
    // TODO add console.warn here
    console.warn(
      'Found a multiple schema files. This mode will be removed in the next major version. Please migrate the schemas that contain a single <contract_name>.json IDL file (CosmWasm 1.1+).'
    );

    const schemas: JSONSchema[] = files.map((file) => JSON.parse(file));
    return {
      schemas: fn(schemas),
    };
  }

  if (files.length === 0) {
    throw new Error(
      'Error [too few files]: requires one schema file per contract'
    );
  }

  if (files.length !== 1) {
    throw new Error(
      'Error [too many files]: CosmWasm v1.1 schemas supports one file'
    );
  }

  const idlObject: Partial<IDLObject> = JSON.parse(files[0]);
  const {
    // contract_name,
    // contract_version,
    idl_version,
    responses,
    instantiate,
    execute,
    query,
    migrate,
    sudo,
  } = idlObject;

  if (typeof idl_version !== 'string') {
    // legacy
    // fall back to a single JSON Schema file
    console.warn(
      'Found a single schema file with missing idl_version. This mode will be removed in the next major version. Please migrate the schemas that contain a single <contract_name>.json IDL file (CosmWasm 1.1+).'
    );
    const schema: JSONSchema = JSON.parse(files[0]);
    return {
      schemas: fn([schema]),
    };
  }

  // TODO use contract_name, etc.
  const idl: Partial<IDLObject> = {
    instantiate,
    execute,
    query,
    migrate,
    sudo,
  };
  return {
    schemas: [
      ...Object.values(fn(idl)).filter(Boolean),
      ...Object.values(fn({ ...responses })).filter(Boolean),
    ],
    responses,
    idlObject,
  };
};

export const findQueryMsg = (schemas: JSONSchema[]): QueryMsg => {
  const queryMsg = schemas.find((schema) => schema.title === 'QueryMsg');
  return queryMsg as QueryMsg;
};

export const findExecuteMsg = (schemas: JSONSchema[]): ExecuteMsg => {
  const executeMsg = schemas.find((schema) =>
    schema.title.startsWith('ExecuteMsg')
  );
  return executeMsg as ExecuteMsg;
};

export const findAndParseTypes = async (schemas: JSONSchema[]) => {
  const Types = schemas;
  const allTypes = [];
  for (const typ in Types) {
    if (Types[typ].definitions) {
      for (const key of Object.keys(Types[typ].definitions)) {
        // set title
        Types[typ].definitions[key].title = key;
      }
    }
    const result = await compile(Types[typ] as any, Types[typ].title);
    allTypes.push(result);
  }
  const typeHash = parser(allTypes);
  return typeHash;
};
