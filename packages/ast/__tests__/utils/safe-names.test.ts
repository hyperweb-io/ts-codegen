import { ExecuteMsg, QueryMsg } from '@cosmwasm/ts-codegen-types';

import {
  createExecuteClass,
  createExecuteInterface,
  createQueryClass,
} from '../../src';
import { getMessageProperties } from '../../src/utils';
import { camelMethodName, camelVarName, varName } from '../../src/utils/names';
import { expectCode, makeContext } from '../../test-utils';

describe('name helpers', () => {
  it('escapes reserved words for bindings', () => {
    expect(varName('class')).toBe('_class');
    expect(varName('default')).toBe('_default');
    expect(varName('delete')).toBe('_delete');
    expect(varName('owner')).toBe('owner');
  });

  it('escapes unsafe member names', () => {
    expect(camelMethodName('constructor')).toBe('_constructor');
    expect(camelMethodName('transfer_nft')).toBe('transferNft');
    expect(camelVarName('default')).toBe('_default');
    expect(camelVarName('token_id')).toBe('tokenId');
  });
});

describe('operation name collisions', () => {
  const collidingMsg: ExecuteMsg = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    title: 'ExecuteMsg',
    oneOf: [
      {
        type: 'object',
        required: ['transfer_nft'],
        properties: {
          transfer_nft: {
            type: 'object',
            required: ['recipient', 'token_id'],
            properties: {
              recipient: { type: 'string' },
              token_id: { type: 'string' },
            },
          },
        },
        additionalProperties: false,
      },
      {
        type: 'object',
        required: ['transferNft'],
        properties: {
          transferNft: {
            type: 'object',
            required: ['recipient', 'token_id'],
            properties: {
              recipient: { type: 'string' },
              token_id: { type: 'string' },
            },
          },
        },
        additionalProperties: false,
      },
    ],
  };

  it('throws on ambiguous normalized operation names', () => {
    expect(() => getMessageProperties(collidingMsg)).toThrow(
      /Operation name collision/
    );
  });
});

describe('reserved schema names', () => {
  const queryMsg: QueryMsg = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    title: 'QueryMsg',
    oneOf: [
      {
        type: 'object',
        required: ['constructor'],
        properties: {
          constructor: {
            type: 'object',
            required: ['class', 'default', 'delete'],
            properties: {
              class: { type: 'string' },
              default: { type: 'string' },
              delete: { type: 'boolean' },
            },
          },
        },
        additionalProperties: false,
      },
    ],
  };

  const executeMsg: ExecuteMsg = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    title: 'ExecuteMsg',
    oneOf: [
      {
        type: 'object',
        required: ['constructor'],
        properties: {
          constructor: {
            type: 'object',
            required: ['class', 'default', 'delete'],
            properties: {
              class: { type: 'string' },
              default: { type: 'string' },
              delete: { type: 'boolean' },
            },
          },
        },
        additionalProperties: false,
      },
    ],
  };

  it('query class escapes reserved identifiers', () => {
    const ctx = makeContext(queryMsg);
    expectCode(
      createQueryClass(
        ctx,
        'ReservedQueryClient',
        'ReservedReadOnlyInstance',
        queryMsg
      )
    );
  });

  it('execute class escapes reserved identifiers', () => {
    const ctx = makeContext(executeMsg);
    expectCode(
      createExecuteClass(
        ctx,
        'ReservedClient',
        'ReservedInstance',
        null,
        executeMsg
      )
    );
  });

  it('execute interface escapes reserved identifiers', () => {
    const ctx = makeContext(executeMsg);
    expectCode(createExecuteInterface(ctx, 'ReservedInstance', null, executeMsg));
  });
});
