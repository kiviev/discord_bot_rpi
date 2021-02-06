import dotenv from 'dotenv';

import Discord from 'discord.js';
import MessageManager from './Message/Manager/MessageManager';

dotenv.config();

const client = new Discord.Client();


client.on('ready', () => {
   
        console.log(`Logged in as !`);
   
});
 
client.on('message', msg => {

    new MessageManager(msg);
});
 
client.login(process.env.BOT_TOKEN);