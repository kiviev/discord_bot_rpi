import MessageBot from "./MessageBot";
import CommandFactory from '../Command/CommandFactory';
import IMessage from './Contracts/IMessage'
import ITextMessage from './Contracts/ITextMessage'

class TextMessage implements IMessage, ITextMessage 
{
    type: string = 'text';
    msg: MessageBot;
    content: string;

    constructor(msg: MessageBot){
        this.msg = msg;
        this.content = this.msg.content
        this.handleMessage()
    }

    handleMessage(): void {

        const commandFactory = new CommandFactory(this.msg);

        const command = commandFactory.getCommand();

        command.exec()

    }

}

export default TextMessage;