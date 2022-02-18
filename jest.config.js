/** @type {import('@ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  moduleNameMapper: {},
  collectCoverage: true,
  coverageDirectory: 'coverage',
  moduleDirectories: ['js', '.', 'node_modules'],
};
