/**
* This file was automatically generated by @cosmwasm/ts-codegen@latest.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { StdFee } from "@cosmjs/amino";
import { Timestamp, Uint64, Uint128, ConfigResponse, Coin, Addr, Config, ExecuteMsg, Decimal, InstantiateMsg, InstantiateMsg1, CollectionInfoForRoyaltyInfoResponse, RoyaltyInfoResponse, QueryMsg } from "./Minter.types";
export interface MinterReadOnlyInterface {
  contractAddress: string;
  config: () => Promise<ConfigResponse>;
  mintableNumTokens: () => Promise<MintableNumTokensResponse>;
  startTime: () => Promise<StartTimeResponse>;
  mintPrice: () => Promise<MintPriceResponse>;
  mintCount: ({
    address
  }: {
    address: string;
  }) => Promise<MintCountResponse>;
}
export class MinterQueryClient implements MinterReadOnlyInterface {
  client: CosmWasmClient;
  contractAddress: string;
  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client;
    this.contractAddress = contractAddress;
    this.config = this.config.bind(this);
    this.mintableNumTokens = this.mintableNumTokens.bind(this);
    this.startTime = this.startTime.bind(this);
    this.mintPrice = this.mintPrice.bind(this);
    this.mintCount = this.mintCount.bind(this);
  }
  config = async (): Promise<ConfigResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      config: {}
    });
  };
  mintableNumTokens = async (): Promise<MintableNumTokensResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      mintable_num_tokens: {}
    });
  };
  startTime = async (): Promise<StartTimeResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      start_time: {}
    });
  };
  mintPrice = async (): Promise<MintPriceResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      mint_price: {}
    });
  };
  mintCount = async ({
    address
  }: {
    address: string;
  }): Promise<MintCountResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      mint_count: {
        address
      }
    });
  };
}
export interface MinterInterface extends MinterReadOnlyInterface {
  contractAddress: string;
  sender: string;
  mint: (fee_?: number | StdFee | "auto", memo_?: string, funds_?: Coin[]) => Promise<ExecuteResult>;
  setWhitelist: ({
    whitelist
  }: {
    whitelist: string;
  }, fee_?: number | StdFee | "auto", memo_?: string, funds_?: Coin[]) => Promise<ExecuteResult>;
  updateStartTime: (fee_?: number | StdFee | "auto", memo_?: string, funds_?: Coin[]) => Promise<ExecuteResult>;
  updatePerAddressLimit: ({
    perAddressLimit
  }: {
    perAddressLimit: number;
  }, fee_?: number | StdFee | "auto", memo_?: string, funds_?: Coin[]) => Promise<ExecuteResult>;
  mintTo: ({
    recipient
  }: {
    recipient: string;
  }, fee_?: number | StdFee | "auto", memo_?: string, funds_?: Coin[]) => Promise<ExecuteResult>;
  mintFor: ({
    recipient,
    tokenId
  }: {
    recipient: string;
    tokenId: number;
  }, fee_?: number | StdFee | "auto", memo_?: string, funds_?: Coin[]) => Promise<ExecuteResult>;
  withdraw: (fee_?: number | StdFee | "auto", memo_?: string, funds_?: Coin[]) => Promise<ExecuteResult>;
}
export class MinterClient extends MinterQueryClient implements MinterInterface {
  client: SigningCosmWasmClient;
  sender: string;
  contractAddress: string;
  constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string) {
    super(client, contractAddress);
    this.client = client;
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.mint = this.mint.bind(this);
    this.setWhitelist = this.setWhitelist.bind(this);
    this.updateStartTime = this.updateStartTime.bind(this);
    this.updatePerAddressLimit = this.updatePerAddressLimit.bind(this);
    this.mintTo = this.mintTo.bind(this);
    this.mintFor = this.mintFor.bind(this);
    this.withdraw = this.withdraw.bind(this);
  }
  mint = async (fee_: number | StdFee | "auto" = "auto", memo_?: string, funds_?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      mint: {}
    }, fee_, memo_, funds_);
  };
  setWhitelist = async ({
    whitelist
  }: {
    whitelist: string;
  }, fee_: number | StdFee | "auto" = "auto", memo_?: string, funds_?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      set_whitelist: {
        whitelist
      }
    }, fee_, memo_, funds_);
  };
  updateStartTime = async (fee_: number | StdFee | "auto" = "auto", memo_?: string, funds_?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_start_time: {}
    }, fee_, memo_, funds_);
  };
  updatePerAddressLimit = async ({
    perAddressLimit
  }: {
    perAddressLimit: number;
  }, fee_: number | StdFee | "auto" = "auto", memo_?: string, funds_?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_per_address_limit: {
        per_address_limit: perAddressLimit
      }
    }, fee_, memo_, funds_);
  };
  mintTo = async ({
    recipient
  }: {
    recipient: string;
  }, fee_: number | StdFee | "auto" = "auto", memo_?: string, funds_?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      mint_to: {
        recipient
      }
    }, fee_, memo_, funds_);
  };
  mintFor = async ({
    recipient,
    tokenId
  }: {
    recipient: string;
    tokenId: number;
  }, fee_: number | StdFee | "auto" = "auto", memo_?: string, funds_?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      mint_for: {
        recipient,
        token_id: tokenId
      }
    }, fee_, memo_, funds_);
  };
  withdraw = async (fee_: number | StdFee | "auto" = "auto", memo_?: string, funds_?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      withdraw: {}
    }, fee_, memo_, funds_);
  };
}