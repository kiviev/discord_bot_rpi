

module CommandModule {
    export const PREFIX = '/'; 
    export const PING = {
        trigger: 'ping',
        actions: {}
    }; 

    export const LED = {
        trigger: 'led',
        actions: {
            on: 'on',
            off: 'off',
            config: 'config',
            setconfig: 'setconfig',
            status: 'status'
        }
    }; 
}

export default CommandModule;