/**
* This file was automatically generated by @abstract-money/ts-codegen@latest.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @abstract-money/ts-codegen generate command to regenerate this file.
*/

import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { Coin, StdFee } from "@cosmjs/amino";
import { Addr, PaymentInfo, Uint128, ConfigResponse, ExecuteMsg, Binary, Cw20ReceiveMsg, GetRegistrationResponse, Registration, InfoForCodeIdResponse, InstantiateMsg, ListRegistrationsResponse, QueryMsg, ReceiveMsg } from "./CwCodeIdRegistry.types";
export interface CwCodeIdRegistryReadOnlyInterface {
  contractAddress: string;
  config: () => Promise<ConfigResponse>;
  getRegistration: ({
    chainId,
    name,
    version
  }: {
    chainId: string;
    name: string;
    version?: string;
  }) => Promise<GetRegistrationResponse>;
  infoForCodeId: ({
    chainId,
    codeId
  }: {
    chainId: string;
    codeId: number;
  }) => Promise<InfoForCodeIdResponse>;
  listRegistrations: ({
    chainId,
    name
  }: {
    chainId: string;
    name: string;
  }) => Promise<ListRegistrationsResponse>;
}
export class CwCodeIdRegistryQueryClient implements CwCodeIdRegistryReadOnlyInterface {
  client: CosmWasmClient;
  contractAddress: string;

  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client;
    this.contractAddress = contractAddress;
    this.config = this.config.bind(this);
    this.getRegistration = this.getRegistration.bind(this);
    this.infoForCodeId = this.infoForCodeId.bind(this);
    this.listRegistrations = this.listRegistrations.bind(this);
  }

  config = async (): Promise<ConfigResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      config: {}
    });
  };
  getRegistration = async ({
    chainId,
    name,
    version
  }: {
    chainId: string;
    name: string;
    version?: string;
  }): Promise<GetRegistrationResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      get_registration: {
        chain_id: chainId,
        name,
        version
      }
    });
  };
  infoForCodeId = async ({
    chainId,
    codeId
  }: {
    chainId: string;
    codeId: number;
  }): Promise<InfoForCodeIdResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      info_for_code_id: {
        chain_id: chainId,
        code_id: codeId
      }
    });
  };
  listRegistrations = async ({
    chainId,
    name
  }: {
    chainId: string;
    name: string;
  }): Promise<ListRegistrationsResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      list_registrations: {
        chain_id: chainId,
        name
      }
    });
  };
}
export interface CwCodeIdRegistryInterface extends CwCodeIdRegistryReadOnlyInterface {
  contractAddress: string;
  sender: string;
  receive: ({
    amount,
    msg,
    sender
  }: {
    amount: Uint128;
    msg: Binary;
    sender: string;
  }, fee_?: number | StdFee | "auto", memo_?: string, funds_?: Coin[]) => Promise<ExecuteResult>;
  register: ({
    chainId,
    checksum,
    codeId,
    name,
    version
  }: {
    chainId: string;
    checksum: string;
    codeId: number;
    name: string;
    version: string;
  }, fee_?: number | StdFee | "auto", memo_?: string, funds_?: Coin[]) => Promise<ExecuteResult>;
  setOwner: ({
    chainId,
    name,
    owner
  }: {
    chainId: string;
    name: string;
    owner?: string;
  }, fee_?: number | StdFee | "auto", memo_?: string, funds_?: Coin[]) => Promise<ExecuteResult>;
  unregister: ({
    chainId,
    codeId
  }: {
    chainId: string;
    codeId: number;
  }, fee_?: number | StdFee | "auto", memo_?: string, funds_?: Coin[]) => Promise<ExecuteResult>;
  updateConfig: ({
    admin,
    paymentInfo
  }: {
    admin?: string;
    paymentInfo?: PaymentInfo;
  }, fee_?: number | StdFee | "auto", memo_?: string, funds_?: Coin[]) => Promise<ExecuteResult>;
}
export class CwCodeIdRegistryClient extends CwCodeIdRegistryQueryClient implements CwCodeIdRegistryInterface {
  client: SigningCosmWasmClient;
  sender: string;
  contractAddress: string;

  constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string) {
    super(client, contractAddress);
    this.client = client;
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.receive = this.receive.bind(this);
    this.register = this.register.bind(this);
    this.setOwner = this.setOwner.bind(this);
    this.unregister = this.unregister.bind(this);
    this.updateConfig = this.updateConfig.bind(this);
  }

  receive = async ({
    amount,
    msg,
    sender
  }: {
    amount: Uint128;
    msg: Binary;
    sender: string;
  }, fee_: number | StdFee | "auto" = "auto", memo_?: string, funds_?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      receive: {
        amount,
        msg,
        sender
      }
    }, fee_, memo_, funds_);
  };
  register = async ({
    chainId,
    checksum,
    codeId,
    name,
    version
  }: {
    chainId: string;
    checksum: string;
    codeId: number;
    name: string;
    version: string;
  }, fee_: number | StdFee | "auto" = "auto", memo_?: string, funds_?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      register: {
        chain_id: chainId,
        checksum,
        code_id: codeId,
        name,
        version
      }
    }, fee_, memo_, funds_);
  };
  setOwner = async ({
    chainId,
    name,
    owner
  }: {
    chainId: string;
    name: string;
    owner?: string;
  }, fee_: number | StdFee | "auto" = "auto", memo_?: string, funds_?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      set_owner: {
        chain_id: chainId,
        name,
        owner
      }
    }, fee_, memo_, funds_);
  };
  unregister = async ({
    chainId,
    codeId
  }: {
    chainId: string;
    codeId: number;
  }, fee_: number | StdFee | "auto" = "auto", memo_?: string, funds_?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      unregister: {
        chain_id: chainId,
        code_id: codeId
      }
    }, fee_, memo_, funds_);
  };
  updateConfig = async ({
    admin,
    paymentInfo
  }: {
    admin?: string;
    paymentInfo?: PaymentInfo;
  }, fee_: number | StdFee | "auto" = "auto", memo_?: string, funds_?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_config: {
        admin,
        payment_info: paymentInfo
      }
    }, fee_, memo_, funds_);
  };
}