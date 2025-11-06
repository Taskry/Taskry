module.exports = {
  root: true,
  env: { browser: true, es2021: true },
  extends: ['airbnb', 'airbnb/hooks', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: { jsx: true }
  },
  plugins: ['react', 'react-hooks', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off',
    'no-underscore-dangle': 'off',
    // 'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }]
    'no-unused-vars': 'off'
  },
  settings: { react: { version: 'detect' } }
};
