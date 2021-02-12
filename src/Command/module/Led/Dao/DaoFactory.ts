import SetStatusDao from "./SetStatusDao";


export default class DaoFactory
{
    public get(type: string, args: string[] = []): any
    {
        let result = null;
        switch (type) {
            case 'setStatus':
                let pinId = 10
                result = new SetStatusDao(pinId, true)
                break;
        
            default:
                break;
        }


        return result;
    }
}