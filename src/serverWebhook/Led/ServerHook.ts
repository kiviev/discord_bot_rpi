import ICredential from "../../Contracts/ICredential";
import CredentialsHelper from "../../Helper/CredentialsHelper";
import base64 from 'base-64';
import axios, { AxiosResponse } from 'axios';


class ServerHook 
{

    public static baseUrl: string = process.env.RPI_SERVER || 'http://localhost:3000'

    public static async setLedStatus(ledId: number, on: boolean = false): Promise<AxiosResponse>
    {
        const uri: string = this.baseUrl + '/gpio/pin/' + ledId + '/set-status/' + (on ? 'on': 'off');
        console.log(uri)
        const response = await axios.get(uri,{
            headers: this.getHeaders()

        })
        return response;
    }

    private static getHeaders()
    {
        const credential: ICredential = CredentialsHelper.getCredentials();
  
        return {
            'Authorization': 'Basic ' + base64.encode(credential.username + ":" + credential.password),
            'Content-Type': 'application/json'
        };
    }

}


export default ServerHook;