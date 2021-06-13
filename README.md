# VS Code Extension Template to execute commands

cmd-executor is the template of vscode extension to execute a command from VSCode.

## Install tools

```sh
$ npm install -g yo generator-code
```

## Generate template

```sh
$ yo code
yo code

     _-----_     ╭──────────────────────────╮
    |       |    │   Welcome to the Visual  │
    |--(o)--|    │   Studio Code Extension  │
   `---------´   │        generator!        │
    ( _´U`_ )    ╰──────────────────────────╯
    /___A___\   /
     |  ~  |
   __'.___.'__
 ´   `  |° ´ Y `

? What type of extension do you want to create? New Extension (TypeScript)
? What's the name of your extension? cmd-executor
? What's the identifier of your extension? cmd-executor
? What's the description of your extension? The template of command executor
? Initialize a git repository? Yes
? Bundle the source code with webpack? No
? Which package manager to use? npm

Writing in C:\Users\akiya\CMDEXEC...
   create CMDEXEC\.vscode\extensions.json
   create CMDEXEC\.vscode\launch.json
   create CMDEXEC\.vscode\settings.json
   create CMDEXEC\.vscode\tasks.json
   create CMDEXEC\src\test\runTest.ts
   create CMDEXEC\src\test\suite\extension.test.ts
   create CMDEXEC\src\test\suite\index.ts
   create CMDEXEC\.vscodeignore
   create CMDEXEC\.gitignore
   create CMDEXEC\README.md
   create CMDEXEC\CHANGELOG.md
   create CMDEXEC\vsc-extension-quickstart.md
   create CMDEXEC\tsconfig.json
   create CMDEXEC\src\extension.ts
   create CMDEXEC\package.json
   create CMDEXEC\.eslintrc.json

Changes to package.json were detected.

Running npm install for you to install the required dependencies.

added 228 packages, and audited 229 packages in 19s

39 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

Your extension CMDEXEC has been created!

To start editing with Visual Studio Code, use the following commands:

     cd CMDEXEC
     code-insiders .

Open vsc-extension-quickstart.md inside the new extension for further instructions
on how to modify, test and publish your extension.

For more information, also visit http://code.visualstudio.com and follow us @code.
```

-----------------------------------------------------------------------------------------------------------
## References

* [Your First Extension](https://code.visualstudio.com/api/get-started/your-first-extension)
* [Extension Guidelines](https://code.visualstudio.com/api/references/extension-guidelines)
* [Visual Studio Code's Markdown Support](http://code.visualstudio.com/docs/languages/markdown)
* [Markdown Syntax Reference](https://help.github.com/articles/markdown-basics/)
