import * as vscode from 'vscode';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {
    // Copy Absolute Path command
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

    // Copy Relative Path command  
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

export function deactivate() {}