import MessageBot from "../Message/MessageBot";
import CommandModule from "./Contracts/CommandModule";
import ICommand from "./Contracts/ICommand";


class LedCommand implements ICommand
{
    name: string = 'Led';
    msg: MessageBot;
    action: string;
    args: string[];


    constructor(msg: MessageBot, action: string = '', args: string[] = []){
        this.msg = msg;
        this.action = action.toLowerCase();
        this.args = args;
    }

    exec(): void {
        this.msg.reply('Domotic Led')
        this.handleAction();

    }

    handleAction(): void 
    {
        switch (this.action) {
            case CommandModule.LED.actions.on:
                this.on()
                break;
            case CommandModule.LED.actions.off:
                this.off()
                break;
            case CommandModule.LED.actions.config:
                this.config()
                break;
            case CommandModule.LED.actions.setconfig:
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
            this.msg.reply('Hour OK: ' +  hour)
        }else{
            this.msg.reply('Bad hour format: ' +  hour)
        }

    }


    off(): void
    {
        this.msg.reply('off');

        const hour = this.args[0];
        
        if(this.checkHourFormat(hour)){
            this.msg.reply('Hour OK: ' +  hour)
        }else{
            this.msg.reply('Bad hour format: ' +  hour)
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