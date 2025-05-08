// eslint.config.js
import nodePlugin from 'eslint-plugin-node';

export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module', // this is key!
    },
    plugins: {
      node: nodePlugin,
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off',
    },
  },
];

