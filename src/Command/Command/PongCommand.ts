import { Message } from "discord.js";
import ICommand from "../Contracts/ICommand";


class PongCommand implements ICommand
{
    name: string = 'Pong';
    args: string[];
    msg: Message;

    constructor(msg: Message, args: string[]){
        this.msg = msg;
        this.args = args;
    }

    exec(): void {
        this.msg.reply('pongito ' + this.args.join(' '));
    }

}

export default PongCommand;