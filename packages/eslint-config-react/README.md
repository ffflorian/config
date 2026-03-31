# @ffflorian/eslint-config-react [![npm version](https://img.shields.io/npm/v/@ffflorian/eslint-config-react.svg)](https://npmjs.com/package/@ffflorian/eslint-config-react)

Opinionated ESLint flat config for React projects.

## What Is Included

- Everything from `@ffflorian/eslint-config`
- `eslint-plugin-react` recommended rules
- `eslint-plugin-react` JSX runtime rules
- `eslint-plugin-react-hooks` recommended rules
- Browser and Service Worker globals
- Automatic React version detection

## Installation

```bash
yarn add -D eslint @ffflorian/eslint-config-react
```

## Usage

Create or update `eslint.config.ts`:

```ts
import config from '@ffflorian/eslint-config-react';
import {defineConfig} from 'eslint/config';

export default defineConfig([config]);
```

## Notes

- This package targets React projects using ESLint flat config.
- You do not need to add React and React Hooks plugins manually; they are already included.
