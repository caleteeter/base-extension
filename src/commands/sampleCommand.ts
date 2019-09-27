import * as vscode from 'vscode';
import * as opn from 'opn';

export async function sampleCommand(): Promise<void> {
    vscode.window.showInformationMessage('sample command called.');
}

export async function sampleCommandOption1(): Promise<void> {
    vscode.env.openExternal(vscode.Uri.parse('https://docs.openzeppelin.com/contracts/2.x/'));
}

export async function sampleCommandOption2(): Promise<void> {
    vscode.window.showInformationMessage('Explore more information about the contracts downloaded', 
        'More details', 'Ignore').then(selection => {
            if (selection === 'More details') {
                opn('https://docs.openzeppelin.com/contracts/2.x/');
            }
        });
}