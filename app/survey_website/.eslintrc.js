const path = require('path')

const resolveConfigDir = (fileName) => path.join(__dirname, '../../packages/config/', fileName)

module.exports = exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  extends: ['eslint:recommended', 'plugin:import/recommended', 'plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': 'error',
    'no-unsafe-optional-chaining': 'error',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 0,
    'import/no-duplicates': 'error',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        pathGroups: [
          {
            pattern: '@/**',
            group: 'sibling',
            position: 'after',
          },
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: false,
        },
      },
    ],
  },
  overrides: [
    {
      files: ['./**/*.tsx', './**/*.ts'],
      extends: [resolveConfigDir('eslint_common.js')],
      parserOptions: {
        project: './**/tsconfig.json',
      },
      rules: {},
    },
    {
      files: ['./**/*.tsx'],
      extends: [resolveConfigDir('eslint_common.js')],
      parserOptions: {
        project: './**/tsconfig.json',
      },
      rules: {
        '@typescript-eslint/explicit-function-return-type': [
          'error',
          {
            allowExpressions: true,
            allowHigherOrderFunctions: true,
            allowTypedFunctionExpressions: true,
            allowDirectConstAssertionInArrowFunctions: true,
            allowConciseArrowFunctionExpressionsStartingWithVoid: false,
          },
        ],
      },
    },
    {
      files: ['*.config.js'],
      rules: {
        // '@typescript-eslint/no-var-requires': 'off',
        'global-require': 'off',
      },
    },
  ],
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
}
