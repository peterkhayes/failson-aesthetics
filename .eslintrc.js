module.exports = {
  env: {
    node: true,
  },
  extends: 'peterkhayes/react',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  rules: {
    // Due to next.js providing this
    'react/react-in-jsx-scope': 'off',
  },
};
