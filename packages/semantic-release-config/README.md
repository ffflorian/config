## @ffflorian/semantic-release-config [![npm version](https://img.shields.io/npm/v/@ffflorian/semantic-release-config.svg)](https://npmjs.com/package/@ffflorian/semantic-release-config)

> My personal [semantic-release](https://semantic-release.gitbook.io/) configuration.

### Usage

**Install**:

```
yarn add -D @ffflorian/semantic-release-config \
            publish-flat \
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
    "flatten": "publish-flat -o flattened",
    "postversion": "node ../node_modules/publish-flat/cli-copy.js -i package.json -o ../package.json version",
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
          yarn flatten
          # set up git
          yarn release
```
