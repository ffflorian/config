## @ffflorian/semantic-release-config [![npm version](https://img.shields.io/npm/v/@ffflorian/semantic-release-config.svg)](https://npmjs.com/package/@ffflorian/semantic-release-config)

> My personal [semantic-release](https://semantic-release.gitbook.io/) configuration.

### Usage

**Install**:

```
yarn add -D @ffflorian/semantic-release-config \
            semantic-release \
            @semantic-release/changelog \
            @semantic-release/git
```

**Edit `package.json`**:

```jsonc
{
  // ...
  "release": {
    "extends": "@ffflorian/semantic-release-config"
  },
  // ...
  "scripts": {
    "release": "semantic-release"
  }
}
```

**Edit .github/workflows/\<your-workflow\>**

```yaml
jobs:
  <job-name>:
    steps:
      - name: Release
        run: |
          # test and build
          # set up git
          yarn release
```
