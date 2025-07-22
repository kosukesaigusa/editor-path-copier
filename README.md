# Editor Path Copier

[![CI](https://github.com/kosukesaigusa/editor-path-copier/actions/workflows/ci_lint.yaml/badge.svg)](https://github.com/kosukesaigusa/editor-path-copier/actions/workflows/ci_lint.yaml)
[![Release](https://github.com/kosukesaigusa/editor-path-copier/actions/workflows/release.yaml/badge.svg)](https://github.com/kosukesaigusa/editor-path-copier/actions/workflows/release.yaml)
[![Version](https://img.shields.io/visual-studio-marketplace/v/kosukesaigusa.editor-path-copier)](https://marketplace.visualstudio.com/items?itemName=kosukesaigusa.editor-path-copier)

A VS Code extension that allows you to easily copy file paths from the editor toolbar.

## Features

- 📋 **One-click copy** - Add buttons to the editor toolbar for instant path copying
- 🎯 **Two copy modes** - Copy absolute or relative paths as needed
- 💬 **Instant feedback** - Notification displays the copied path for confirmation
- ⚡ **Lightweight** - No configuration needed, works out of the box

## Usage

1. Open any file in VS Code
2. Look for the copy icons in the editor toolbar (top-right area)
3. Click to copy either:
   - **First icon**: Absolute path (full system path)
   - **Second icon**: Relative path (relative to workspace root)
4. The path is automatically copied to your clipboard

## Installation

### From VS Code Marketplace

1. Open VS Code
2. Go to Extensions (Ctrl+Shift+X / Cmd+Shift+X)
3. Search for "Editor Path Copier"
4. Click Install

### From VSIX

Download the latest `.vsix` file from [GitHub Releases](https://github.com/kosukesaigusa/editor-path-copier/releases) and install manually.

## Development

### Prerequisites

- Node.js 18+
- npm

### Setup

```bash
git clone https://github.com/kosukesaigusa/editor-path-copier.git
cd editor-path-copier
npm install
```

### Available Scripts

```bash
npm run compile    # Compile TypeScript
npm run watch      # Watch mode compilation
npm run check      # Run Biome linting and formatting
npm run package    # Create VSIX package
```

### Testing

1. Press `F5` to run the extension in a new Extension Development Host window
2. Open any file and test the copy functionality

## Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

This project uses:
- [Conventional Commits](https://www.conventionalcommits.org/) for automated releases
- [Biome](https://biomejs.dev/) for code formatting and linting
- [Semantic Release](https://semantic-release.gitbook.io/) for automated versioning

## Release Process

Releases are fully automated using semantic-release:

- `fix:` commits → patch release (e.g., 1.0.1)
- `feat:` commits → minor release (e.g., 1.1.0)  
- `BREAKING CHANGE:` → major release (e.g., 2.0.0)

## License

[MIT](LICENSE) © Kosuke Saigusa