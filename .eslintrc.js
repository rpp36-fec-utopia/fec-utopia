module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': [
    // 'eslint:recommended',
    'plugin:react/recommended'
  ],
  'parser': 'babel-eslint',
  'parserOptions': {
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 13,
    'sourceType': 'module'
  },
  'plugins': [
    'react'
  ],
  'rules': {
    'indent': [
      'error',
      2
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ]
  }
};
