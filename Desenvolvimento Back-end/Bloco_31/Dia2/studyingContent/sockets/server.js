/* Importing the package NET, responsible by sockets implementation at node */
const net = require('net');

/* Creating the server with method 'createServer', where receive a conection that are exposed the events that can manipulate our server */
const server = net.createServer((connection) => {
  console.log('Cliente conectado');

  /* So with normal nodejs event, the method ".on()" listen the specific event and, when it activated, our callback function it is called  */
  connection.on('end', () => {
    console.log('Cliente desconectado');
  });

  /* In this conection that was open, we can do many things. One of those things is write/give back a mesage to our client */
  connection.write('Mensagem do servidor!\r\n');
  connection.pipe(connection);
});

/* After programming the server, just put it up stand*/
server.listen(8080, () => {
  console.log('Servidor escutando na porta 8080');
});