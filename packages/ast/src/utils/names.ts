import { camel } from 'case';

/**
 * Words that cannot be used as binding identifiers (variable names,
 * destructuring bindings) in JavaScript/TypeScript, including strict-mode
 * reserved words.
 */
const RESERVED_WORDS = new Set([
  'arguments',
  'await',
  'break',
  'case',
  'catch',
  'class',
  'const',
  'continue',
  'debugger',
  'default',
  'delete',
  'do',
  'else',
  'enum',
  'eval',
  'export',
  'extends',
  'false',
  'finally',
  'for',
  'function',
  'if',
  'implements',
  'import',
  'in',
  'instanceof',
  'interface',
  'let',
  'new',
  'null',
  'package',
  'private',
  'protected',
  'public',
  'return',
  'static',
  'super',
  'switch',
  'this',
  'throw',
  'true',
  'try',
  'typeof',
  'var',
  'void',
  'while',
  'with',
  'yield',
]);

export const isReservedWord = (name: string): boolean =>
  RESERVED_WORDS.has(name);

/**
 * A name that is safe to use as a binding identifier (variable or
 * destructuring binding). Reserved words are prefixed with an underscore.
 */
export const varName = (name: string): string =>
  isReservedWord(name) ? `_${name}` : name;

/**
 * Camel-cased name that is safe to use as a binding identifier.
 */
export const camelVarName = (prop: string): string => varName(camel(prop));

/**
 * Camel-cased name that is safe to use as a class member or interface
 * member. `constructor` is escaped in addition to reserved words, since a
 * class field or method with that name collides with the class constructor.
 */
export const camelMethodName = (underscoreName: string): string => {
  const name = camel(underscoreName);
  return name === 'constructor' || name === 'prototype' || isReservedWord(name)
    ? `_${name}`
    : name;
};
