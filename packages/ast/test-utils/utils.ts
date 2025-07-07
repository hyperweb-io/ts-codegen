import generate from '@babel/generator';
import { RenderOptions } from '@cosmwasm/ts-codegen-ast/types';
import {
  ExecuteMsg,
  IDLObject,
  JSONSchema,
  QueryMsg,
} from '@cosmwasm/ts-codegen-types';
import { readFileSync } from 'fs';
import { join } from 'path';

import { RenderContext } from '../src/context';
import { crossGlob, toPosixPath } from '../src/utils';

export const expectCode = (ast: any): void => {
  expect(generate(ast).code).toMatchSnapshot();
};

export const printCode = (ast: any): void => {
  console.log(generate(ast).code);
};

export const makeContext = (
  schema: JSONSchema,
  options?: RenderOptions,
  responses?: Record<string, JSONSchema>
) => {
  return new RenderContext(
    {
      schemas: [schema],
      responses,
    },
    options
  );
};

interface GlobContractLegacy {
  name: `/${string}.json`;
  content: JSONSchema;
}

interface GlobContract {
  name: `/${string}.json`;
  content: IDLObject;
}

const fixtureDir = join(__dirname, '../../../__fixtures__');
const globCache: Record<string, GlobContractLegacy[] | GlobContract[]> = {};

export const globIdlBasedContracts = (p: string): GlobContract[] => {
  if (globCache[p]) return globCache[p] as GlobContract[];
  // @ts-ignore
  const contracts: GlobContract[] = crossGlob(join(fixtureDir, p, '/*.json'))
    .sort()
    .map((file) => {
      return {
        name: file.split(toPosixPath(join('__fixtures__', p)))[1],
        content: JSON.parse(readFileSync(file, 'utf-8')),
      };
    });
  globCache[p] = contracts;
  return contracts;
};

export const globLegacyContracts = (p: string): GlobContractLegacy[] => {
  if (globCache[p]) return globCache[p] as GlobContractLegacy[];
  // @ts-ignore
  const contracts: GlobContractLegacy[] = crossGlob(join(fixtureDir, p, '/*.json'))
    .sort()
    .map((file) => {
      return {
        name: file.split(toPosixPath(join('__fixtures__', p)))[1],
        content: JSON.parse(readFileSync(file, 'utf-8')),
      };
    });
  globCache[p] = contracts;
  return contracts;
};

export const getMsgExecuteLegacyFixture = (
  p: string,
  name: `/${string}.json`
): ExecuteMsg => {
  const contracts = globLegacyContracts(p);
  const contract = contracts.find((a) => a.name === name);
  return contract.content as ExecuteMsg;
};

export const getMsgQueryLegacyFixture = (
  p: string,
  name: `/${string}.json`
): QueryMsg => {
  const contracts = globLegacyContracts(p);
  const contract = contracts.find((a) => a.name === name);
  return contract.content as QueryMsg;
};

export const getLegacyFixture = (
  p: string,
  name: `/${string}.json`
): JSONSchema => {
  const contracts = globLegacyContracts(p);
  const contract = contracts.find((a) => a.name === name);
  return contract.content as JSONSchema;
};
