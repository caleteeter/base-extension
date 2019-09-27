import * as vscode from 'vscode';
import { ext } from './extensionVariables';
import { AzureUserInput } from 'vscode-azureextensionui';
import { sampleCommand, sampleCommandOption1, sampleCommandOption2 } from './commands/sampleCommand';

export function activate(context: vscode.ExtensionContext) {
    ext.context = context;
    ext.outputChannel = vscode.window.createOutputChannel('sample');
    ext.ui = new AzureUserInput(context.globalState);

    vscode.commands.registerCommand('sample.sampleCommand', sampleCommand);
    vscode.commands.registerCommand('sample.sampleCommand1', sampleCommandOption2);
    vscode.commands.registerCommand('sample.sampleCommand2', sampleCommandOption1);
}
