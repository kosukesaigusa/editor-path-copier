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

This project follows standard Git commit conventions for clear history.

### Recommended Commit Types

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

## Release Process

Releases are handled manually via GitHub Actions:

1. **Development**: Continue normal development on `main` branch
2. **Ready to Release**: Go to GitHub Actions → Release workflow
3. **Choose Release Type**: 
   - `patch` for bug fixes (1.0.x)
   - `minor` for new features (1.x.0)
   - `major` for breaking changes (x.0.0)
4. **Automatic Processing**:
   - Version bump in package.json
   - CHANGELOG.md generation
   - GitHub Release creation
   - VS Code Marketplace publish
   - Merge-back PR creation

This approach gives maintainers full control over release timing.

## Code Style

We use Biome for code formatting and linting. Run `npm run check` before committing.

## Pull Requests

1. Create a feature branch from `main`
2. Make your changes following the commit convention
3. Ensure tests pass and code is formatted
4. Submit a pull request

Thank you for contributing!