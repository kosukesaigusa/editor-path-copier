# Contributing to Editor Path Copier

Thank you for your interest in contributing to Editor Path Copier!

## Development Setup

1. Fork and clone the repository
2. Install dependencies: `npm install`
3. Make your changes
4. Test the extension: Press F5 to run in debug mode
5. Run linting: `npm run check`
6. Compile: `npm run compile`

## Commit Message Convention

This project uses [Conventional Commits](https://www.conventionalcommits.org/) for automated releases.

### Commit Types

- `feat`: New features
- `fix`: Bug fixes
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Test changes
- `chore`: Build process or auxiliary tool changes

### Examples

```
feat: add keyboard shortcut for path copying
fix: resolve clipboard permission issue
docs: update installation instructions
```

### Breaking Changes

For breaking changes, add `BREAKING CHANGE:` in the commit body:

```
feat: change command names

BREAKING CHANGE: Command names have been updated to follow VS Code conventions
```

## Release Process

This project uses automated releases via semantic-release:

- `fix:` commits trigger patch releases (1.0.x)
- `feat:` commits trigger minor releases (1.x.0)
- `BREAKING CHANGE:` triggers major releases (x.0.0)

Releases are automatically published to:
- GitHub Releases
- VS Code Marketplace
- Open VSX Registry

## Code Style

We use Biome for code formatting and linting. Run `npm run check` before committing.

## Pull Requests

1. Create a feature branch from `main`
2. Make your changes following the commit convention
3. Ensure tests pass and code is formatted
4. Submit a pull request

Thank you for contributing!