/**
* This file was automatically generated by @cosmwasm/ts-codegen@latest.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { Coin } from "@cosmjs/amino";
import { MsgExecuteContractEncodeObject } from "cosmwasm";
import { MsgExecuteContract } from "cosmjs-types/cosmwasm/wasm/v1/tx";
import { toUtf8 } from "@cosmjs/encoding";
import { AppExecuteMsg, AppModuleExecuteMsgBuilder } from "@abstract-money/abstract.js";
import { Decimal, AssetEntry, BondingPeriodSelector, Duration, InstantiateMsg, ExecuteMsg, Uint128, AnsAsset, QueryMsg, MigrateMsg, Expiration, Timestamp, Uint64, ArrayOfTupleOfStringAndArrayOfClaim, Claim, ArrayOfClaim, Addr, PoolAddressBaseForAddr, AssetInfoBaseForAddr, PoolType, Config, PoolMetadata } from "./Autocompounder.types";
export interface AutocompounderMessage {
  contractAddress: string;
  sender: string;
  updateFeeConfig: ({
    deposit,
    performance,
    withdrawal
  }: {
    deposit?: Decimal;
    performance?: Decimal;
    withdrawal?: Decimal;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  deposit: ({
    funds
  }: {
    funds: AnsAsset[];
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  withdraw: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
  compound: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
  batchUnbond: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
export class AutocompounderMessageComposer implements AutocompounderMessage {
  sender: string;
  contractAddress: string;

  constructor(sender: string, contractAddress: string) {
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.updateFeeConfig = this.updateFeeConfig.bind(this);
    this.deposit = this.deposit.bind(this);
    this.withdraw = this.withdraw.bind(this);
    this.compound = this.compound.bind(this);
    this.batchUnbond = this.batchUnbond.bind(this);
  }

  updateFeeConfig = ({
    deposit,
    performance,
    withdrawal
  }: {
    deposit?: Decimal;
    performance?: Decimal;
    withdrawal?: Decimal;
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    const msg = {
      update_fee_config: {
        deposit,
        performance,
        withdrawal
      }
    };
    const moduleMsg: AppExecuteMsg<ExecuteMsg> = AppModuleExecuteMsgBuilder.executeApp(msg);
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify(moduleMsg)),
        funds: _funds
      })
    };
  };
  deposit = ({
    funds
  }: {
    funds: AnsAsset[];
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    const msg = {
      deposit: {
        funds
      }
    };
    const moduleMsg: AppExecuteMsg<ExecuteMsg> = AppModuleExecuteMsgBuilder.executeApp(msg);
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify(moduleMsg)),
        funds: _funds
      })
    };
  };
  withdraw = (_funds?: Coin[]): MsgExecuteContractEncodeObject => {
    const msg = {
      withdraw: {}
    };
    const moduleMsg: AppExecuteMsg<ExecuteMsg> = AppModuleExecuteMsgBuilder.executeApp(msg);
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify(moduleMsg)),
        funds: _funds
      })
    };
  };
  compound = (_funds?: Coin[]): MsgExecuteContractEncodeObject => {
    const msg = {
      compound: {}
    };
    const moduleMsg: AppExecuteMsg<ExecuteMsg> = AppModuleExecuteMsgBuilder.executeApp(msg);
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify(moduleMsg)),
        funds: _funds
      })
    };
  };
  batchUnbond = (_funds?: Coin[]): MsgExecuteContractEncodeObject => {
    const msg = {
      batch_unbond: {}
    };
    const moduleMsg: AppExecuteMsg<ExecuteMsg> = AppModuleExecuteMsgBuilder.executeApp(msg);
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify(moduleMsg)),
        funds: _funds
      })
    };
  };
}