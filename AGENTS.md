# AGENTS.md

This file defines conventions for AI agents and contributors working in this repository.

## Project Overview

This repository is a yarn workspace monorepo for publishing JavaScript/TypeScript configuration packages:

- `@ffflorian/eslint-config`
- `@ffflorian/eslint-config-react`
- `@ffflorian/prettier-config`
- `@ffflorian/semantic-release-config`

## Repository Structure

- `.github/workflows/build_lint_publish.yml`: Build, lint, and publish workflow.
- `packages/eslint-config/`: Base ESLint config package.
- `packages/eslint-config-react/`: React ESLint config package.
- `packages/prettier-config/`: Prettier config package.
- `packages/semantic-release-config/`: Semantic release config package.
- Each package should keep `README.md`, `package.json`, and `CHANGELOG.md` aligned with behavior changes.

## Tooling

- Use yarn commands, not npm/pnpm, for workspace operations.
- Keep the workspace compatible with the declared package manager and lockfile (`yarn@4.x`, `yarn.lock`).

## Code Style

- Keep YAML files with consistent two-space indentation.
- Pin external GitHub Actions in workflows to full commit SHAs where practical.
- Keep changes minimal and focused; avoid unrelated refactors.
- Preserve existing package export formats and public APIs unless a breaking change is intentional.

## Development Conventions

- Update package `README.md` when package behavior, usage, or exports change.
- Update package `CHANGELOG.md` entries via the release process; do not manually add inconsistent changelog formats.
- For linting/fixing, prefer workspace scripts from the root:
  - `yarn lint`
  - `yarn fix`

## Commit Messages

Use conventional commit types so release tooling can infer versioning:

```text
feat: add new feature
fix: fix a bug
chore: maintenance tasks
docs: documentation changes
refactor: internal restructuring without behavior change
test: add or update tests
build: build/release system changes
ci: CI/CD configuration changes
```

- Do not mention AI tools in commit messages.

## Branch Naming

Use semantic branch names:

```text
feat/<short-description>
fix/<short-description>
chore/<short-description>
docs/<short-description>
refactor/<short-description>
```

- Do not include AI/tool identifiers in branch names.

## CI/CD

Current workflow (`.github/workflows/build_lint_publish.yml`):

1. Runs on pushes and pull requests targeting `main`.
2. Installs dependencies with `yarn --immutable`.
3. Runs lint via `yarn lint`.
4. Runs release via `yarn release` on non-PR events.

When changing release behavior, keep workflow and root release tooling (`.releaserc.mjs`, workspace package configurations) aligned.

## PR Guidelines

- Keep PR titles and descriptions focused on what changed and why.
- Document user-facing package behavior changes in the relevant package README.
- Do not reference AI tools in PR titles or descriptions.
