
import MessageBot from "../../Message/MessageBot";
import CommandModule from "../Contracts/CommandModule";
import ICommand from "../Contracts/ICommand";
import NullCommand from "../NullCommand";
import PongCommand from "../PongCommand";
import LedCommand from "../LedCommand";


class CommandFactory{

    msg: MessageBot;

    prefix: string = CommandModule.PREFIX;

    content: string;
    
    action: string = '';

    args: string[];

    commandName?: string;

    command: ICommand;

    constructor(msg: MessageBot){
        this.msg = msg;
        this.content = this.msg.content.trim();
        this.args = this.getArgs();

        this.command = this.buildCommand();
    
    }

    private buildCommand(): ICommand
    {
        let result = null;
        switch (this.commandName) {
            case CommandModule.PING.trigger:
                result = new PongCommand(this.msg);
                break;
            case CommandModule.LED.trigger:
                result = new LedCommand(this.msg, this.action, this.args);
                break;
        
            default:
                result = new NullCommand(this.msg);
                break;
        }

        return result;

    }

    public getCommand(): ICommand 
    {
        return this.command;
    }

    private getArgs(): string[]
    {
        let args:string[] = [];

        let words = this.content.split(' ');
        const firstWord = words[0];
        const secondWord = words[1] ? words[1] : '';
        if(firstWord && firstWord.startsWith(this.prefix)){
            this.commandName = firstWord.substr(this.prefix.length);
            words.shift();
        }

        if(secondWord){
            this.action = secondWord;
            words.shift();
            args = words;
        }
        return args;
    }


}



export default CommandFactory;