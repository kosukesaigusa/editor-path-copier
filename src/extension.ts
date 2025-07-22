import * as vscode from 'vscode';
import * as path from 'path';

/**
 * Activates the extension and registers commands.
 * @param context - The extension context provided by VS Code.
 */
export function activate(context: vscode.ExtensionContext) {
    // Register command to copy absolute path of the current file.
    const copyAbsolutePathCommand = vscode.commands.registerCommand(
        'editor-path-copier.copyAbsolutePath', 
        (uri?: vscode.Uri) => {
            const activeEditor = vscode.window.activeTextEditor;
            if (!activeEditor) {
                vscode.window.showWarningMessage('No active editor found');
                return;
            }

            const filePath = uri ? uri.fsPath : activeEditor.document.uri.fsPath;
            vscode.env.clipboard.writeText(filePath);
            vscode.window.showInformationMessage(`Copied absolute path: ${filePath}`);
        }
    );

    // Register command to copy relative path of the current file.
    const copyRelativePathCommand = vscode.commands.registerCommand(
        'editor-path-copier.copyRelativePath',
        (uri?: vscode.Uri) => {
            const activeEditor = vscode.window.activeTextEditor;
            if (!activeEditor) {
                vscode.window.showWarningMessage('No active editor found');
                return;
            }

            const filePath = uri ? uri.fsPath : activeEditor.document.uri.fsPath;
            const workspaceFolder = vscode.workspace.getWorkspaceFolder(vscode.Uri.file(filePath));
            
            if (!workspaceFolder) {
                vscode.window.showWarningMessage('File is not in workspace');
                return;
            }

            const relativePath = path.relative(workspaceFolder.uri.fsPath, filePath);
            vscode.env.clipboard.writeText(relativePath);
            vscode.window.showInformationMessage(`Copied relative path: ${relativePath}`);
        }
    );

    context.subscriptions.push(copyAbsolutePathCommand, copyRelativePathCommand);
}

/**
 * Deactivates the extension.
 */
export function deactivate() {}