/* eslint-env node */

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    // project: true,
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
  plugins: ['react-refresh'],
  rules: {
    'import/prefer-default-export': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'no-void': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    '@typescript-eslint/no-non-null-assertion': 'off',
  },
};
