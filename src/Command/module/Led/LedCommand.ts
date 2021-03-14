import MessageBot from "../../../Message/MessageBot";
import ILedSetStatus from "../../../serverWebhook/Led/Contracts/Response/ILedSetStatus";
import ServerHook from "../../../serverWebhook/Led/ServerHook";
import CommandModule from "../../Contracts/CommandModule";
import ICommand from "../../Contracts/ICommand";

const PINID = 17;

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

    exec(): void 
    {
        // this.msg.reply('Domotic Led')
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
            case CommandModule.LED.actions.status:
                this.getStatus()
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
        let response = ServerHook.setLedStatus(PINID, true);
           
        response.then((response: any) => {
            const data: ILedSetStatus = response.data;
         
             this.msg.reply(`On`);
        })
        .catch(e => console.error(e));

        // const hour = this.args[0];
        //  this.msg.reply('Hour OK: ' +  hour)
        // if(this.checkHourFormat(hour)){
           
           
        // }else{
        //     this.msg.reply('Bad hour format: ' +  hour)
        // }

    }


    off(): void
    {
        let response = ServerHook.setLedStatus(PINID, false);
           
        response.then((response: any) => {
            const data: ILedSetStatus = response.data;

            this.msg.reply(`Off`);
        })
        .catch(e => console.error(e));
        
    }



    getStatus(): void
    {
        let response = ServerHook.getLedStatus(PINID);
           
        response.then((response: any) => {
            const data: ILedSetStatus = response.data;
            let msg = `Status: ${data.on ? 'Encendido' : 'Apagado'}`
            this.msg.reply(msg)
        })
        .catch(e => console.error(e));
        
    }


    config(): void
    {
        const hour = this.args[0];
        this.msg.reply('config')
    }


    setConfig(): void
    {
        this.msg.reply('set Config')
    }

    

}

export default LedCommand;