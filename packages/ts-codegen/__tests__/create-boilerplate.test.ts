import { spawnSync } from 'child_process';
import { lstatSync, readFileSync, writeFileSync } from 'fs';
import { globSync as glob } from 'glob';
import * as shell from 'shelljs';

import createBoilerplate from '../src/commands/create-boilerplate';
import { prompt } from '../src/utils/prompt';

jest.mock('child_process', () => ({
  spawnSync: jest.fn(),
}));

jest.mock('fs', () => ({
  lstatSync: jest.fn(),
  readFileSync: jest.fn(),
  writeFileSync: jest.fn(),
}));

jest.mock('glob', () => ({
  globSync: jest.fn(),
}));

jest.mock('shelljs', () => ({
  which: jest.fn(),
  echo: jest.fn(),
  exit: jest.fn(),
  exec: jest.fn(),
  cd: jest.fn(),
  rm: jest.fn(),
}));

jest.mock('../src/utils/prompt', () => ({
  prompt: jest.fn(),
}));

describe('create-boilerplate', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('treats name as a git argument instead of shell-interpreted text', async () => {
    const payload = 'test; id > /tmp/pwned123456 #';

    (shell.which as jest.Mock).mockReturnValue(true);
    (shell.exec as jest.Mock)
      .mockReturnValueOnce('Alice Example')
      .mockReturnValueOnce('alice@example.com');
    (spawnSync as jest.Mock).mockReturnValue({ status: 0 });
    (prompt as jest.Mock)
      .mockResolvedValueOnce({ name: payload })
      .mockResolvedValueOnce({
        __ACCESS__: 'private',
        __USERNAME__: 'alice',
        __MODULENAME__: 'module',
      })
      .mockResolvedValueOnce({ __LICENSE__: 'MIT' });
    (glob as jest.Mock)
      .mockReturnValueOnce([])
      .mockReturnValueOnce(['template.txt']);
    (lstatSync as jest.Mock).mockReturnValue({
      isDirectory: () => false,
    });
    (readFileSync as jest.Mock).mockImplementation((filePath: string) => {
      if (filePath === '.questions.json') {
        return '[]';
      }
      return '__MODULENAME__ __PACKAGE_IDENTIFIER__';
    });

    await createBoilerplate({});

    expect(spawnSync).toHaveBeenCalledWith(
      'git',
      [
        'clone',
        'https://github.com/hyperweb-io/ts-codegen-module-boilerplate',
        payload,
      ],
      { stdio: 'inherit' }
    );
    expect(shell.exec).toHaveBeenCalledTimes(2);
    expect(shell.cd).toHaveBeenCalledWith(payload);
    expect(writeFileSync).toHaveBeenCalled();
  });
});
