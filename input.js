
let connection;

 const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  // on any input from stdin (standard input), output a "." to stdout
  stdin.on('data', (key) => {

    const handleUserInput = function() {
      // \u0003 maps to ctrl+c input
      if (key === '\u0003') {
      process.exit();
      } else if (key === 'w') {
        conn.write('Move: up');
       } else if (key === 'a') {
        conn.write('Move: left');
      } else if (key === 's') {
        conn.write('Move: down');
      } else if (key === 'd') {
        conn.write('Move: right');
      }
    }

    handleUserInput();
  });

  return stdin;
}

module.exports = { setupInput };