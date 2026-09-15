import {defineConfig} from 'oxfmt';

export default defineConfig({
  arrowParens: 'avoid',
  bracketSameLine: true,
  bracketSpacing: false,
  endOfLine: 'lf',
  objectWrap: 'preserve',
  overrides: [
    {
      files: ['*.json'],
      options: {
        printWidth: 200,
        trailingComma: 'none',
      },
    },
  ],
  printWidth: 120,
  proseWrap: 'never',
  quoteProps: 'as-needed',
  semi: true,
  singleQuote: true,
  sortImports: true,
  sortPackageJson: true,
  tabWidth: 2,
  trailingComma: 'es5',
  useTabs: false,
});
