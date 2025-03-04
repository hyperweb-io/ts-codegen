/**
* This file was automatically generated by @cosmwasm/ts-codegen@latest.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { MsgExecuteContractEncodeObject } from "@cosmjs/cosmwasm-stargate";
import { MsgExecuteContract } from "cosmjs-types/cosmwasm/wasm/v1/tx";
import { toUtf8 } from "@cosmjs/encoding";
import { CanExecuteRelayResponse, CosmosMsgForEmpty, BankMsg, Uint128, StakingMsg, DistributionMsg, WasmMsg, Binary, Coin, Empty, ExecuteMsgForEmpty, Addr, RelayTransaction, Guardians, MultiSig, InfoResponse, ContractVersion, InstantiateMsg, CreateWalletMsg, QueryMsg, Uint64 } from "./Proxy.types";
export interface ProxyMsg {
  contractAddress: string;
  sender: string;
  execute: ({
    msgs
  }: {
    msgs: CosmosMsgForEmpty[];
  }, funds_?: Coin[]) => MsgExecuteContractEncodeObject;
  revertFreezeStatus: (funds_?: Coin[]) => MsgExecuteContractEncodeObject;
  relay: ({
    transaction
  }: {
    transaction: RelayTransaction;
  }, funds_?: Coin[]) => MsgExecuteContractEncodeObject;
  rotateUserKey: ({
    newUserAddress
  }: {
    newUserAddress: string;
  }, funds_?: Coin[]) => MsgExecuteContractEncodeObject;
  addRelayer: ({
    newRelayerAddress
  }: {
    newRelayerAddress: Addr;
  }, funds_?: Coin[]) => MsgExecuteContractEncodeObject;
  removeRelayer: ({
    relayerAddress
  }: {
    relayerAddress: Addr;
  }, funds_?: Coin[]) => MsgExecuteContractEncodeObject;
  updateGuardians: ({
    guardians,
    newMultisigCodeId
  }: {
    guardians: Guardians;
    newMultisigCodeId?: number;
  }, funds_?: Coin[]) => MsgExecuteContractEncodeObject;
  updateLabel: ({
    newLabel
  }: {
    newLabel: string;
  }, funds_?: Coin[]) => MsgExecuteContractEncodeObject;
}
export class ProxyMsgComposer implements ProxyMsg {
  sender: string;
  contractAddress: string;
  constructor(sender: string, contractAddress: string) {
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.execute = this.execute.bind(this);
    this.revertFreezeStatus = this.revertFreezeStatus.bind(this);
    this.relay = this.relay.bind(this);
    this.rotateUserKey = this.rotateUserKey.bind(this);
    this.addRelayer = this.addRelayer.bind(this);
    this.removeRelayer = this.removeRelayer.bind(this);
    this.updateGuardians = this.updateGuardians.bind(this);
    this.updateLabel = this.updateLabel.bind(this);
  }
  execute = ({
    msgs
  }: {
    msgs: CosmosMsgForEmpty[];
  }, funds_?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          execute: {
            msgs
          }
        })),
        funds: funds_
      })
    };
  };
  revertFreezeStatus = (funds_?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          revert_freeze_status: {}
        })),
        funds: funds_
      })
    };
  };
  relay = ({
    transaction
  }: {
    transaction: RelayTransaction;
  }, funds_?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          relay: {
            transaction
          }
        })),
        funds: funds_
      })
    };
  };
  rotateUserKey = ({
    newUserAddress
  }: {
    newUserAddress: string;
  }, funds_?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          rotate_user_key: {
            new_user_address: newUserAddress
          }
        })),
        funds: funds_
      })
    };
  };
  addRelayer = ({
    newRelayerAddress
  }: {
    newRelayerAddress: Addr;
  }, funds_?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          add_relayer: {
            new_relayer_address: newRelayerAddress
          }
        })),
        funds: funds_
      })
    };
  };
  removeRelayer = ({
    relayerAddress
  }: {
    relayerAddress: Addr;
  }, funds_?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          remove_relayer: {
            relayer_address: relayerAddress
          }
        })),
        funds: funds_
      })
    };
  };
  updateGuardians = ({
    guardians,
    newMultisigCodeId
  }: {
    guardians: Guardians;
    newMultisigCodeId?: number;
  }, funds_?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          update_guardians: {
            guardians,
            new_multisig_code_id: newMultisigCodeId
          }
        })),
        funds: funds_
      })
    };
  };
  updateLabel = ({
    newLabel
  }: {
    newLabel: string;
  }, funds_?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          update_label: {
            new_label: newLabel
          }
        })),
        funds: funds_
      })
    };
  };
}