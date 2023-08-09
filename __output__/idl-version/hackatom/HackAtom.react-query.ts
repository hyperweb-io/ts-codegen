/**
* This file was automatically generated by @cosmwasm/ts-codegen@latest.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { InstantiateMsg, ExecuteMsg, QueryMsg, MigrateMsg, SudoMsg, Uint128, Coin, IntResponse, AllBalanceResponse, Binary, RecurseResponse, VerifierResponse } from "./HackAtom.types";
import { HackAtomQueryClient } from "./HackAtom.client";
export interface HackAtomReactQuery<TResponse, TData = TResponse> {
  client: HackAtomQueryClient;
  options?: Omit<UseQueryOptions<TResponse, Error, TData>, "'queryKey' | 'queryFn' | 'initialData'"> & {
    initialData?: undefined;
  };
}
export interface HackAtomGetIntQuery<TData> extends HackAtomReactQuery<IntResponse, TData> {}
export function useHackAtomGetIntQuery<TData = IntResponse>({
  client,
  options
}: HackAtomGetIntQuery<TData>) {
  return useQuery<IntResponse, Error, TData>(["hackAtomGetInt", client.contractAddress], () => client.getInt(), options);
}
export interface HackAtomRecurseQuery<TData> extends HackAtomReactQuery<RecurseResponse, TData> {
  args: {
    depth: number;
    work: number;
  };
}
export function useHackAtomRecurseQuery<TData = RecurseResponse>({
  client,
  args,
  options
}: HackAtomRecurseQuery<TData>) {
  return useQuery<RecurseResponse, Error, TData>(["hackAtomRecurse", client.contractAddress, JSON.stringify(args)], () => client.recurse({
    depth: args.depth,
    work: args.work
  }), options);
}
export interface HackAtomOtherBalanceQuery<TData> extends HackAtomReactQuery<AllBalanceResponse, TData> {
  args: {
    address: string;
  };
}
export function useHackAtomOtherBalanceQuery<TData = AllBalanceResponse>({
  client,
  args,
  options
}: HackAtomOtherBalanceQuery<TData>) {
  return useQuery<AllBalanceResponse, Error, TData>(["hackAtomOtherBalance", client.contractAddress, JSON.stringify(args)], () => client.otherBalance({
    address: args.address
  }), options);
}
export interface HackAtomVerifierQuery<TData> extends HackAtomReactQuery<VerifierResponse, TData> {}
export function useHackAtomVerifierQuery<TData = VerifierResponse>({
  client,
  options
}: HackAtomVerifierQuery<TData>) {
  return useQuery<VerifierResponse, Error, TData>(["hackAtomVerifier", client.contractAddress], () => client.verifier(), options);
}