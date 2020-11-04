const net = require('net');
/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '10.0.2.15',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  //print message when connection established
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
  });
  //send up name message once connected (write data to a connection)
  conn.on('connect', () => {
    conn.write('Name: SKS');
  });

  // conn.on('connect', () => {
  //   setInterval(() => {
  //     conn.write('Move: up');
  //   }, 50)
    
  // });

  // conn.on('connect', () => {
  //   setInterval(() => {
  //     conn.write('Move: up');
  //   }, 50)
    
  // });

  conn.on('data', (data) => {
    console.log('Message from client: ', data)
  });

  return conn;
}

module.exports = { connect }