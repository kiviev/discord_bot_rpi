

export default class SetStatusDao
{
    private pinId: number;

    private on: boolean;
    
    constructor(pinId: number, on: boolean){
        this.pinId = pinId;
        this.on = on;
    }

    public getPinId()
    {
        return this.pinId;
    }

    public getOnStatus()
    {
        return this.on;
    }

}