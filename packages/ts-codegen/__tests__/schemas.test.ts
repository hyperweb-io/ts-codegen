import { findSchemaFiles } from '../src/utils';

const FIXTURE_DIR = __dirname + '/../../../__fixtures__';

describe('findSchemaFiles', () => {
  it('works for CosmWasm 3', async () => {
    const schemaDir = FIXTURE_DIR + '/cosmwasm3-hackatom/';
    const paths = await findSchemaFiles(schemaDir);
    expect(paths.length).toEqual(1);
    expect(paths[0]).toMatch(/cosmwasm3-hackatom\/hackatom\.json$/);
  });

  it('works for pre-IDL file collection', async () => {
    const schemaDir = FIXTURE_DIR + '/minter/';
    const paths = await findSchemaFiles(schemaDir);
    expect(paths.length).toEqual(5);
    expect(paths[0]).toMatch(/minter\/config\.json$/);
    expect(paths[1]).toMatch(/minter\/config_response\.json$/);
    expect(paths[2]).toMatch(/minter\/execute_msg\.json$/);
    expect(paths[3]).toMatch(/minter\/instantiate_msg\.json$/);
    expect(paths[4]).toMatch(/minter\/query_msg\.json$/);
  });
});
