/**
* This file was automatically generated by @abstract-money/ts-codegen@latest.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @abstract-money/ts-codegen generate command to regenerate this file.
*/

import { MsgExecuteContractEncodeObject } from "@cosmjs/cosmwasm-stargate";
import { MsgExecuteContract } from "cosmjs-types/cosmwasm/wasm/v1/tx";
import { toUtf8 } from "@cosmjs/encoding";
import { AppExecuteMsg, AppExecuteMsgFactory } from "@abstract-money/abstract.js";
import { InstantiateMsg, ExecuteMsg, QueryMsg, MigrateMsg, SudoMsg, Uint128, Coin, IntResponse, AllBalanceResponse, Binary, RecurseResponse, VerifierResponse } from "./HackAtom.types";
export interface HackAtomMessage {
  contractAddress: string;
  sender: string;
  release: (_funds?: Coin[]) => MsgExecuteContractEncodeObject;
  cpuLoop: (_funds?: Coin[]) => MsgExecuteContractEncodeObject;
  storageLoop: (_funds?: Coin[]) => MsgExecuteContractEncodeObject;
  memoryLoop: (_funds?: Coin[]) => MsgExecuteContractEncodeObject;
  messageLoop: (_funds?: Coin[]) => MsgExecuteContractEncodeObject;
  allocateLargeMemory: ({
    pages
  }: {
    pages: number;
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
  panic: (_funds?: Coin[]) => MsgExecuteContractEncodeObject;
  userErrorsInApiCalls: (_funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
export class HackAtomMessageComposer implements HackAtomMessage {
  sender: string;
  contractAddress: string;

  constructor(sender: string, contractAddress: string) {
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.release = this.release.bind(this);
    this.cpuLoop = this.cpuLoop.bind(this);
    this.storageLoop = this.storageLoop.bind(this);
    this.memoryLoop = this.memoryLoop.bind(this);
    this.messageLoop = this.messageLoop.bind(this);
    this.allocateLargeMemory = this.allocateLargeMemory.bind(this);
    this.panic = this.panic.bind(this);
    this.userErrorsInApiCalls = this.userErrorsInApiCalls.bind(this);
  }

  release = (_funds?: Coin[]): MsgExecuteContractEncodeObject => {
    const msg = {
      release: {}
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
  cpuLoop = (_funds?: Coin[]): MsgExecuteContractEncodeObject => {
    const msg = {
      cpu_loop: {}
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
  storageLoop = (_funds?: Coin[]): MsgExecuteContractEncodeObject => {
    const msg = {
      storage_loop: {}
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
  memoryLoop = (_funds?: Coin[]): MsgExecuteContractEncodeObject => {
    const msg = {
      memory_loop: {}
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
  messageLoop = (_funds?: Coin[]): MsgExecuteContractEncodeObject => {
    const msg = {
      message_loop: {}
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
  allocateLargeMemory = ({
    pages
  }: {
    pages: number;
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    const msg = {
      allocate_large_memory: {
        pages
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
  panic = (_funds?: Coin[]): MsgExecuteContractEncodeObject => {
    const msg = {
      panic: {}
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
  userErrorsInApiCalls = (_funds?: Coin[]): MsgExecuteContractEncodeObject => {
    const msg = {
      user_errors_in_api_calls: {}
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