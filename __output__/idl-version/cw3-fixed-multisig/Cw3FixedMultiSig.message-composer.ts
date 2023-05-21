/**
* This file was automatically generated by @cosmwasm/ts-codegen@latest.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { MsgExecuteContractEncodeObject } from "cosmwasm";
import { MsgExecuteContract } from "cosmjs-types/cosmwasm/wasm/v1/tx";
import { toUtf8 } from "@cosmjs/encoding";
import { AppExecuteMsg, AppModuleExecuteMsgBuilder } from "@abstract-money/abstract.js";
import { Duration, Threshold, Decimal, InstantiateMsg, Voter, ExecuteMsg, Expiration, Timestamp, Uint64, CosmosMsgForEmpty, BankMsg, Uint128, StakingMsg, DistributionMsg, WasmMsg, Binary, Vote, Coin, Empty, QueryMsg, Status, ThresholdResponse, ProposalListResponse, ProposalResponseForEmpty, VoterListResponse, VoterDetail, VoteListResponse, VoteInfo, VoteResponse, VoterResponse } from "./Cw3FixedMultiSig.types";
export interface Cw3FixedMultiSigMessage {
  contractAddress: string;
  sender: string;
  propose: ({
    description,
    latest,
    msgs,
    title
  }: {
    description: string;
    latest?: Expiration;
    msgs: CosmosMsgForEmpty[];
    title: string;
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
  vote: ({
    proposalId,
    vote
  }: {
    proposalId: number;
    vote: Vote;
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
  execute: ({
    proposalId
  }: {
    proposalId: number;
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
  close: ({
    proposalId
  }: {
    proposalId: number;
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
export class Cw3FixedMultiSigMessageComposer implements Cw3FixedMultiSigMessage {
  sender: string;
  contractAddress: string;

  constructor(sender: string, contractAddress: string) {
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.propose = this.propose.bind(this);
    this.vote = this.vote.bind(this);
    this.execute = this.execute.bind(this);
    this.close = this.close.bind(this);
  }

  propose = ({
    description,
    latest,
    msgs,
    title
  }: {
    description: string;
    latest?: Expiration;
    msgs: CosmosMsgForEmpty[];
    title: string;
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    const msg = {
      propose: {
        description,
        latest,
        msgs,
        title
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
  vote = ({
    proposalId,
    vote
  }: {
    proposalId: number;
    vote: Vote;
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    const msg = {
      vote: {
        proposal_id: proposalId,
        vote
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
  execute = ({
    proposalId
  }: {
    proposalId: number;
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    const msg = {
      execute: {
        proposal_id: proposalId
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
  close = ({
    proposalId
  }: {
    proposalId: number;
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    const msg = {
      close: {
        proposal_id: proposalId
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