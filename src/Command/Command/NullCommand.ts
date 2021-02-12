import MessageBot from "../../Message/MessageBot";
import ICommand from "../Contracts/ICommand";


class NullCommand implements ICommand
{
    name: string = 'NullCommand';
    msg: MessageBot;
    args?: string[];

    constructor(msg: MessageBot){
        this.msg = msg;
    }

    exec(): void {
        
    }

}

export default NullCommand;