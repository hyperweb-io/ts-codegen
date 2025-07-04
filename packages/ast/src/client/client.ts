import * as t from '@babel/types';
import { ExecuteMsg, JSONSchema, QueryMsg } from '@cosmwasm/ts-codegen-types';
import { camel } from 'case';

import { RenderContext } from '../context';
import {
  arrowFunctionExpression,
  bindMethod,
  classDeclaration,
  classProperty,
  FIXED_EXECUTE_PARAMS,
  getMessageProperties,
  getTypeOrRef,
  OPTIONAL_FUNDS_PARAM,
  promiseTypeAnnotation,
  typedIdentifier,
} from '../utils';
import { identifier, propertySignature } from '../utils/babel';
import { OPTIONAL_MEMO_PARAM } from '../utils/constants';
import {
  createTypedObjectParams,
  getPropertyType,
  getResponseType,
} from '../utils/types';

export const CONSTANT_EXEC_PARAMS = [
  t.assignmentPattern(
    identifier(
      'fee_',
      t.tsTypeAnnotation(
        t.tsUnionType([
          t.tSNumberKeyword(),
          t.tsTypeReference(t.identifier('StdFee')),
          t.tsLiteralType(t.stringLiteral('auto')),
        ])
      ),
      false
    ),
    t.stringLiteral('auto')
  ),
  OPTIONAL_MEMO_PARAM,
  OPTIONAL_FUNDS_PARAM,
];

export const createWasmQueryMethod = (
  context: RenderContext,
  jsonschema: any
) => {
  const underscoreName = Object.keys(jsonschema.properties)[0];
  const methodName = camel(underscoreName);
  const responseType = getResponseType(context, underscoreName);

  const param = createTypedObjectParams(
    context,
    jsonschema.properties[underscoreName]
  );

  const args = getWasmMethodArgs(
    context,
    jsonschema.properties[underscoreName]
  );

  const msgAction = t.identifier(underscoreName);
  // If the param is an identifier, we can just use it as is
  const msgActionValue =
    param?.type === 'Identifier'
      ? t.identifier(param.name)
      : t.objectExpression(args);

  return t.classProperty(
    t.identifier(methodName),
    arrowFunctionExpression(
      param ? [param] : [],
      t.blockStatement([
        t.returnStatement(
          t.callExpression(
            t.memberExpression(
              t.memberExpression(t.thisExpression(), t.identifier('client')),
              t.identifier('queryContractSmart')
            ),
            [
              t.memberExpression(
                t.thisExpression(),
                t.identifier('contractAddress')
              ),
              t.objectExpression([t.objectProperty(msgAction, msgActionValue)]),
            ]
          )
        ),
      ]),
      t.tsTypeAnnotation(
        t.tsTypeReference(
          t.identifier('Promise'),
          t.tsTypeParameterInstantiation([
            t.tSTypeReference(t.identifier(responseType)),
          ])
        )
      ),
      true
    )
  );
};

export const createQueryClass = (
  context: RenderContext,
  className: string,
  implementsClassName: string,
  queryMsg: QueryMsg
) => {
  context.addUtil('CosmWasmClient');

  const propertyNames = getMessageProperties(queryMsg)
    .map((method) => Object.keys(method.properties)?.[0])
    .filter(Boolean);

  const bindings = propertyNames.map(camel).map(bindMethod);

  const methods = getMessageProperties(queryMsg).map((schema) => {
    return createWasmQueryMethod(context, schema);
  });

  return t.exportNamedDeclaration(
    classDeclaration(
      className,
      [
        // client
        classProperty(
          'client',
          t.tsTypeAnnotation(t.tsTypeReference(t.identifier('CosmWasmClient')))
        ),

        // contractAddress
        classProperty(
          'contractAddress',
          t.tsTypeAnnotation(t.tsStringKeyword())
        ),

        // constructor
        t.classMethod(
          'constructor',
          t.identifier('constructor'),
          [
            typedIdentifier(
              'client',
              t.tsTypeAnnotation(
                t.tsTypeReference(t.identifier('CosmWasmClient'))
              )
            ),
            typedIdentifier(
              'contractAddress',
              t.tsTypeAnnotation(t.tsStringKeyword())
            ),
          ],
          t.blockStatement([
            // client/contract set
            t.expressionStatement(
              t.assignmentExpression(
                '=',
                t.memberExpression(t.thisExpression(), t.identifier('client')),
                t.identifier('client')
              )
            ),
            t.expressionStatement(
              t.assignmentExpression(
                '=',
                t.memberExpression(
                  t.thisExpression(),
                  t.identifier('contractAddress')
                ),
                t.identifier('contractAddress')
              )
            ),

            ...bindings,
          ])
        ),

        ...methods,
      ],
      [t.tSExpressionWithTypeArguments(t.identifier(implementsClassName))]
    )
  );
};

export const getWasmMethodArgs = (
  context: RenderContext,
  jsonschema: JSONSchema
) => {
  let keys = Object.keys(jsonschema.properties ?? {});

  // only 1 degree $ref-lookup
  if (!keys.length && jsonschema.$ref) {
    const obj = context.refLookup(jsonschema.$ref);
    // properties
    if (obj) {
      keys = Object.keys(obj.properties ?? {});
    }

    // tuple struct or otherwise, use the name of the reference
    if (!keys.length && obj?.oneOf) {
      // TODO????? ADAIR
    }
  }

  const args = keys.map((prop) => {
    return t.objectProperty(
      t.identifier(prop),
      t.identifier(camel(prop)),
      false,
      prop === camel(prop)
    );
  });

  return args;
};

export const createWasmExecMethod = (
  context: RenderContext,
  jsonschema: JSONSchema
) => {
  context.addUtil('ExecuteResult');
  context.addUtil('StdFee');
  context.addUtil('Coin');

  const underscoreName = Object.keys(jsonschema.properties)[0];
  const methodName = camel(underscoreName);
  const param = createTypedObjectParams(
    context,
    jsonschema.properties[underscoreName]
  );
  const args = getWasmMethodArgs(
    context,
    jsonschema.properties[underscoreName]
  );

  const msgAction = t.identifier(underscoreName);
  // If the param is an identifier, we can just use it as is
  const msgActionValue =
    param?.type === 'Identifier'
      ? t.identifier(param.name)
      : t.objectExpression(args);

  return t.classProperty(
    t.identifier(methodName),
    arrowFunctionExpression(
      param
        ? [
            // props
            param,
            ...CONSTANT_EXEC_PARAMS,
          ]
        : CONSTANT_EXEC_PARAMS,
      t.blockStatement([
        t.returnStatement(
          t.awaitExpression(
            t.callExpression(
              t.memberExpression(
                t.memberExpression(t.thisExpression(), t.identifier('client')),
                t.identifier('execute')
              ),
              [
                t.memberExpression(t.thisExpression(), t.identifier('sender')),
                t.memberExpression(
                  t.thisExpression(),
                  t.identifier('contractAddress')
                ),
                t.objectExpression([
                  t.objectProperty(msgAction, msgActionValue),
                ]),
                t.identifier('fee_'),
                t.identifier('memo_'),
                t.identifier('funds_'),
              ]
            )
          )
        ),
      ]),
      // return type
      t.tsTypeAnnotation(
        t.tsTypeReference(
          t.identifier('Promise'),
          t.tsTypeParameterInstantiation([
            t.tSTypeReference(t.identifier('ExecuteResult')),
          ])
        )
      ),
      true
    )
  );
};

export const createExecuteClass = (
  context: RenderContext,
  className: string,
  implementsClassName: string,
  extendsClassName: string | null,
  execMsg: ExecuteMsg
) => {
  context.addUtil('SigningCosmWasmClient');

  const propertyNames = getMessageProperties(execMsg)
    .map((method) => Object.keys(method.properties)?.[0])
    .filter(Boolean);

  const bindings = propertyNames.map(camel).map(bindMethod);

  const methods = getMessageProperties(execMsg).map((schema) => {
    return createWasmExecMethod(context, schema);
  });

  const blockStmt = [];

  if (extendsClassName) {
    blockStmt.push(
      // super()
      t.expressionStatement(
        t.callExpression(t.super(), [
          t.identifier('client'),
          t.identifier('contractAddress'),
        ])
      )
    );
  }

  blockStmt.push(
    ...[
      // client/contract set
      t.expressionStatement(
        t.assignmentExpression(
          '=',
          t.memberExpression(t.thisExpression(), t.identifier('client')),
          t.identifier('client')
        )
      ),
      t.expressionStatement(
        t.assignmentExpression(
          '=',
          t.memberExpression(t.thisExpression(), t.identifier('sender')),
          t.identifier('sender')
        )
      ),
      t.expressionStatement(
        t.assignmentExpression(
          '=',
          t.memberExpression(
            t.thisExpression(),
            t.identifier('contractAddress')
          ),
          t.identifier('contractAddress')
        )
      ),
      ...bindings,
    ]
  );

  const noImplicitOverride =
    context.options.client.noImplicitOverride &&
    extendsClassName &&
    context.options.client.execExtendsQuery;

  const useDeclareKeyword =
    context.options.client.useDeclareKeyword &&
    extendsClassName &&
    context.options.client.execExtendsQuery;

  return t.exportNamedDeclaration(
    classDeclaration(
      className,
      [
        // client
        classProperty(
          'client',
          t.tsTypeAnnotation(
            t.tsTypeReference(t.identifier('SigningCosmWasmClient'))
          ),
          false,
          false,
          noImplicitOverride,
          useDeclareKeyword
        ),

        // sender
        classProperty('sender', t.tsTypeAnnotation(t.tsStringKeyword())),

        // contractAddress
        classProperty(
          'contractAddress',
          t.tsTypeAnnotation(t.tsStringKeyword()),
          false,
          false,
          noImplicitOverride,
          useDeclareKeyword
        ),

        // constructor
        t.classMethod(
          'constructor',
          t.identifier('constructor'),
          [
            typedIdentifier(
              'client',
              t.tsTypeAnnotation(
                t.tsTypeReference(t.identifier('SigningCosmWasmClient'))
              )
            ),
            typedIdentifier('sender', t.tsTypeAnnotation(t.tsStringKeyword())),
            typedIdentifier(
              'contractAddress',
              t.tsTypeAnnotation(t.tsStringKeyword())
            ),
          ],
          t.blockStatement(blockStmt)
        ),
        ...methods,
      ],
      [t.tSExpressionWithTypeArguments(t.identifier(implementsClassName))],
      extendsClassName ? t.identifier(extendsClassName) : null
    )
  );
};

export const createExecuteInterface = (
  context: RenderContext,
  className: string,
  extendsClassName: string | null,
  execMsg: ExecuteMsg
) => {
  const methods = getMessageProperties(execMsg).map((jsonschema) => {
    const underscoreName = Object.keys(jsonschema.properties)[0];
    const methodName = camel(underscoreName);
    return createPropertyFunctionWithObjectParamsForExec(
      context,
      methodName,
      'ExecuteResult',
      jsonschema.properties[underscoreName]
    );
  });

  const extendsAst = extendsClassName
    ? [t.tSExpressionWithTypeArguments(t.identifier(extendsClassName))]
    : [];

  return t.exportNamedDeclaration(
    t.tsInterfaceDeclaration(
      t.identifier(className),
      null,
      extendsAst,
      t.tSInterfaceBody([
        // contract address
        t.tSPropertySignature(
          t.identifier('contractAddress'),
          t.tsTypeAnnotation(t.tsStringKeyword())
        ),

        // contract address
        t.tSPropertySignature(
          t.identifier('sender'),
          t.tsTypeAnnotation(t.tsStringKeyword())
        ),

        ...methods,
      ])
    )
  );
};

export const createPropertyFunctionWithObjectParams = (
  context: RenderContext,
  methodName: string,
  responseType: string,
  jsonschema: JSONSchema
) => {
  const obj = createTypedObjectParams(context, jsonschema);

  const func = {
    type: 'TSFunctionType',
    typeAnnotation: promiseTypeAnnotation(responseType),
    parameters: obj ? [obj] : [],
  };

  return t.tSPropertySignature(
    t.identifier(methodName),
    t.tsTypeAnnotation(
      // @ts-ignore:next-line
      func
    )
  );
};

export const createPropertyFunctionWithObjectParamsForExec = (
  context: RenderContext,
  methodName: string,
  responseType: string,
  jsonschema: JSONSchema
) => {
  context.addUtil('Coin');

  const obj = createTypedObjectParams(context, jsonschema);

  const func = {
    type: 'TSFunctionType',
    typeAnnotation: promiseTypeAnnotation(responseType),
    parameters: obj ? [obj, ...FIXED_EXECUTE_PARAMS] : FIXED_EXECUTE_PARAMS,
  };

  return t.tSPropertySignature(
    t.identifier(methodName),
    t.tsTypeAnnotation(
      // @ts-ignore:next-line
      func
    )
  );
};

export const createQueryInterface = (
  context: RenderContext,
  className: string,
  queryMsg: QueryMsg
) => {
  const methods = getMessageProperties(queryMsg).map((jsonschema) => {
    const underscoreName = Object.keys(jsonschema.properties)[0];
    const methodName = camel(underscoreName);
    const responseType = getResponseType(context, underscoreName);
    return createPropertyFunctionWithObjectParams(
      context,
      methodName,
      responseType,
      jsonschema.properties[underscoreName]
    );
  });

  return t.exportNamedDeclaration(
    t.tsInterfaceDeclaration(
      t.identifier(className),
      null,
      [],
      t.tSInterfaceBody([
        t.tSPropertySignature(
          t.identifier('contractAddress'),
          t.tsTypeAnnotation(t.tsStringKeyword())
        ),
        ...methods,
      ])
    )
  );
};

export const createTypeOrInterface = (
  context: RenderContext,
  Type: string,
  jsonschema: JSONSchema
) => {
  // Handle non-object and potentially union or referenced types
  if (jsonschema.type !== 'object') {
    if (!jsonschema.type) {
      if (jsonschema.title) {
        return t.exportNamedDeclaration(
          t.tsTypeAliasDeclaration(
            t.identifier(Type),
            null,
            t.tsTypeReference(t.identifier(jsonschema.title))
          )
        );
      } else {
        throw new Error('Schema must have a type or title!');
      }
    }

    // Use getTypeOrRef to handle string, array of strings, or $ref
    const typeAnnotation = getTypeOrRef(jsonschema);
    return t.exportNamedDeclaration(
      t.tsTypeAliasDeclaration(t.identifier(Type), null, typeAnnotation)
    );
  }
  // Handle object type schemas
  const props = Object.keys(jsonschema.properties ?? {}).map((prop) => {
    const { type, optional } = getPropertyType(context, jsonschema, prop);
    return propertySignature(camel(prop), t.tsTypeAnnotation(type), optional);
  });

  return t.exportNamedDeclaration(
    t.tsInterfaceDeclaration(
      t.identifier(Type),
      null,
      [],
      t.tsInterfaceBody([...props])
    )
  );
};

export const createTypeInterface = (
  context: RenderContext,
  jsonschema: JSONSchema
) => {
  const Type = jsonschema.title;
  return createTypeOrInterface(context, Type, jsonschema);
};
