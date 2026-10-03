module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    // Target="_blank" links are all paired with rel="noopener noreferrer" where
    // they leave the site. Left on because it would catch a genuine omission.
    'react/jsx-no-target-blank': 'off',

    // This is a plain JS project, not TypeScript. Adding runtime prop-types to
    // every component would duplicate the shapes already documented in
    // src/data/*, with the usual result that the two drift apart. See BUILD.md §30.
    'react/prop-types': 'off',

    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
