import * as vscode from 'vscode';
import { ext } from './extensionVariables';
import { AzureUserInput } from 'vscode-azureextensionui';
import { sampleCommand } from './commands/sampleCommand';

export function activate(context: vscode.ExtensionContext) {
    ext.context = context;
    ext.outputChannel = vscode.window.createOutputChannel('sample');
    ext.ui = new AzureUserInput(context.globalState);

    vscode.commands.registerCommand('sample.sampleCommand', sampleCommand);
}
