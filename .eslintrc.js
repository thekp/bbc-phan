module.exports = {
  extends: [
    'airbnb',
    'plugin:prettier/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  env: {
    es6: true,
    browser: true,
    jest: true,
    node: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['prettier', 'json', 'jsx-a11y', 'react-hooks'],
  rules: {
    'react/forbid-foreign-prop-types': 'error',
    'react/jsx-one-expression-per-line': 'off',
    'react-proposal-optional-chaining': 'off',
    'react/jsx-props-no-spreading': 'off',
  },
};
