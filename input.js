
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
      } else if (key === 'o') {
        conn.write('Say: they')
      } else if (key === 'k') {
        conn.write('Say: see')
      } else if (key === 'l') {
        conn.write('Say: me')
      } else if (key === ';') {
        conn.write('Say: rollin\'')
      } else if (key === 'p') {
        conn.write('Say: hatin\'')
      } 
    }

    handleUserInput();
  });

  return stdin;
}

module.exports = { setupInput };