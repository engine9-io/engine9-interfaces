module.exports = {
  name: '@engine9-io/engine9-interfaces/person_remote',
  version: '1.0.0',
  schemas: [
    'schema.js',
  ],
  dependencies: {
    '@engine9-io/engine9-interfaces/person': '>1.0.0',
  },
  transforms: {
    inbound: {
      append_identifiers: {
        type: 'identifiers',
        batchSize: 500,
      },
    },
  },
};
