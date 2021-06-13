import * as vscode from 'vscode';
import * as cmd from './cmd';

const commands = [
	cmd.Template.simple("echo-helloworld", "EchoHelloWorld", "echo", ["Hello", "World"]),
	cmd.Template.simple("tree-root", "TreeRoot", "tree", ["/"]),
	cmd.Template.simple("tree-grep-node", "TreeGrepNode", "tree | grep node", [], true),
]

export function activate(context: vscode.ExtensionContext) {
	
	console.log('Activated "cmd-executor"');

	commands.forEach(cmd => {
		let disposable = vscode.commands.registerCommand(`cmd-executor.${cmd.name}`, () => {
			vscode.window.showInformationMessage(`${cmd.title} from cmd-executor!`)
			cmd.handler()
		})

		context.subscriptions.push(disposable)
	})
}

// this method is called when your extension is deactivated
export function deactivate() {}
