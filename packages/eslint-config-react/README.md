## @ffflorian/eslint-config-react [![npm version](https://img.shields.io/npm/v/@ffflorian/eslint-config-react.svg)](https://npmjs.com/package/@ffflorian/eslint-config-react)

> @ffflorian's personal [eslint](https://eslint.org/) configuration for react projects

### Usage

**Install**:

```
yarn add -D @ffflorian/eslint-config-react
```

**Edit `eslint.config.ts`**:

```ts
import config from '@ffflorian/eslint-config';
import {Config, defineConfig} from 'eslint/config';

export default defineConfig([config as Config]);
```
