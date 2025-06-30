import { kebab, snake } from 'case';
import { writeFileSync } from 'fs';
import { globSync as glob } from 'glob';
import { basename, resolve } from 'path';

const srcDir = resolve(`${__dirname}/../src/commands`);

interface PathObj {
  name: string;
  param: string;
  safe: string;
  path: string;
}
const paths: PathObj[] = glob(`${srcDir}/**.[j|t]s`)
  .sort()
  .map((file: string) => {
    const [, name] = file.match(/\/(.*)\.[j|t]s$/);
    return {
      name: basename(name),
      param: kebab(basename(name)),
      safe: snake(basename(name)),
      path: file
        .replace(srcDir, './commands')
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
