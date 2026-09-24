import {defineConfig} from 'oxfmt';

import config from './index.ts';

export default defineConfig({
  ...config,
  ignorePatterns: [
    '**/dist/**',
    '**/node_modules/**',
    '**/.yarn/**',
    '**/CHANGELOG.md',
    '**/CLAUDE.md',
    '**/.claude',
    '**/.yarnrc.yml',
  ],
});
