import Redis from 'ioredis';


export function subscribeChannel(channel: string, callback: (message: string) => void) {
    const redis = new Redis();
    redis.subscribe(channel, (err) => {
        if (err) {
            console.error('Erro ao se inscrever no canal:', err);
            return;
        }
        console.log(`Inscrito no canal ${channel}.`);
    });

    redis.on('message', (channel, message) => {
        console.log(`Mensagem recebida no canal ${channel}: ${JSON.stringify(message)}`);
        callback(message);
    });
}