/**
* This file was automatically generated by @cosmwasm/ts-codegen@latest.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { Coin, StdFee } from "@cosmjs/amino";
import { Decimal, InstantiateMsg, ExecuteMsg, Uint128, AssetInfoBaseForString, AssetBaseForString, QueryMsg, MigrateMsg, StateResponse } from "./Etf.types";
export interface EtfReadOnlyInterface {
  contractAddress: string;
  state: () => Promise<StateResponse>;
}
export class EtfQueryClient implements EtfReadOnlyInterface {
  client: CosmWasmClient;
  contractAddress: string;

  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client;
    this.contractAddress = contractAddress;
    this.state = this.state.bind(this);
  }

  state = async (): Promise<StateResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      state: {}
    });
  };
}
export interface EtfInterface extends EtfReadOnlyInterface {
  contractAddress: string;
  sender: string;
  provideLiquidity: ({
    asset
  }: {
    asset: AssetBaseForString;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  setFee: ({
    fee
  }: {
    fee: Decimal;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
}
export class EtfClient extends EtfQueryClient implements EtfInterface {
  client: SigningCosmWasmClient;
  sender: string;
  contractAddress: string;

  constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string) {
    super(client, contractAddress);
    this.client = client;
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.provideLiquidity = this.provideLiquidity.bind(this);
    this.setFee = this.setFee.bind(this);
  }

  provideLiquidity = async ({
    asset
  }: {
    asset: AssetBaseForString;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      provide_liquidity: {
        asset
      }
    }, fee, memo, _funds);
  };
  setFee = async ({
    fee
  }: {
    fee: Decimal;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      set_fee: {
        fee
      }
    }, fee, memo, _funds);
  };
}