/**
* This file was automatically generated by @abstract-money/ts-codegen@latest.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @abstract-money/ts-codegen generate command to regenerate this file.
*/

import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { StdFee } from "@cosmjs/amino";
import { Addr, Uint128, Duration, Threshold, PercentageThreshold, Decimal, ConfigResponse, CheckedDepositInfo, ExecuteMsg, CosmosMsgForEmpty, BankMsg, StakingMsg, DistributionMsg, Binary, IbcMsg, Timestamp, Uint64, WasmMsg, GovMsg, VoteOption, Vote, DepositToken, Coin, Empty, IbcTimeout, IbcTimeoutBlock, DepositInfo, GovernanceModulesResponse, InfoResponse, ContractVersion, InstantiateMsg, Expiration, Status, ListProposalsResponse, ProposalResponse, Proposal, Votes, ListVotesResponse, VoteInfo, MigrateMsg, ProposalCountResponse, ProposalHooksResponse, QueryMsg, ReverseProposalsResponse, VoteHooksResponse, VoteResponse } from "./CwSingle.types";
export interface CwSingleReadOnlyInterface {
  contractAddress: string;
  config: () => Promise<ConfigResponse>;
  proposal: ({
    proposalId
  }: {
    proposalId: number;
  }) => Promise<ProposalResponse>;
  listProposals: ({
    limit,
    startAfter
  }: {
    limit?: number;
    startAfter?: number;
  }) => Promise<ListProposalsResponse>;
  reverseProposals: ({
    limit,
    startBefore
  }: {
    limit?: number;
    startBefore?: number;
  }) => Promise<ReverseProposalsResponse>;
  proposalCount: () => Promise<ProposalCountResponse>;
  vote: ({
    proposalId,
    voter
  }: {
    proposalId: number;
    voter: string;
  }) => Promise<VoteResponse>;
  listVotes: ({
    limit,
    proposalId,
    startAfter
  }: {
    limit?: number;
    proposalId: number;
    startAfter?: string;
  }) => Promise<ListVotesResponse>;
  proposalHooks: () => Promise<ProposalHooksResponse>;
  voteHooks: () => Promise<VoteHooksResponse>;
  info: () => Promise<InfoResponse>;
}
export class CwSingleQueryClient implements CwSingleReadOnlyInterface {
  client: CosmWasmClient;
  contractAddress: string;

  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client;
    this.contractAddress = contractAddress;
    this.config = this.config.bind(this);
    this.proposal = this.proposal.bind(this);
    this.listProposals = this.listProposals.bind(this);
    this.reverseProposals = this.reverseProposals.bind(this);
    this.proposalCount = this.proposalCount.bind(this);
    this.vote = this.vote.bind(this);
    this.listVotes = this.listVotes.bind(this);
    this.proposalHooks = this.proposalHooks.bind(this);
    this.voteHooks = this.voteHooks.bind(this);
    this.info = this.info.bind(this);
  }

  config = async (): Promise<ConfigResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      config: {}
    });
  };
  proposal = async ({
    proposalId
  }: {
    proposalId: number;
  }): Promise<ProposalResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      proposal: {
        proposal_id: proposalId
      }
    });
  };
  listProposals = async ({
    limit,
    startAfter
  }: {
    limit?: number;
    startAfter?: number;
  }): Promise<ListProposalsResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      list_proposals: {
        limit,
        start_after: startAfter
      }
    });
  };
  reverseProposals = async ({
    limit,
    startBefore
  }: {
    limit?: number;
    startBefore?: number;
  }): Promise<ReverseProposalsResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      reverse_proposals: {
        limit,
        start_before: startBefore
      }
    });
  };
  proposalCount = async (): Promise<ProposalCountResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      proposal_count: {}
    });
  };
  vote = async ({
    proposalId,
    voter
  }: {
    proposalId: number;
    voter: string;
  }): Promise<VoteResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      vote: {
        proposal_id: proposalId,
        voter
      }
    });
  };
  listVotes = async ({
    limit,
    proposalId,
    startAfter
  }: {
    limit?: number;
    proposalId: number;
    startAfter?: string;
  }): Promise<ListVotesResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      list_votes: {
        limit,
        proposal_id: proposalId,
        start_after: startAfter
      }
    });
  };
  proposalHooks = async (): Promise<ProposalHooksResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      proposal_hooks: {}
    });
  };
  voteHooks = async (): Promise<VoteHooksResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      vote_hooks: {}
    });
  };
  info = async (): Promise<InfoResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      info: {}
    });
  };
}
export interface CwSingleInterface {
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
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  vote: ({
    proposalId,
    vote
  }: {
    proposalId: number;
    vote: Vote;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  execute: ({
    proposalId
  }: {
    proposalId: number;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  close: ({
    proposalId
  }: {
    proposalId: number;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
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
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  addProposalHook: ({
    address
  }: {
    address: string;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  removeProposalHook: ({
    address
  }: {
    address: string;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  addVoteHook: ({
    address
  }: {
    address: string;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  removeVoteHook: ({
    address
  }: {
    address: string;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
}
export class CwSingleClient implements CwSingleInterface {
  client: SigningCosmWasmClient;
  sender: string;
  contractAddress: string;

  constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string) {
    this.client = client;
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

  propose = async ({
    description,
    msgs,
    title
  }: {
    description: string;
    msgs: CosmosMsgForEmpty[];
    title: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      propose: {
        description,
        msgs,
        title
      }
    }, fee, memo, _funds);
  };
  vote = async ({
    proposalId,
    vote
  }: {
    proposalId: number;
    vote: Vote;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      vote: {
        proposal_id: proposalId,
        vote
      }
    }, fee, memo, _funds);
  };
  execute = async ({
    proposalId
  }: {
    proposalId: number;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      execute: {
        proposal_id: proposalId
      }
    }, fee, memo, _funds);
  };
  close = async ({
    proposalId
  }: {
    proposalId: number;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      close: {
        proposal_id: proposalId
      }
    }, fee, memo, _funds);
  };
  updateConfig = async ({
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
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_config: {
        allow_revoting: allowRevoting,
        dao,
        deposit_info: depositInfo,
        max_voting_period: maxVotingPeriod,
        min_voting_period: minVotingPeriod,
        only_members_execute: onlyMembersExecute,
        threshold
      }
    }, fee, memo, _funds);
  };
  addProposalHook = async ({
    address
  }: {
    address: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      add_proposal_hook: {
        address
      }
    }, fee, memo, _funds);
  };
  removeProposalHook = async ({
    address
  }: {
    address: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      remove_proposal_hook: {
        address
      }
    }, fee, memo, _funds);
  };
  addVoteHook = async ({
    address
  }: {
    address: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      add_vote_hook: {
        address
      }
    }, fee, memo, _funds);
  };
  removeVoteHook = async ({
    address
  }: {
    address: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      remove_vote_hook: {
        address
      }
    }, fee, memo, _funds);
  };
}