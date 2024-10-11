/**
* This file was automatically generated by @abstract-money/ts-codegen@latest.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @abstract-money/ts-codegen generate command to regenerate this file.
*/

import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { StdFee } from "@cosmjs/amino";
import { CanExecuteRelayResponse, CosmosMsgForEmpty, BankMsg, Uint128, StakingMsg, DistributionMsg, WasmMsg, Binary, Coin, Empty, ExecuteMsgForEmpty, Addr, RelayTransaction, Guardians, MultiSig, InfoResponse, ContractVersion, InstantiateMsg, CreateWalletMsg, QueryMsg, Uint64 } from "./Govec.types";
export interface GovecReadOnlyInterface {
  contractAddress: string;
  info: () => Promise<InfoResponse>;
  canExecuteRelay: ({
    sender
  }: {
    sender: string;
  }) => Promise<CanExecuteRelayResponse>;
}
export class GovecQueryClient implements GovecReadOnlyInterface {
  client: CosmWasmClient;
  contractAddress: string;

  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client;
    this.contractAddress = contractAddress;
    this.info = this.info.bind(this);
    this.canExecuteRelay = this.canExecuteRelay.bind(this);
  }

  info = async (): Promise<InfoResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      info: {}
    });
  };
  canExecuteRelay = async ({
    sender
  }: {
    sender: string;
  }): Promise<CanExecuteRelayResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      can_execute_relay: {
        sender
      }
    });
  };
}
export interface GovecInterface extends GovecReadOnlyInterface {
  contractAddress: string;
  sender: string;
  execute: ({
    msgs
  }: {
    msgs: CosmosMsgForEmpty[];
  }, fee_?: number | StdFee | "auto", memo_?: string, funds_?: Coin[]) => Promise<ExecuteResult>;
  revertFreezeStatus: (fee_?: number | StdFee | "auto", memo_?: string, funds_?: Coin[]) => Promise<ExecuteResult>;
  relay: ({
    transaction
  }: {
    transaction: RelayTransaction;
  }, fee_?: number | StdFee | "auto", memo_?: string, funds_?: Coin[]) => Promise<ExecuteResult>;
  rotateUserKey: ({
    newUserAddress
  }: {
    newUserAddress: string;
  }, fee_?: number | StdFee | "auto", memo_?: string, funds_?: Coin[]) => Promise<ExecuteResult>;
  addRelayer: ({
    newRelayerAddress
  }: {
    newRelayerAddress: Addr;
  }, fee_?: number | StdFee | "auto", memo_?: string, funds_?: Coin[]) => Promise<ExecuteResult>;
  removeRelayer: ({
    relayerAddress
  }: {
    relayerAddress: Addr;
  }, fee_?: number | StdFee | "auto", memo_?: string, funds_?: Coin[]) => Promise<ExecuteResult>;
  updateGuardians: ({
    guardians,
    newMultisigCodeId
  }: {
    guardians: Guardians;
    newMultisigCodeId?: number;
  }, fee_?: number | StdFee | "auto", memo_?: string, funds_?: Coin[]) => Promise<ExecuteResult>;
  updateLabel: ({
    newLabel
  }: {
    newLabel: string;
  }, fee_?: number | StdFee | "auto", memo_?: string, funds_?: Coin[]) => Promise<ExecuteResult>;
}
export class GovecClient extends GovecQueryClient implements GovecInterface {
  client: SigningCosmWasmClient;
  sender: string;
  contractAddress: string;

  constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string) {
    super(client, contractAddress);
    this.client = client;
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

  execute = async ({
    msgs
  }: {
    msgs: CosmosMsgForEmpty[];
  }, fee_: number | StdFee | "auto" = "auto", memo_?: string, funds_?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      execute: {
        msgs
      }
    }, fee_, memo_, funds_);
  };
  revertFreezeStatus = async (fee_: number | StdFee | "auto" = "auto", memo_?: string, funds_?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      revert_freeze_status: {}
    }, fee_, memo_, funds_);
  };
  relay = async ({
    transaction
  }: {
    transaction: RelayTransaction;
  }, fee_: number | StdFee | "auto" = "auto", memo_?: string, funds_?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      relay: {
        transaction
      }
    }, fee_, memo_, funds_);
  };
  rotateUserKey = async ({
    newUserAddress
  }: {
    newUserAddress: string;
  }, fee_: number | StdFee | "auto" = "auto", memo_?: string, funds_?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      rotate_user_key: {
        new_user_address: newUserAddress
      }
    }, fee_, memo_, funds_);
  };
  addRelayer = async ({
    newRelayerAddress
  }: {
    newRelayerAddress: Addr;
  }, fee_: number | StdFee | "auto" = "auto", memo_?: string, funds_?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      add_relayer: {
        new_relayer_address: newRelayerAddress
      }
    }, fee_, memo_, funds_);
  };
  removeRelayer = async ({
    relayerAddress
  }: {
    relayerAddress: Addr;
  }, fee_: number | StdFee | "auto" = "auto", memo_?: string, funds_?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      remove_relayer: {
        relayer_address: relayerAddress
      }
    }, fee_, memo_, funds_);
  };
  updateGuardians = async ({
    guardians,
    newMultisigCodeId
  }: {
    guardians: Guardians;
    newMultisigCodeId?: number;
  }, fee_: number | StdFee | "auto" = "auto", memo_?: string, funds_?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_guardians: {
        guardians,
        new_multisig_code_id: newMultisigCodeId
      }
    }, fee_, memo_, funds_);
  };
  updateLabel = async ({
    newLabel
  }: {
    newLabel: string;
  }, fee_: number | StdFee | "auto" = "auto", memo_?: string, funds_?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_label: {
        new_label: newLabel
      }
    }, fee_, memo_, funds_);
  };
}