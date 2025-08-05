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

### For Non-VS Code Editors (e.g. Cursor)

If you're using VS Code-based editors that don't have access to the VS Code marketplace, run:

```bash
# Download and install the extension
curl --compressed -L -o editor-path-copier.vsix "https://marketplace.visualstudio.com/_apis/public/gallery/publishers/kosukesaigusa/vsextensions/editor-path-copier/latest/vspackage"
cursor --install-extension editor-path-copier.vsix
rm editor-path-copier.vsix
```

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

- [Biome](https://biomejs.dev/) for code formatting and linting
- GitHub Actions for automated release workflow
- Manual release control via workflow dispatch

## Release Process

Releases are handled manually for complete control:

1. **GitHub Actions → Release workflow**
2. **Choose release type** (patch/minor/major)
3. **Automatic processing**:
   - Version bump and CHANGELOG generation
   - GitHub Release and VS Code Marketplace publish
   - Merge-back PR creation

## License

[MIT](LICENSE) © Kosuke Saigusa
