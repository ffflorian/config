import {defineConfig} from 'oxfmt';

import config from './packages/oxfmt-config/index.ts';

export default defineConfig({
  ...config,
  ignorePatterns: ['**/dist/**', '**/node_modules/**', '**/.yarn/**'],
});
