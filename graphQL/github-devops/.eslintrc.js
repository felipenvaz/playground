module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb-base'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: [
    '@typescript-eslint',
    'sort-imports-es6-autofix'
  ],
  settings: {
    'import/resolver': {
      'node': {
        'extensions': ['.js', '.ts']
      }
    }
  },
  rules: {
    '@typescript-eslint/no-unused-vars': ['error', {
      'vars': 'all',
      'args': 'after-used',
      'ignoreRestSiblings': false
    }],
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/interface-name-prefix': ['error', 'never'],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/semi': ['error'],
    'array-bracket-spacing': ['error', 'never'],
    'block-spacing': ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': ['error'],
    'computed-property-spacing': ['error', 'never'],
    'indent': ['error', 2],
    'keyword-spacing': ['error'],
    'linebreak-style': ['error', 'windows'],
    'no-loop-func': 'error',
    'no-param-reassign': ['error', { 'props': true }],
    'no-plusplus': ['error', { 'allowForLoopAfterthoughts': true }],
    'no-undef': 'off',
    'no-unused-vars': 'off',
    'object-curly-spacing': ['error', 'always'],
    'prefer-const': ['error'],
    'prefer-destructuring': ['error', { array: false, object: true }],
    'sort-imports': 'off',
    'space-before-blocks': ['error', 'always'],
    'space-before-function-paren': ['error', 'never'],
    'semi': 'off',
    'sort-imports-es6-autofix/sort-imports-es6': ['error'],
    'quotes': ['error', 'single', { 'allowTemplateLiterals': true }],
    'import/no-extraneous-dependencies': 'off',
    'arrow-parens': 'off',
  },
};
