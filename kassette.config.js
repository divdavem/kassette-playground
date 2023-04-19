/**
 * Configuration of the mock server
 *
 * @returns { import('@amadeus-it-group/kassette').ConfigurationSpec } configuration
 */
exports.getConfiguration = () => {
  return {
    port: 4200,
    mocksFolder: `mocks`,
    mode: 'remote',
    hook: async ({mock}) => {
      console.log(`In hook, HTTP/${mock.request.original.httpVersion} ${mock.request.method} ${mock.request.url}`);
    }
  };
};
