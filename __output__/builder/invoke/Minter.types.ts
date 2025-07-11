/**
* This file was automatically generated by @cosmwasm/ts-codegen@latest.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

export type Addr = string;
export type Timestamp = Uint64;
export type Uint64 = string;
export type Uint128 = string;
export interface Config {
  admin: Addr;
  base_token_uri: string;
  num_tokens: number;
  per_address_limit: number;
  sg721_code_id: number;
  start_time: Timestamp;
  unit_price: Coin;
  whitelist?: Addr | null;
  [k: string]: unknown;
}
export interface Coin {
  amount: Uint128;
  denom: string;
  [k: string]: unknown;
}
export interface ConfigResponse {
  admin: string;
  base_token_uri: string;
  num_tokens: number;
  per_address_limit: number;
  sg721_address: string;
  sg721_code_id: number;
  start_time: Timestamp;
  unit_price: Coin;
  whitelist?: string | null;
  [k: string]: unknown;
}
export type ExecuteMsg = {
  mint: {
    [k: string]: unknown;
  };
} | {
  set_whitelist: {
    whitelist: string;
    [k: string]: unknown;
  };
} | {
  update_start_time: Timestamp;
} | {
  update_per_address_limit: {
    per_address_limit: number;
    [k: string]: unknown;
  };
} | {
  mint_to: {
    recipient: string;
    [k: string]: unknown;
  };
} | {
  mint_for: {
    recipient: string;
    token_id: number;
    [k: string]: unknown;
  };
} | {
  withdraw: {
    [k: string]: unknown;
  };
};
export type Decimal = string;
export interface InstantiateMsg {
  base_token_uri: string;
  num_tokens: number;
  per_address_limit: number;
  sg721_code_id: number;
  sg721_instantiate_msg: InstantiateMsg1;
  start_time: Timestamp;
  unit_price: Coin;
  whitelist?: string | null;
  [k: string]: unknown;
}
export interface InstantiateMsg1 {
  collection_info: CollectionInfoForRoyaltyInfoResponse;
  minter: string;
  name: string;
  symbol: string;
  [k: string]: unknown;
}
export interface CollectionInfoForRoyaltyInfoResponse {
  creator: string;
  description: string;
  external_link?: string | null;
  image: string;
  royalty_info?: RoyaltyInfoResponse | null;
  [k: string]: unknown;
}
export interface RoyaltyInfoResponse {
  payment_address: string;
  share: Decimal;
  [k: string]: unknown;
}
export type QueryMsg = {
  config: {
    [k: string]: unknown;
  };
} | {
  mintable_num_tokens: {
    [k: string]: unknown;
  };
} | {
  start_time: {
    [k: string]: unknown;
  };
} | {
  mint_price: {
    [k: string]: unknown;
  };
} | {
  mint_count: {
    address: string;
    [k: string]: unknown;
  };
};