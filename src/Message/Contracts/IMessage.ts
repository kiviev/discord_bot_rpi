import { DiscordAPIError } from "discord.js";

import {Message} from 'discord.js'

interface IMessage{
    
    type: string;
    msg: Message;

    handleMessage(): void
}


export default IMessage;