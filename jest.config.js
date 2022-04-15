
module.exports = {
  testEnvironment: process.env.END_ENV === 'front' ? 'jsdom' : 'node',
  roots: [
    '.',
    './frontend/src'
  ],
  testTimeout: 160000,
  'collectCoverageFrom': [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts'
  ],
  'setupFiles': [
    'react-app-polyfill/jsdom'
  ],
  'setupFilesAfterEnv': [],
  'testMatch': [
    '<rootDir>/tests/*.api.test.js',
    '<rootDir>/frontend/src/components/*.test.js'
  ],
  'transform': {
    '^.+\\.(js|jsx|mjs|cjs|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
    '^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)': '<rootDir>/config/jest/fileTransform.js'
  },
  'transformIgnorePatterns': [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$',
    '^.+\\.module\\.(css|sass|scss)$'
  ],
  'modulePaths': [],
  'moduleNameMapper': {
    '^react-native$': 'react-native-web',
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy'
  },
  'moduleFileExtensions': [
    'web.js',
    'js',
    'web.ts',
    'ts',
    'web.tsx',
    'tsx',
    'json',
    'web.jsx',
    'jsx',
    'node'
  ],
  'watchPlugins': [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname'
  ],
  'resetMocks': true
}