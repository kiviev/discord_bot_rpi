import { Message } from "discord.js";
import ICommand from "../Contracts/ICommand";


class NullCommand implements ICommand
{
    name: string = 'NullCommand';
    msg: Message;
    args?: string[];

    constructor(msg: Message){
        this.msg = msg;
    }

    exec(): void {
        
    }

}

export default NullCommand;