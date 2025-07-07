import { kebab, snake } from 'case';
import { writeFileSync } from 'fs';
import { basename, resolve } from 'path';
import { crossGlob, toPosixPath } from '../src/utils';

const srcDir = resolve(`${__dirname}/../src/commands`);

interface PathObj {
  name: string;
  param: string;
  safe: string;
  path: string;
}
const paths: PathObj[] = crossGlob(`${srcDir}/**.[j|t]s`)
  .sort()
  .map((file: string) => {
    const [, name] = file.match(/\/(.*)\.[j|t]s$/);
    return {
      name: basename(name),
      param: kebab(basename(name)),
      safe: snake(basename(name)),
      path: toPosixPath(file)
        .replace(toPosixPath(srcDir), './commands')
        .replace(/\.js$/, '')
        .replace(/\.ts$/, ''),
    };
  });
const imports = paths
  .map((f) => {
    return [`import _${f.safe} from '${f.path}';`];
  })
  .join('\n');

const out = `
${imports}
const Commands: any = {};
${paths
  .map((a) => {
    return `Commands['${a.param}'] = _${a.safe};`;
  })
  .join('\n')}

  export { Commands }; 

  `;

writeFileSync(`${__dirname}/../src/cmds.ts`, out);
