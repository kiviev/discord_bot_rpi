import { Message } from "discord.js";
import CommandModule from "./Contracts/CommandModule";
import ICommand from "./Contracts/ICommand";
import NullCommand from "./Command/NullCommand";
import PongCommand from "./Command/PongCommand";
import LedCommand from "./Command/LedCommand";


class CommandFactory{

    msg: Message;

    prefix: string = CommandModule.PREFIX;

    content: string;

    args: string[];

    commandName?: string;

    command: ICommand;

    constructor(msg: Message){
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
                result = new PongCommand(this.msg, this.args);
                break;
            case CommandModule.RELAY.trigger:
                result = new LedCommand(this.msg,this.args);
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
        if(firstWord && firstWord.startsWith(this.prefix)){
            this.commandName = firstWord.substr(this.prefix.length);
            words.shift();
            args = words;
        }
        return args;
    }


}



export default CommandFactory;