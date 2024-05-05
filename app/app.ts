import * as WebSocket from 'ws';

// Crie um servidor WebSocket
const server = new WebSocket.Server({ port: 3000 });

// Evento de conexão WebSocket
server.on('connection', (ws: WebSocket) => {
    console.log('Cliente conectado.');

    // Evento de mensagem recebida
    ws.on('message', (message: string) => {
        console.log(`Mensagem recebida: ${message}`);

        // Envie a mensagem de volta para o cliente
        ws.send(`Você disse: ${message}`);
    });

    // Evento de fechamento de conexão
    ws.on('close', () => {
        console.log('Conexão fechada.');
    });
});

console.log('Servidor WebSocket iniciado na porta 3000.');
