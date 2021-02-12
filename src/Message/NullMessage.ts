import MessageBot from "./MessageBot";
import IMessage from './Contracts/IMessage'
import ITextMessage from './Contracts/ITextMessage'

class NullMessage implements IMessage, ITextMessage 
{
    type: string = 'text';
    msg: MessageBot;
    content: string;

    constructor(msg: MessageBot){
        this.msg = msg;
        this.content = '';
        this.handleMessage();
    }

    handleMessage(): void {}

}

export default NullMessage;