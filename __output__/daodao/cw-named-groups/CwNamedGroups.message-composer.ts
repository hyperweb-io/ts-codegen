/**
* This file was automatically generated by @cosmwasm/ts-codegen@latest.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { Coin } from "@cosmjs/amino";
import { MsgExecuteContractEncodeObject } from "@cosmjs/cosmwasm-stargate";
import { MsgExecuteContract } from "cosmjs-types/cosmwasm/wasm/v1/tx";
import { toUtf8 } from "@cosmjs/encoding";
import { DumpResponse, Group, ExecuteMsg, InstantiateMsg, Addr, ListAddressesResponse, ListGroupsResponse, QueryMsg } from "./CwNamedGroups.types";
export interface CwNamedGroupsMsg {
  contractAddress: string;
  sender: string;
  update: ({
    addressesToAdd,
    addressesToRemove,
    group
  }: {
    addressesToAdd?: string[];
    addressesToRemove?: string[];
    group: string;
  }, funds_?: Coin[]) => MsgExecuteContractEncodeObject;
  removeGroup: ({
    group
  }: {
    group: string;
  }, funds_?: Coin[]) => MsgExecuteContractEncodeObject;
  updateOwner: ({
    owner
  }: {
    owner: string;
  }, funds_?: Coin[]) => MsgExecuteContractEncodeObject;
}
export class CwNamedGroupsMsgComposer implements CwNamedGroupsMsg {
  sender: string;
  contractAddress: string;
  constructor(sender: string, contractAddress: string) {
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.update = this.update.bind(this);
    this.removeGroup = this.removeGroup.bind(this);
    this.updateOwner = this.updateOwner.bind(this);
  }
  update = ({
    addressesToAdd,
    addressesToRemove,
    group
  }: {
    addressesToAdd?: string[];
    addressesToRemove?: string[];
    group: string;
  }, funds_?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          update: {
            addresses_to_add: addressesToAdd,
            addresses_to_remove: addressesToRemove,
            group
          }
        })),
        funds: funds_
      })
    };
  };
  removeGroup = ({
    group
  }: {
    group: string;
  }, funds_?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          remove_group: {
            group
          }
        })),
        funds: funds_
      })
    };
  };
  updateOwner = ({
    owner
  }: {
    owner: string;
  }, funds_?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          update_owner: {
            owner
          }
        })),
        funds: funds_
      })
    };
  };
}