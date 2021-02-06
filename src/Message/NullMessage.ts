import { Message } from 'discord.js';
import IMessage from './Contracts/IMessage'
import ITextMessage from './Contracts/ITextMessage'

class NullMessage implements IMessage, ITextMessage 
{
    type: string = 'text';
    msg: Message;
    content: string;

    constructor(msg: Message){
        this.msg = msg;
        this.content = '';
        this.handleMessage();
    }

    handleMessage(): void {}

}

export default NullMessage;