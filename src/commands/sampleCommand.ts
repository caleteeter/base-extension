import * as vscode from 'vscode';

export async function sampleCommand(): Promise<void> {
    vscode.window.showInformationMessage('sample command called.');
}