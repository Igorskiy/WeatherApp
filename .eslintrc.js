module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    '@react-native-community',
  ],
  plugins: ['react-hooks', 'simple-import-sort'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'react-native/no-inline-styles': 'off',
    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'simple-import-sort/imports': 'error',
  },
  overrides: [
    {
      files: ['*.jsx', '*.js'],
      rules: {
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              // Packages.
              // Things that start with a letter, or `@` followed by a letter.
              ['^@?\\w', '^\\w'],
              // Absolute imports.
              ['^(components|modules|store|theme)(/.*|$)'],
              // Relative imports.
              ['^\\.'],
            ],
          },
        ],
      },
    },
  ],
};
