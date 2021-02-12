import MessageBot from "../../Message/MessageBot";



interface ICommand{

    name: string;
    args?: string[];
    msg: MessageBot;

    exec():void;

}

export default ICommand;