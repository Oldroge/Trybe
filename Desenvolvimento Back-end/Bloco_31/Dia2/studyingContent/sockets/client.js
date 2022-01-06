const net = require('net');
/* Através do pacote NET, nós podemos não só criar servidores como podemos conectar nossos clientes aos servidores */
const client = net.connect({ port: 8080 }, () => {
  console.log('Cliente conectado ao servidor!');
});

/* As in the server, also we have events by client side, where the event 'data' is actived when the server sends a mesage to the client */
client.on('data', (data) => {
  console.log(data.toString());
  client.end();
});

/* When the conection is interrupted/finished, it is activade the 'end' event, where we can clean some caches, give a mesage to the user, update some data in the database etc */
client.on('end', () => {
  console.log('Desconectado do servidor');
});