/**
* This file was automatically generated by @cosmwasm/ts-codegen@latest.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { MsgExecuteContractEncodeObject } from "cosmwasm";
import { MsgExecuteContract } from "cosmjs-types/cosmwasm/wasm/v1/tx";
import { toUtf8 } from "@cosmjs/encoding";
import { AppExecuteMsg, AppModuleExecuteMsgBuilder } from "@abstract-money/abstract.js";
import { AdminAddrResponse, CodeIdResponse, CodeIdType, Uint128, Binary, CreateWalletMsg, Guardians, MultiSig, Coin, Cw20Coin, ExecuteMsg, Addr, ProxyMigrationTxMsg, WalletAddr, CanonicalAddr, RelayTransaction, FeeResponse, GovecAddrResponse, InstantiateMsg, QueryMsg, WalletQueryPrefix, Duration, StakingOptions, WalletInfo, ContractVersion, WalletsOfResponse, WalletsResponse } from "./Factory.types";
export interface FactoryMessage {
  contractAddress: string;
  sender: string;
  createWallet: ({
    createWalletMsg
  }: {
    createWalletMsg: CreateWalletMsg;
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
  updateProxyUser: ({
    newUser,
    oldUser
  }: {
    newUser: Addr;
    oldUser: Addr;
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
  migrateWallet: ({
    migrationMsg,
    walletAddress
  }: {
    migrationMsg: ProxyMigrationTxMsg;
    walletAddress: WalletAddr;
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
  updateCodeId: ({
    newCodeId,
    ty
  }: {
    newCodeId: number;
    ty: CodeIdType;
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
  updateWalletFee: ({
    newFee
  }: {
    newFee: Coin;
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
  updateGovecAddr: ({
    addr
  }: {
    addr: string;
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
  updateAdmin: ({
    addr
  }: {
    addr: string;
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
export class FactoryMessageComposer implements FactoryMessage {
  sender: string;
  contractAddress: string;

  constructor(sender: string, contractAddress: string) {
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.createWallet = this.createWallet.bind(this);
    this.updateProxyUser = this.updateProxyUser.bind(this);
    this.migrateWallet = this.migrateWallet.bind(this);
    this.updateCodeId = this.updateCodeId.bind(this);
    this.updateWalletFee = this.updateWalletFee.bind(this);
    this.updateGovecAddr = this.updateGovecAddr.bind(this);
    this.updateAdmin = this.updateAdmin.bind(this);
  }

  createWallet = ({
    createWalletMsg
  }: {
    createWalletMsg: CreateWalletMsg;
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    const msg = {
      create_wallet: {
        create_wallet_msg: createWalletMsg
      }
    };
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify(msg)),
        funds: _funds
      })
    };
  };
  updateProxyUser = ({
    newUser,
    oldUser
  }: {
    newUser: Addr;
    oldUser: Addr;
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    const msg = {
      update_proxy_user: {
        new_user: newUser,
        old_user: oldUser
      }
    };
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify(msg)),
        funds: _funds
      })
    };
  };
  migrateWallet = ({
    migrationMsg,
    walletAddress
  }: {
    migrationMsg: ProxyMigrationTxMsg;
    walletAddress: WalletAddr;
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    const msg = {
      migrate_wallet: {
        migration_msg: migrationMsg,
        wallet_address: walletAddress
      }
    };
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify(msg)),
        funds: _funds
      })
    };
  };
  updateCodeId = ({
    newCodeId,
    ty
  }: {
    newCodeId: number;
    ty: CodeIdType;
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    const msg = {
      update_code_id: {
        new_code_id: newCodeId,
        ty
      }
    };
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify(msg)),
        funds: _funds
      })
    };
  };
  updateWalletFee = ({
    newFee
  }: {
    newFee: Coin;
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    const msg = {
      update_wallet_fee: {
        new_fee: newFee
      }
    };
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify(msg)),
        funds: _funds
      })
    };
  };
  updateGovecAddr = ({
    addr
  }: {
    addr: string;
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    const msg = {
      update_govec_addr: {
        addr
      }
    };
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify(msg)),
        funds: _funds
      })
    };
  };
  updateAdmin = ({
    addr
  }: {
    addr: string;
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    const msg = {
      update_admin: {
        addr
      }
    };
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify(msg)),
        funds: _funds
      })
    };
  };
}