import * as vscode from 'vscode';
import * as sh from 'child_process';

class Result {
    ret_code: number
    stdout: string
    stderr: string

    constructor(ret_code: number, stdout: string, stderr: string) {
        this.ret_code = ret_code
        this.stdout = stdout
        this.stderr = stderr
    }

    public show() {
        console.log(`Return Code: ${this.ret_code}`)
        console.log(`${this.stdout}`)
        console.error(`${this.stderr}`)
    }
}

class Command {
    // name and title should be defined in package.json
    public name: string
    public title: string

    // handler is an implementation corresponding to command
    public handler: Function
    
    constructor(name: string, title: string, handler: Function) {
        this.name = name
        this.title = title
        this.handler = handler
    }
}

export class CommandWithoutUserArg extends Command {
    cmd: string
    args: string[]
    is_loose: boolean

    constructor(name: string, title: string, cmd: string, args: string[], is_loose: boolean = false) {
        super(name, title, () => { /* dummy */})
        this.cmd = cmd
        this.args = args
        this.is_loose = is_loose
        this.init()
    }

    private init(): void {
        if (this.is_loose) {
            this.handler = this.loose_handler
        } else {
            this.handler = this.strict_handler
        }
    }

    public strict_handler(): void {
        // create subprocess and get result asynchronously
        let proc = sh.spawn(this.cmd, this.args)
        console.log(`execute (pid: ${proc.pid}): ${this.cmd} ${this.args}`)
        // stdout and stderr are processed in a stream
        proc.stdout.on('data', (data) => {
            console.log(data.toString)
        })
        proc.stderr.on('data', (data) => {
            console.error(data.toString)
        })
    }

    public loose_handler(): void {
        // open new shell
        let exec_cmd = this.cmd;
        this.args.forEach(elem => {
            exec_cmd = " " + elem.toString()
        })
        console.log(`execute: ${exec_cmd}`)
        sh.exec(`${exec_cmd}`, (error, stdout, stderr) => {
            if (error) {
                console.log(`[ERROR] Failed to execute ${exec_cmd}`)
            } else {
                console.log(`[SUCCESS] ${exec_cmd}`)
            }
            console.log(stdout.toString)
            console.error(stderr.toString())
        })
    }    
}

export class Template {
    public static simple(name: string, title: string, cmd: string, args: string[], is_loose: boolean = false) {
        return new CommandWithoutUserArg(name, title, cmd, args, is_loose)
    }
}