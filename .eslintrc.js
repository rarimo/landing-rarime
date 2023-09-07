const path = require('path');

const srcPath = path.resolve(__dirname, 'src');

module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  plugins: ['simple-import-sort', 'prettier'],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', srcPath],
          ['@static', `${srcPath}/../static`],
        ],
        extensions: ['.js', '.jsx'],
      },
      node: {
        paths: [srcPath],
        extensions: ['.js', '.jsx'],
      },
    },
    react: {
      version: 'detect',
    },
  },
  rules: {
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    'arrow-parens': 0,
    'no-debugger': 1,
    'no-warning-comments': [
      1,
      {
        terms: ['hardcoded'],
        location: 'anywhere',
      },
    ],
    'no-return-await': 0,
    'object-curly-spacing': ['error', 'always'],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'no-var': 'error',
    'comma-dangle': [1, 'always-multiline'],
    'linebreak-style': ['error', 'unix'],
    'max-len': [
      1,
      {
        code: 80,
        comments: 80,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'no-console': [
      1,
      {
        allow: ['warn', 'error'],
      },
    ],
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'import/namespace': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'jsx-a11y/no-noninteractive-element-to-interactive-role': [
      'error',
      {
        li: ['link'],
      },
    ],
  },
};
