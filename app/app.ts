import * as WebSocket from 'ws';
import { subscribeChannel } from './services/RedisService';

const channelName = 'PaperData';


const server = new WebSocket.Server({ port: 3000 });

subscribeChannel(channelName, (message: string) => {
    server.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(message);
        }
    });
});

console.log('Servidor WebSocket iniciado na porta 3000.');
