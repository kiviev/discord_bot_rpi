import MessageBot from "../../Message/MessageBot";



interface ICommand{

    name: string;
    action?: string;
    args?: string[];
    msg: MessageBot;

    handleAction(): void;

    exec(): void;

}

export default ICommand;