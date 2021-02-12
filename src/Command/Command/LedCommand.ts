import MessageBot from "../../Message/MessageBot";
import CommandModule from "../Contracts/CommandModule";
import ICommand from "../Contracts/ICommand";


class LedCommand implements ICommand
{
    name: string = 'LedCommand';
    msg: MessageBot;
    args: string[];

    actionName: string;

    constructor(msg: MessageBot, args: string[]){
        this.msg = msg;
        this.actionName = args[0] ? args[0].toLowerCase() : '';
        
        args.shift();
        this.args = args;
    }

    exec(): void {
        this.msg.reply('Domotica Led')
        this.handleAction();

    }

    handleAction(): void 
    {
        switch (this.actionName) {
            case CommandModule.RELAY.actions.on:
                this.on()
                break;
            case CommandModule.RELAY.actions.off:
                this.off()
                break;
            case CommandModule.RELAY.actions.config:
                this.config()
                break;
            case CommandModule.RELAY.actions.setconfig:
                this.setConfig()
                break;
       
            default:
                break;
        }
    }

    checkHourFormat(hour: string): boolean
    {
        return /^(2[0-3]|[0-1]?[\d]):[0-5][\d]$/.test(hour);
    }

    on(): void
    {
        this.msg.reply('on');

        const hour = this.args[0];

        if(this.checkHourFormat(hour)){
            this.msg.reply('hora bien: ' +  hour)
        }else{
            this.msg.reply('hora mal: ' +  hour)
        }

    }


    off(): void
    {
         this.msg.reply('off');

             const hour = this.args[0];
        
        if(this.checkHourFormat(hour)){
            this.msg.reply('hora bien: ' +  hour)
        }else{
            this.msg.reply('hora mal: ' +  hour)
        }
    }


    config(): void
    {
         this.msg.reply('config')
    }


    setConfig(): void
    {
         this.msg.reply('set Config')
    }

    

}

export default LedCommand;