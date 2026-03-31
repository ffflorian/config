import baseConfig from './packages/semantic-release-config/index.js';

/** @type {import("semantic-release").Options} */
const config = {
  ...baseConfig,
  plugins: [
    ...baseConfig.plugins,
    [
      '@semantic-release/git',
      {
        assets: ['package.json', 'CHANGELOG.md'],
        message: 'chore(release):  ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
  ],
};

export default config;
