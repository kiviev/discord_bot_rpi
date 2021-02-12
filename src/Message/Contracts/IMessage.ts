import { DiscordAPIError } from "discord.js";
import MessageBot from "../MessageBot";

interface IMessage{
    
    type: string;
    msg: MessageBot;

    handleMessage(): void
}


export default IMessage;