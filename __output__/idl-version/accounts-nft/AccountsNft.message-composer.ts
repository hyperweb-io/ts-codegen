/**
* This file was automatically generated by @abstract-money/ts-codegen@latest.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @abstract-money/ts-codegen generate command to regenerate this file.
*/

import { Coin } from "@cosmjs/amino";
import { MsgExecuteContractEncodeObject } from "@cosmjs/cosmwasm-stargate";
import { MsgExecuteContract } from "cosmjs-types/cosmwasm/wasm/v1/tx";
import { toUtf8 } from "@cosmjs/encoding";
import { AppExecuteMsg, AppExecuteMsgFactory } from "@abstract-money/core";
import { InstantiateMsg, ExecuteMsg, Binary, Expiration, Timestamp, Uint64, QueryMsg, VaultBaseForString, Uint128, ArrayOfSharesResponseItem, SharesResponseItem, AllNftInfoResponseForEmpty, OwnerOfResponse, Approval, NftInfoResponseForEmpty, Empty, OperatorsResponse, String, TokensResponse, ArrayOfVaultBaseForString, ApprovalResponse, ApprovalsResponse, ContractInfoResponse, MinterResponse, NumTokensResponse } from "./AccountsNft.types";
export interface AccountsNftMessage {
  contractAddress: string;
  sender: string;
  proposeNewOwner: ({
    newOwner
  }: {
    newOwner: string;
  }, funds_?: Coin[]) => MsgExecuteContractEncodeObject;
  acceptOwnership: (funds_?: Coin[]) => MsgExecuteContractEncodeObject;
  mint: ({
    user
  }: {
    user: string;
  }, funds_?: Coin[]) => MsgExecuteContractEncodeObject;
  transferNft: ({
    recipient,
    tokenId
  }: {
    recipient: string;
    tokenId: string;
  }, funds_?: Coin[]) => MsgExecuteContractEncodeObject;
  sendNft: ({
    contract,
    msg,
    tokenId
  }: {
    contract: string;
    msg: Binary;
    tokenId: string;
  }, funds_?: Coin[]) => MsgExecuteContractEncodeObject;
  approve: ({
    expires,
    spender,
    tokenId
  }: {
    expires?: Expiration;
    spender: string;
    tokenId: string;
  }, funds_?: Coin[]) => MsgExecuteContractEncodeObject;
  revoke: ({
    spender,
    tokenId
  }: {
    spender: string;
    tokenId: string;
  }, funds_?: Coin[]) => MsgExecuteContractEncodeObject;
  approveAll: ({
    expires,
    operator
  }: {
    expires?: Expiration;
    operator: string;
  }, funds_?: Coin[]) => MsgExecuteContractEncodeObject;
  revokeAll: ({
    operator
  }: {
    operator: string;
  }, funds_?: Coin[]) => MsgExecuteContractEncodeObject;
  burn: ({
    tokenId
  }: {
    tokenId: string;
  }, funds_?: Coin[]) => MsgExecuteContractEncodeObject;
}
export class AccountsNftMessageComposer implements AccountsNftMessage {
  sender: string;
  contractAddress: string;

  constructor(sender: string, contractAddress: string) {
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.proposeNewOwner = this.proposeNewOwner.bind(this);
    this.acceptOwnership = this.acceptOwnership.bind(this);
    this.mint = this.mint.bind(this);
    this.transferNft = this.transferNft.bind(this);
    this.sendNft = this.sendNft.bind(this);
    this.approve = this.approve.bind(this);
    this.revoke = this.revoke.bind(this);
    this.approveAll = this.approveAll.bind(this);
    this.revokeAll = this.revokeAll.bind(this);
    this.burn = this.burn.bind(this);
  }

  proposeNewOwner = ({
    newOwner
  }: {
    newOwner: string;
  }, funds_?: Coin[]): MsgExecuteContractEncodeObject => {
    const msg = {
      propose_new_owner: {
        new_owner: newOwner
      }
    };
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify(msg)),
        funds: funds_
      })
    };
  };
  acceptOwnership = (funds_?: Coin[]): MsgExecuteContractEncodeObject => {
    const msg = {
      accept_ownership: {}
    };
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify(msg)),
        funds: funds_
      })
    };
  };
  mint = ({
    user
  }: {
    user: string;
  }, funds_?: Coin[]): MsgExecuteContractEncodeObject => {
    const msg = {
      mint: {
        user
      }
    };
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify(msg)),
        funds: funds_
      })
    };
  };
  transferNft = ({
    recipient,
    tokenId
  }: {
    recipient: string;
    tokenId: string;
  }, funds_?: Coin[]): MsgExecuteContractEncodeObject => {
    const msg = {
      transfer_nft: {
        recipient,
        token_id: tokenId
      }
    };
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify(msg)),
        funds: funds_
      })
    };
  };
  sendNft = ({
    contract,
    msg,
    tokenId
  }: {
    contract: string;
    msg: Binary;
    tokenId: string;
  }, funds_?: Coin[]): MsgExecuteContractEncodeObject => {
    const msg = {
      send_nft: {
        contract,
        msg,
        token_id: tokenId
      }
    };
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify(msg)),
        funds: funds_
      })
    };
  };
  approve = ({
    expires,
    spender,
    tokenId
  }: {
    expires?: Expiration;
    spender: string;
    tokenId: string;
  }, funds_?: Coin[]): MsgExecuteContractEncodeObject => {
    const msg = {
      approve: {
        expires,
        spender,
        token_id: tokenId
      }
    };
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify(msg)),
        funds: funds_
      })
    };
  };
  revoke = ({
    spender,
    tokenId
  }: {
    spender: string;
    tokenId: string;
  }, funds_?: Coin[]): MsgExecuteContractEncodeObject => {
    const msg = {
      revoke: {
        spender,
        token_id: tokenId
      }
    };
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify(msg)),
        funds: funds_
      })
    };
  };
  approveAll = ({
    expires,
    operator
  }: {
    expires?: Expiration;
    operator: string;
  }, funds_?: Coin[]): MsgExecuteContractEncodeObject => {
    const msg = {
      approve_all: {
        expires,
        operator
      }
    };
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify(msg)),
        funds: funds_
      })
    };
  };
  revokeAll = ({
    operator
  }: {
    operator: string;
  }, funds_?: Coin[]): MsgExecuteContractEncodeObject => {
    const msg = {
      revoke_all: {
        operator
      }
    };
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify(msg)),
        funds: funds_
      })
    };
  };
  burn = ({
    tokenId
  }: {
    tokenId: string;
  }, funds_?: Coin[]): MsgExecuteContractEncodeObject => {
    const msg = {
      burn: {
        token_id: tokenId
      }
    };
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify(msg)),
        funds: funds_
      })
    };
  };
}