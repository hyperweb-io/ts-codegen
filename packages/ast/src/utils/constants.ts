import * as t from '@babel/types';

import { identifier } from './babel';

export const OPTIONAL_FUNDS_PARAM = identifier(
  'funds_',
  t.tsTypeAnnotation(t.tsArrayType(t.tsTypeReference(t.identifier('Coin')))),
  true
);
export const OPTIONAL_FEE_PARAM = identifier(
  'fee_',
  t.tsTypeAnnotation(
    t.tsUnionType([
      t.tsNumberKeyword(),
      t.tsTypeReference(t.identifier('StdFee')),
      t.tsLiteralType(t.stringLiteral('auto')),
    ])
  ),
  true
);
export const OPTIONAL_MEMO_PARAM = identifier(
  'memo_',
  t.tsTypeAnnotation(t.tsStringKeyword()),
  true
);

export const FIXED_EXECUTE_PARAMS = [
  OPTIONAL_FEE_PARAM,
  OPTIONAL_MEMO_PARAM,
  OPTIONAL_FUNDS_PARAM,
];

export const PROVIDER_TYPES = {
  SIGNING_CLIENT_TYPE: 'client',
  QUERY_CLIENT_TYPE: 'queryClient',
  MESSAGE_COMPOSER_TYPE: 'message-composer',
  PROVIDER_TYPE: 'provider',
};
