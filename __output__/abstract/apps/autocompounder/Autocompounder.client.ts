/**
* This file was automatically generated by @abstract-money/ts-codegen@latest.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @abstract-money/ts-codegen generate command to regenerate this file.
*/

import { CamelCasedProperties } from "type-fest";
import { SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { AccountPublicClient, AccountWalletClient, AppExecuteMsg, AppExecuteMsgFactory, AdapterExecuteMsg, AdapterExecuteMsgFactory } from "@abstract-money/core";
import { StdFee, Coin } from "@cosmjs/amino";
import { Decimal, AssetEntry, BondingPeriodSelector, Duration, InstantiateMsg, ExecuteMsg, Uint128, AnsAsset, QueryMsg, MigrateMsg, Expiration, Timestamp, Uint64, ArrayOfTupleOfStringAndArrayOfClaim, Claim, ArrayOfClaim, Addr, PoolAddressBaseForAddr, AssetInfoBaseForAddr, PoolType, Config, PoolMetadata } from "./Autocompounder.types";
import { AutocompounderQueryMsgBuilder, AutocompounderExecuteMsgBuilder } from "./Autocompounder.message-builder";
export interface IAutocompounderAppQueryClient {
  moduleId: string;
  accountPublicClient: AccountPublicClient;
  _moduleAddress: string | undefined;
  config: () => Promise<Config>;
  pendingClaims: (params: CamelCasedProperties<Extract<QueryMsg, {
    pending_claims: unknown;
  }>["pending_claims"]>) => Promise<Uint128>;
  claims: (params: CamelCasedProperties<Extract<QueryMsg, {
    claims: unknown;
  }>["claims"]>) => Promise<ArrayOfClaim>;
  allClaims: (params: CamelCasedProperties<Extract<QueryMsg, {
    all_claims: unknown;
  }>["all_claims"]>) => Promise<ArrayOfTupleOfStringAndArrayOfClaim>;
  latestUnbonding: () => Promise<Expiration>;
  totalLpPosition: () => Promise<Uint128>;
  balance: (params: CamelCasedProperties<Extract<QueryMsg, {
    balance: unknown;
  }>["balance"]>) => Promise<Uint128>;
  getAddress: () => Promise<string>;
}
export class AutocompounderAppQueryClient implements IAutocompounderAppQueryClient {
  accountPublicClient: AccountPublicClient;
  moduleId: string;
  _moduleAddress: string | undefined;

  constructor({
    accountPublicClient,
    moduleId
  }: {
    accountPublicClient: AccountPublicClient;
    moduleId: string;
  }) {
    this.accountPublicClient = accountPublicClient;
    this.moduleId = moduleId;
    this.config = this.config.bind(this);
    this.pendingClaims = this.pendingClaims.bind(this);
    this.claims = this.claims.bind(this);
    this.allClaims = this.allClaims.bind(this);
    this.latestUnbonding = this.latestUnbonding.bind(this);
    this.totalLpPosition = this.totalLpPosition.bind(this);
    this.balance = this.balance.bind(this);
  }

  config = async (): Promise<Config> => {
    return this._query(AutocompounderQueryMsgBuilder.config());
  };
  pendingClaims = async (params: CamelCasedProperties<Extract<QueryMsg, {
    pending_claims: unknown;
  }>["pending_claims"]>): Promise<Uint128> => {
    return this._query(AutocompounderQueryMsgBuilder.pendingClaims(params));
  };
  claims = async (params: CamelCasedProperties<Extract<QueryMsg, {
    claims: unknown;
  }>["claims"]>): Promise<ArrayOfClaim> => {
    return this._query(AutocompounderQueryMsgBuilder.claims(params));
  };
  allClaims = async (params: CamelCasedProperties<Extract<QueryMsg, {
    all_claims: unknown;
  }>["all_claims"]>): Promise<ArrayOfTupleOfStringAndArrayOfClaim> => {
    return this._query(AutocompounderQueryMsgBuilder.allClaims(params));
  };
  latestUnbonding = async (): Promise<Expiration> => {
    return this._query(AutocompounderQueryMsgBuilder.latestUnbonding());
  };
  totalLpPosition = async (): Promise<Uint128> => {
    return this._query(AutocompounderQueryMsgBuilder.totalLpPosition());
  };
  balance = async (params: CamelCasedProperties<Extract<QueryMsg, {
    balance: unknown;
  }>["balance"]>): Promise<Uint128> => {
    return this._query(AutocompounderQueryMsgBuilder.balance(params));
  };
  getAddress = async (): Promise<string> => {
    if (!this._moduleAddress) {
      const address = await this.accountPublicClient.getModuleAddress({
        id: this.moduleId
      });

      if (address === null) {
        throw new Error(`Module ${this.moduleId} not installed`);
      }

      this._moduleAddress = address;
    }

    return this._moduleAddress!;
  };
  _query = async (queryMsg: QueryMsg): Promise<any> => {
    return this.accountPublicClient.queryModule({
      moduleId: this.moduleId,
      moduleType: "app",
      queryMsg
    });
  };
}
export interface IAutocompounderAppClient extends IAutocompounderAppQueryClient {
  accountWalletClient: AccountWalletClient;
  updateFeeConfig: (params: CamelCasedProperties<Extract<ExecuteMsg, {
    update_fee_config: unknown;
  }>["update_fee_config"]>, fee_?: number | StdFee | "auto", memo_?: string, funds_?: Coin[]) => Promise<ExecuteResult>;
  deposit: (params: CamelCasedProperties<Extract<ExecuteMsg, {
    deposit: unknown;
  }>["deposit"]>, fee_?: number | StdFee | "auto", memo_?: string, funds_?: Coin[]) => Promise<ExecuteResult>;
  withdraw: (fee_?: number | StdFee | "auto", memo_?: string, funds_?: Coin[]) => Promise<ExecuteResult>;
  compound: (fee_?: number | StdFee | "auto", memo_?: string, funds_?: Coin[]) => Promise<ExecuteResult>;
  batchUnbond: (fee_?: number | StdFee | "auto", memo_?: string, funds_?: Coin[]) => Promise<ExecuteResult>;
}
export class AutocompounderAppClient extends AutocompounderAppQueryClient implements IAutocompounderAppClient {
  accountWalletClient: AccountWalletClient;

  constructor({
    accountPublicClient,
    accountWalletClient,
    moduleId
  }: {
    accountPublicClient: AccountPublicClient;
    accountWalletClient: AccountWalletClient;
    moduleId: string;
  }) {
    super({
      accountPublicClient,
      moduleId
    });
    this.accountWalletClient = accountWalletClient;
    this.updateFeeConfig = this.updateFeeConfig.bind(this);
    this.deposit = this.deposit.bind(this);
    this.withdraw = this.withdraw.bind(this);
    this.compound = this.compound.bind(this);
    this.batchUnbond = this.batchUnbond.bind(this);
  }

  updateFeeConfig = async (params: CamelCasedProperties<Extract<ExecuteMsg, {
    update_fee_config: unknown;
  }>["update_fee_config"]>, fee_: number | StdFee | "auto" = "auto", memo_?: string, funds_?: Coin[]): Promise<ExecuteResult> => {
    return this._execute(AutocompounderExecuteMsgBuilder.updateFeeConfig(params), fee_, memo_, funds_);
  };
  deposit = async (params: CamelCasedProperties<Extract<ExecuteMsg, {
    deposit: unknown;
  }>["deposit"]>, fee_: number | StdFee | "auto" = "auto", memo_?: string, funds_?: Coin[]): Promise<ExecuteResult> => {
    return this._execute(AutocompounderExecuteMsgBuilder.deposit(params), fee_, memo_, funds_);
  };
  withdraw = async (fee_: number | StdFee | "auto" = "auto", memo_?: string, funds_?: Coin[]): Promise<ExecuteResult> => {
    return this._execute(AutocompounderExecuteMsgBuilder.withdraw(), fee_, memo_, funds_);
  };
  compound = async (fee_: number | StdFee | "auto" = "auto", memo_?: string, funds_?: Coin[]): Promise<ExecuteResult> => {
    return this._execute(AutocompounderExecuteMsgBuilder.compound(), fee_, memo_, funds_);
  };
  batchUnbond = async (fee_: number | StdFee | "auto" = "auto", memo_?: string, funds_?: Coin[]): Promise<ExecuteResult> => {
    return this._execute(AutocompounderExecuteMsgBuilder.batchUnbond(), fee_, memo_, funds_);
  };
  _execute = async (msg: ExecuteMsg, fee_: number | StdFee | "auto" = "auto", memo_?: string, funds_?: Coin[]): Promise<ExecuteResult> => {
    const signingCwClient = await this.accountWalletClient.getSigningCosmWasmClient();
    const sender = await this.accountWalletClient.getSenderAddress();
    const moduleMsg: AppExecuteMsg<ExecuteMsg> = AppExecuteMsgFactory.executeApp(msg);
    return await signingCwClient.execute(sender, await this.getAddress(), moduleMsg, fee_, memo_, funds_);
  };
}