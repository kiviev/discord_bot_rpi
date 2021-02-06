import { Message } from "discord.js";


interface ICommand{

    name: string;
    args?: string[];
    msg: Message;

    exec():void;

}

export default ICommand;