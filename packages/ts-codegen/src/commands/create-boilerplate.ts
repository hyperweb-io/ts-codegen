import { MinimistArgs } from '@cosmwasm/ts-codegen-types';
import dargs from 'dargs';
import { lstatSync, readFileSync, writeFileSync } from 'fs';
import { globSync as glob } from 'glob';
import * as path from 'path';
import * as shell from 'shelljs';

import { prompt } from '../utils/prompt';

const repo = 'https://github.com/hyperweb-io/ts-codegen-module-boilerplate';
export default async (argv: MinimistArgs) => {
  if (!shell.which('git')) {
    shell.echo('Sorry, this script requires git');
    return shell.exit(1);
  }

  const { name } = await prompt(
    [
      {
        type: 'string',
        name: 'name',
        message: 'Enter your new module name',
      },
    ],
    argv
  );

  shell.exec(`git clone ${repo} ${name}`);
  shell.cd(name);

  const questions = JSON.parse(readFileSync(`.questions.json`, 'utf-8'));

  const fullname = shell
    .exec('git config --global user.name', { silent: true })
    .trim();
  const email = shell
    .exec('git config --global user.email', { silent: true })
    .trim();

  // @__USERNAME__/__MODULENAME__
  // __PACKAGE_IDENTIFIER__
  const args = dargs(
    {
      _: [],
      ...argv,
      __MODULENAME__: name,
      __USERFULLNAME__: fullname,
      __USEREMAIL__: email,
    },
    { allowCamelCase: true }
  );

  const results = await prompt(questions, args);
  let scopedResults;

  const license = await prompt(
    [
      {
        name: '__LICENSE__',
        message: 'Which license?',
        choices: ['MIT', 'closed'],
        type: 'list',
        required: true,
      },
    ],
    []
  );

  if (results.__ACCESS__ === 'public') {
    scopedResults = await prompt(
      [
        {
          type: 'confirm',
          name: 'scoped',
          message: 'use npm scopes?',
          required: true,
        },
      ],
      []
    );
  }

  const files = []
    .concat(glob(process.cwd() + '/**/.*'))
    .concat(glob(process.cwd() + '/**/*'))
    .sort();

  for (let i = 0; i < files.length; i++) {
    const templateFile = files[i];
    if (lstatSync(templateFile).isDirectory()) continue;

    let content = readFileSync(templateFile, 'utf-8');
    if (
      path.basename(templateFile) === 'LICENSE' &&
      license.__LICENSE__ === 'closed'
    ) {
      content = `Copyright (c) 2023 __USERFULLNAME__ <__USEREMAIL__> - All Rights Reserved
Unauthorized copying via any medium is strictly prohibited
Proprietary and confidential`;
    }

    Object.keys(results).forEach((key) => {
      if (/^__/.test(key)) {
        content = content.replace(new RegExp(key, 'g'), results[key]);
      }
    });

    if (results.__ACCESS__ === 'public') {
      if (scopedResults.scoped) {
        content = content.replace(
          /__PACKAGE_IDENTIFIER__/g,
          `@${results.__USERNAME__}/${results.__MODULENAME__}`
        );
      } else {
        content = content.replace(
          /__PACKAGE_IDENTIFIER__/g,
          `${results.__MODULENAME__}`
        );
      }
    } else {
      content = content.replace(
        /__PACKAGE_IDENTIFIER__/g,
        `@${results.__USERNAME__}/${results.__MODULENAME__}`
      );
    }

    // if (path.basename(templateFile) === 'README.md') {
    //     content = `# ${results.__MODULENAME__}`;
    // }

    writeFileSync(templateFile, content);
  }

  shell.rm('-rf', '.git');
  shell.rm('-rf', '.questions.json');

  console.log(`

       |||
      (o o)
  ooO--(_)--Ooo-

  ✨ Great work!
  `);
};
