import MessageBot from "../Message/MessageBot";
import ICommand from "./Contracts/ICommand";


class NullCommand implements ICommand
{
    name: string = 'NullCommand';
    msg: MessageBot;

    constructor(msg: MessageBot){
        this.msg = msg;
    }
    handleAction(): void {}

    exec(): void {}

}

export default NullCommand;