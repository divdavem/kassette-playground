/**
 * Configuration of the mock server
 *
 * @returns { import('@amadeus-it-group/kassette').ConfigurationSpec } configuration
 */
exports.getConfiguration = () => {
  return {
    port: 4200,
    mocksFolder: `mocks`,
    mode: 'local_or_download',
    hook: async ({mock}) => {
      console.log(`In hook, HTTP/${mock.request.original.httpVersion} ${mock.request.method} ${mock.request.url}`);
      // Only mock external calls
      if (/localhost|127.0.0.1/.test(mock.request.url)) {
        mock.setMode('remote');
      }
    }
  };
};
