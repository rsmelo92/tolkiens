module.exports = {
  env: {
    es2021: true,
    node: true
  },
  extends: [
    'standard',
    'eslint:recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  ignorePatterns: ['*.js'],
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
  }
}
