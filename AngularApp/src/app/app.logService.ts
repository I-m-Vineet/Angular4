export class LogService
{
    constructor()
    {
        console.log('log service instatiated');
    }

    public log(message: string): void
    {
        console.log("message logged:" + message);
    }
}