/**
* This file was automatically generated by @cosmwasm/ts-codegen@latest.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { MsgExecuteContractEncodeObject } from "cosmwasm";
import { MsgExecuteContract } from "cosmjs-types/cosmwasm/wasm/v1/tx";
import { toUtf8 } from "@cosmjs/encoding";
import { AppExecuteMsg, AppExecuteMsgFactory } from "@abstract-money/abstract.js";
import { Addr, Uint128, Duration, Threshold, PercentageThreshold, Decimal, ConfigResponse, CheckedDepositInfo, ExecuteMsg, CosmosMsgForEmpty, BankMsg, StakingMsg, DistributionMsg, Binary, IbcMsg, Timestamp, Uint64, WasmMsg, GovMsg, VoteOption, Vote, DepositToken, Coin, Empty, IbcTimeout, IbcTimeoutBlock, DepositInfo, GovernanceModulesResponse, InfoResponse, ContractVersion, InstantiateMsg, Expiration, Status, ListProposalsResponse, ProposalResponse, Proposal, Votes, ListVotesResponse, VoteInfo, MigrateMsg, ProposalCountResponse, ProposalHooksResponse, QueryMsg, ReverseProposalsResponse, VoteHooksResponse, VoteResponse } from "./CwProposalSingle.types";
export interface CwProposalSingleMessage {
  contractAddress: string;
  sender: string;
  propose: ({
    description,
    msgs,
    title
  }: {
    description: string;
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
  updateConfig: ({
    allowRevoting,
    dao,
    depositInfo,
    maxVotingPeriod,
    minVotingPeriod,
    onlyMembersExecute,
    threshold
  }: {
    allowRevoting: boolean;
    dao: string;
    depositInfo?: DepositInfo;
    maxVotingPeriod: Duration;
    minVotingPeriod?: Duration;
    onlyMembersExecute: boolean;
    threshold: Threshold;
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
  addProposalHook: ({
    address
  }: {
    address: string;
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
  removeProposalHook: ({
    address
  }: {
    address: string;
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
  addVoteHook: ({
    address
  }: {
    address: string;
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
  removeVoteHook: ({
    address
  }: {
    address: string;
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
export class CwProposalSingleMessageComposer implements CwProposalSingleMessage {
  sender: string;
  contractAddress: string;

  constructor(sender: string, contractAddress: string) {
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.propose = this.propose.bind(this);
    this.vote = this.vote.bind(this);
    this.execute = this.execute.bind(this);
    this.close = this.close.bind(this);
    this.updateConfig = this.updateConfig.bind(this);
    this.addProposalHook = this.addProposalHook.bind(this);
    this.removeProposalHook = this.removeProposalHook.bind(this);
    this.addVoteHook = this.addVoteHook.bind(this);
    this.removeVoteHook = this.removeVoteHook.bind(this);
  }

  propose = ({
    description,
    msgs,
    title
  }: {
    description: string;
    msgs: CosmosMsgForEmpty[];
    title: string;
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    const msg = {
      propose: {
        description,
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
  updateConfig = ({
    allowRevoting,
    dao,
    depositInfo,
    maxVotingPeriod,
    minVotingPeriod,
    onlyMembersExecute,
    threshold
  }: {
    allowRevoting: boolean;
    dao: string;
    depositInfo?: DepositInfo;
    maxVotingPeriod: Duration;
    minVotingPeriod?: Duration;
    onlyMembersExecute: boolean;
    threshold: Threshold;
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    const msg = {
      update_config: {
        allow_revoting: allowRevoting,
        dao,
        deposit_info: depositInfo,
        max_voting_period: maxVotingPeriod,
        min_voting_period: minVotingPeriod,
        only_members_execute: onlyMembersExecute,
        threshold
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
  addProposalHook = ({
    address
  }: {
    address: string;
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    const msg = {
      add_proposal_hook: {
        address
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
  removeProposalHook = ({
    address
  }: {
    address: string;
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    const msg = {
      remove_proposal_hook: {
        address
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
  addVoteHook = ({
    address
  }: {
    address: string;
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    const msg = {
      add_vote_hook: {
        address
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
  removeVoteHook = ({
    address
  }: {
    address: string;
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    const msg = {
      remove_vote_hook: {
        address
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