import MessageBot from "../../Message/MessageBot";
import ICommand from "../Contracts/ICommand";


class PongCommand implements ICommand
{
    name: string = 'Pong';
    args?: string[];
    msg: MessageBot;

    constructor(msg: MessageBot){
        this.msg = msg;
    }

    exec(): void {
        this.msg.reply('Pong');
    }

}

export default PongCommand;