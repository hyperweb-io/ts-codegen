import { globSync } from 'glob';
import { posix } from 'path';

/**
 * Replace all \\ to / for windows support purpose
 * @param input
 * @param options
 * @returns
 */
export const crossGlob = (input: string, options?: object) => {
  return globSync(toPosixPath(input), options);
};

/**
 * Unify all the path to posixPath for windows support purpose
 * @param mixedPath
 * @returns
 */
export const toPosixPath = (mixedPath: string): string => {
  return mixedPath.replace(/\\/g, posix.sep);
}; 