# @ffflorian/config [![Build](https://github.com/ffflorian/config/workflows/Build/badge.svg)](https://github.com/ffflorian/config/actions/)

<!-- prettier-ignore -->
> [!WARNING]
> **This repository is deprecated.** All packages have been moved to [ffflorian/node-packages](https://github.com/ffflorian/node-packages) and are published from there.

Monorepo containing reusable configuration packages.

## Packages

| Package | Description | npm |
| --- | --- | --- |
| [@ffflorian/eslint-config](https://github.com/ffflorian/node-packages/tree/main/packages/eslint-config) | ESLint flat config for JS and TS projects | [![npm version](https://img.shields.io/npm/v/@ffflorian/eslint-config.svg)](https://npmjs.com/package/@ffflorian/eslint-config) |
| [@ffflorian/oxlint-config](https://github.com/ffflorian/node-packages/tree/main/packages/oxlint-config) | oxlint config for JS and TS projects | [![npm version](https://img.shields.io/npm/v/@ffflorian/oxlint-config.svg)](https://npmjs.com/package/@ffflorian/oxlint-config) |
| [@ffflorian/prettier-config](https://github.com/ffflorian/node-packages/tree/main/packages/prettier-config) | Shared Prettier config | [![npm version](https://img.shields.io/npm/v/@ffflorian/prettier-config.svg)](https://npmjs.com/package/@ffflorian/prettier-config) |
| [@ffflorian/semantic-release-config](https://github.com/ffflorian/node-packages/tree/main/packages/semantic-release-config) | Shared semantic-release config | [![npm version](https://img.shields.io/npm/v/@ffflorian/semantic-release-config.svg)](https://npmjs.com/package/@ffflorian/semantic-release-config) |

## Quick Start

### ESLint

```ts
import config from '@ffflorian/eslint-config';
import {defineConfig} from 'eslint/config';

export default defineConfig([config]);
```

### Prettier

```json
{
  "prettier": "@ffflorian/prettier-config"
}
```

### semantic-release

```json
{
  "release": {
    "extends": "@ffflorian/semantic-release-config"
  },
  "scripts": {
    "release": "semantic-release"
  }
}
```
