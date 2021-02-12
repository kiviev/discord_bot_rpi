import MessageBot from "../Message/MessageBot";
import ICommand from "./Contracts/ICommand";


class PongCommand implements ICommand
{
    name: string = 'Ping';
    msg: MessageBot;

    constructor(msg: MessageBot){
        this.msg = msg;
    }
    handleAction(): void {}

    exec(): void {
        this.msg.reply('Pong');
    }

}

export default PongCommand;