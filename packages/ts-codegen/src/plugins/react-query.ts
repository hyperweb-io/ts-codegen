import * as w from '@cosmwasm/ts-codegen-ast';
import {
  ContractInfo,
  getMessageProperties,
  RenderContext,
  RenderContextBase,
  RenderOptions,
} from '@cosmwasm/ts-codegen-ast';
import { pascal } from 'case';

import { BuilderFileType } from '../builder';
import { findAndParseTypes, findExecuteMsg, findQueryMsg } from '../utils';
import { BuilderPluginBase } from './plugin-base';

export class ReactQueryPlugin extends BuilderPluginBase<RenderOptions> {
  initContext(
    contract: ContractInfo,
    options?: RenderOptions
  ): RenderContextBase<RenderOptions> {
    return new RenderContext(contract, options, this.builder?.builderContext);
  }

  async doRender(
    name: string,
    context: RenderContext
  ): Promise<
    {
      type: BuilderFileType;
      pluginType?: string;
      localname: string;
      body: any[];
    }[]
  > {
    const options = this.options.reactQuery;

    const { enabled } = options;

    if (!enabled) {
      return;
    }

    const { schemas } = context.contract;

    const localname = pascal(`${name}`) + '.react-query.ts';
    const ContractFile = pascal(`${name}`) + '.client';
    const TypesFile = pascal(`${name}`) + '.types';

    const QueryMsg = findQueryMsg(schemas);
    const ExecuteMsg = findExecuteMsg(schemas);
    const typeHash = await findAndParseTypes(schemas);

    const ExecuteClient = pascal(`${name}Client`);
    const QueryClient = pascal(`${name}QueryClient`);

    const body = [];

    const clientImports = [];

    if (QueryMsg) clientImports.push(QueryClient);

    // check that there are commands within the exec msg
    const shouldGenerateMutationHooks =
      ExecuteMsg &&
      options?.version === 'v4' &&
      options?.mutations &&
      getMessageProperties(ExecuteMsg).length > 0;

    if (shouldGenerateMutationHooks) {
      clientImports.push(ExecuteClient);
    }

    // general contract imports
    body.push(w.importStmt(Object.keys(typeHash), `./${TypesFile}`));

    // client imports
    body.push(w.importStmt(clientImports, `./${ContractFile}`));

    // query messages
    if (QueryMsg) {
      [].push.apply(
        body,
        w.createReactQueryHooks({
          context,
          queryMsg: QueryMsg,
          contractName: name,
          QueryClient,
        })
      );
    }

    if (shouldGenerateMutationHooks) {
      [].push.apply(
        body,
        w.createReactQueryMutationHooks({
          context,
          execMsg: ExecuteMsg,
          contractName: name,
          ExecuteClient,
        })
      );
    }

    if (Object.prototype.hasOwnProperty.call(typeHash, 'Coin')) {
      // @ts-ignore
      delete context.utils.Coin;
    }

    return [
      {
        type: 'react-query',
        localname,
        body,
      },
    ];
  }
}
