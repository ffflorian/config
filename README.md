# @ffflorian/config [![Build](https://github.com/ffflorian/config/workflows/Build/badge.svg)](https://github.com/ffflorian/config/actions/)

Monorepo containing reusable configuration packages.

## Packages

| Package | Description | npm |
| --- | --- | --- |
| [@ffflorian/eslint-config](./packages/eslint-config) | ESLint flat config for JS and TS projects | [![npm version](https://img.shields.io/npm/v/@ffflorian/eslint-config.svg)](https://npmjs.com/package/@ffflorian/eslint-config) |
| [@ffflorian/eslint-config-react](./packages/eslint-config-react) | ESLint flat config for React projects | [![npm version](https://img.shields.io/npm/v/@ffflorian/eslint-config-react.svg)](https://npmjs.com/package/@ffflorian/eslint-config-react) |
| [@ffflorian/prettier-config](./packages/prettier-config) | Shared Prettier config | [![npm version](https://img.shields.io/npm/v/@ffflorian/prettier-config.svg)](https://npmjs.com/package/@ffflorian/prettier-config) |
| [@ffflorian/semantic-release-config](./packages/semantic-release-config) | Shared semantic-release config | [![npm version](https://img.shields.io/npm/v/@ffflorian/semantic-release-config.svg)](https://npmjs.com/package/@ffflorian/semantic-release-config) |

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
