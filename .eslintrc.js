module.exports = {
  root: true,
  extends: ['@react-native', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error', {endOfLine: 'auto'}],
    'react/no-unstable-nested-components': 'off',
  },
};
