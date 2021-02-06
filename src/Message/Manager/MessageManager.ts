import {Message} from 'discord.js'
import IMessage from '../Contracts/IMessage';
import NullMessage from '../NullMessage';
import TextMessage from '../TextMessage';


class MessageManager
{
    private msg: Message;

    private message: IMessage;

    constructor(msg :Message)
    {
        this.msg = msg;
        this.message = this.buildMessage();

    }

    private getType(): string
    {
        return this.msg.channel.type;
    }

    private buildMessage(): IMessage
    {
        let result = null;
        switch (this.getType()) {
            case 'text':
            case 'dm':
                result = new TextMessage(this.msg);
                break;

            default:
                result = new NullMessage(this.msg);
                break;
        
        }

        return result;
    }
}


export default MessageManager;