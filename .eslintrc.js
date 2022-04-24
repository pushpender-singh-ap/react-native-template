module.exports = {
  extends: ['@react-native-community'],
  plugins: ['module-resolver', 'plugin:import/recommended'],
  parser: 'babel-eslint',
  root: true,
  settings: {
    'import/ignore': ['node_modules/react-native/index\\.js$'],
    'import/resolver': {
      'babel-module': {},
    },
  },
};