const namingConventionBaseRule = [
    {
      selector: 'default',
      format: ['camelCase'],
    },
    {
      selector: 'variable',
      modifiers: ['const'],
      format: ['strictCamelCase', 'StrictPascalCase'],
    },
    {
      selector: 'variable',
      modifiers: ['const'],
      format: ['UPPER_CASE'],
      filter: {
        regex: '^I_',
        match: true
      }
    },
    {
      selector: 'parameter',
      format: ['strictCamelCase'],
      leadingUnderscore: 'allow',
    },
    {
      selector: ['parameter', 'class'],
      format: ['PascalCase'],
      filter: {
        regex: '^(Component|Custom)',
        match: true,
      },
    },
    {
      selector: ['enum', 'enumMember'],
      format: ['UPPER_CASE'],
    },
    {
      selector: ['interface', 'typeAlias'],
      format: ['PascalCase'],
      custom: {
        regex: '^(I|As)[A-Z]',
        match: true,
      },
    },
    {
      selector: ['typeParameter'],
      format: ['PascalCase'],
      prefix: ['T']
    },
    {
      selector: ['objectLiteralProperty', 'typeProperty'],
      format: ['camelCase', 'snake_case'],
      leadingUnderscore: 'allow'
    },
      // allow PascalCase when match ^React    
    {
      selector: 'objectLiteralProperty',
      format: ['PascalCase'],
      filter: {
        regex: '^React',
        match: true,
      },
    },
    // allow PascalCase when match ^APP_
    {
      selector: 'objectLiteralProperty',
      format: ['UPPER_CASE'],
      filter: {
        regex: '^APP_',
        match: true,
      },
    },
    // group
    {
      selector: 'variableLike',
      format: ['strictCamelCase'],
    },
  ]
  
  module.exports = { namingConventionBaseRule }
  
  module.exports = exports = {
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 2020,
        sourceType: 'module',
      },
      extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@next/next/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'plugin:prettier/recommended',
      ],
      rules: {
          'import/no-unresolved': 'off',
          'react/display-name': 'off',
          'no-return-await': 'error',
          'no-unsafe-optional-chaining': 'error',
          '@typescript-eslint/explicit-module-boundary-types': 'off',
          '@typescript-eslint/explicit-function-return-type': [
            'error',
            {
              allowExpressions: false,
              allowHigherOrderFunctions: true,
              allowTypedFunctionExpressions: true,
              allowDirectConstAssertionInArrowFunctions: true,
              allowConciseArrowFunctionExpressionsStartingWithVoid: false,
            },
          ],
          'no-use-before-define': ['error', { 'functions': false, 'variables': false }],
          '@typescript-eslint/no-use-before-define': ['error', { 'enums': false, 'typedefs': false }],
          'brace-style': 'off',
          '@typescript-eslint/brace-style': ['error', '1tbs', { allowSingleLine: true }],
          '@typescript-eslint/consistent-indexed-object-style': ['error', 'index-signature'],
          '@typescript-eslint/default-param-last': ['error'],
          'init-declarations': 'off',
          '@typescript-eslint/init-declarations': ['error', 'always'],
          'no-array-constructor': 'off',
          '@typescript-eslint/no-array-constructor': ['error'],
          'no-duplicate-imports': 'off',
          '@typescript-eslint/no-duplicate-imports': ['error'],
          '@typescript-eslint/no-inferrable-types': ['error'],
          'padding-line-between-statements': 'off',
          '@typescript-eslint/padding-line-between-statements': [
            'error',
            { blankLine: 'always', prev: ['case', 'default', 'const', 'let', 'block-like'], next: '*' },
            { blankLine: 'any', prev: ['const', 'let'], next: ['const', 'let'] },
            { blankLine: 'always', prev: '*', next: 'return' },
          ],
          '@typescript-eslint/promise-function-async': [
            'error',
            {
              allowedPromiseNames: ['Thenable'],
              checkArrowFunctions: true,
              checkFunctionDeclarations: true,
              checkFunctionExpressions: true,
              checkMethodDeclarations: true,
            },
          ],
          '@typescript-eslint/no-unused-vars': [
            'error',
            {
              argsIgnorePattern: '^_',
            },
          ],
          camelcase: 'off',
          '@typescript-eslint/naming-convention': [
            'error',
            ...namingConventionBaseRule
          ],
          '@typescript-eslint/no-unsafe-return': ['error'],
          '@typescript-eslint/no-throw-literal': ['error'],
          '@typescript-eslint/prefer-regexp-exec': ['error']
      },
  }