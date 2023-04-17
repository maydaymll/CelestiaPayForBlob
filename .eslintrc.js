module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    amd: true,
  },

  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },

  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },

  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    // 保证hook规则（https://zh-hans.reactjs.org/docs/hooks-rules.html）
    'plugin:react-hooks/recommended',

    // Make sure this is always the last element in the array.
    'plugin:prettier/recommended',
  ],

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-case-declarations': 'off',
    'no-unused-vars': 'off',

    'react/prop-types': 'off',
    'react/display-name': 'off',

    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },

  plugins: ['@typescript-eslint', 'simple-import-sort'],

  globals: {
    React: true,
    JSX: true,
    Proxy: true,
  },
}
