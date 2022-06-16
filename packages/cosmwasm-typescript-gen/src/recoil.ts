import { pascal } from "case";
import { header } from './header';
import { join } from "path";
import { sync as mkdirp } from "mkdirp";
import * as w from 'wasm-ast-types';
import * as t from '@babel/types';
import { writeFileSync } from 'fs';
import generate from "@babel/generator";
import { compile } from 'json-schema-to-typescript';

import { parser } from "./parse";

export default async (name: string, schemas: any[], outPath: string) => {

  const RecoilFile = pascal(`${name}Contract`) + '.recoil.ts';
  const Contract = pascal(`${name}Contract`) + '.ts';

  const QueryMsg = schemas.find(schema => schema.title === 'QueryMsg');
  const Types = schemas.filter(schema => schema.title !== 'ExecuteMsg' && schema.title !== 'ExecuteMsg_for_Empty' && schema.title !== 'QueryMsg');

  let QueryClient = null;
  let ReadOnlyInstance = null;

  const body = [];

  body.push(
    w.importStmt(['selectorFamily'], 'recoil')
  );

  body.push(
    w.importStmt(['cosmWasmClient'], './chain')
  );

  // TYPES
  const allTypes = [];
  for (const typ in Types) {
    if (Types[typ].definitions) {
      for (const key of Object.keys(Types[typ].definitions)) {
        // set title
        Types[typ].definitions[key].title = key;
      }
    }
    const result = await compile(Types[typ], Types[typ].title);
    allTypes.push(result);
  }

  const typeHash = parser(allTypes);
  body.push(
    w.importStmt(Object.keys(typeHash), `./${Contract}`.replace(/\.ts$/, ''))
  );

  // query messages
  if (QueryMsg) {

    QueryClient = pascal(`${name}QueryClient`);
    ReadOnlyInstance = pascal(`${name}ReadOnlyInterface`);

    body.push(
      w.importStmt([QueryClient], `./${Contract}`)
    );

    body.push(w.createRecoilQueryClientType());
    body.push(w.createRecoilQueryClient(
      name,
      QueryClient
    ));

    [].push.apply(body,
      w.createRecoilSelectors(name, QueryClient, QueryMsg)
    );

  }

  const code = header + generate(
    t.program(body)
  ).code;

  mkdirp(outPath);
  writeFileSync(join(outPath, RecoilFile), code);
};