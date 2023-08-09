/**
* This file was automatically generated by @cosmwasm/ts-codegen@latest.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { Timestamp, Uint64, Uint128, ConfigResponse, Coin, Addr, Config, ExecuteMsg, Decimal, InstantiateMsg, InstantiateMsg1, CollectionInfoForRoyaltyInfoResponse, RoyaltyInfoResponse, QueryMsg } from "./Minter.types";
import { CamelCasedProperties } from "type-fest";
export abstract class MinterExecuteMessageBuilder {
  static mint = (): ExecuteMsg => {
    return {
      mint: ({} as const)
    };
  };
  static setWhitelist = ({
    whitelist
  }: CamelCasedProperties<Extract<ExecuteMsg, {
    set_whitelist: unknown;
  }>["set_whitelist"]>): ExecuteMsg => {
    return {
      set_whitelist: ({
        whitelist
      } as const)
    };
  };
  static updateStartTime = (): ExecuteMsg => {
    return {
      update_start_time: ({} as const)
    };
  };
  static updatePerAddressLimit = ({
    perAddressLimit
  }: CamelCasedProperties<Extract<ExecuteMsg, {
    update_per_address_limit: unknown;
  }>["update_per_address_limit"]>): ExecuteMsg => {
    return {
      update_per_address_limit: ({
        per_address_limit: perAddressLimit
      } as const)
    };
  };
  static mintTo = ({
    recipient
  }: CamelCasedProperties<Extract<ExecuteMsg, {
    mint_to: unknown;
  }>["mint_to"]>): ExecuteMsg => {
    return {
      mint_to: ({
        recipient
      } as const)
    };
  };
  static mintFor = ({
    recipient,
    tokenId
  }: CamelCasedProperties<Extract<ExecuteMsg, {
    mint_for: unknown;
  }>["mint_for"]>): ExecuteMsg => {
    return {
      mint_for: ({
        recipient,
        token_id: tokenId
      } as const)
    };
  };
  static withdraw = (): ExecuteMsg => {
    return {
      withdraw: ({} as const)
    };
  };
}
export abstract class MinterQueryMessageBuilder {
  static config = (): QueryMsg => {
    return {
      config: ({} as const)
    };
  };
  static mintableNumTokens = (): QueryMsg => {
    return {
      mintable_num_tokens: ({} as const)
    };
  };
  static startTime = (): QueryMsg => {
    return {
      start_time: ({} as const)
    };
  };
  static mintPrice = (): QueryMsg => {
    return {
      mint_price: ({} as const)
    };
  };
  static mintCount = ({
    address
  }: CamelCasedProperties<Extract<QueryMsg, {
    mint_count: unknown;
  }>["mint_count"]>): QueryMsg => {
    return {
      mint_count: ({
        address
      } as const)
    };
  };
}