const { connect } = require('./client');
const { setupInput } = require('./input');

console.log('Connecting ...');
connect();

setupInput();

// /**
//  * Setup User Interface 
//  * Specifically, so that we can handle user input via stdin
//  */
// const setupInput = function() {
//   const stdin = process.stdin;
//   stdin.setRawMode(true);
//   stdin.setEncoding('utf8');
//   stdin.resume();
//   // on any input from stdin (standard input), output a "." to stdout
//   stdin.on('data', (key) => {
//     handleUserInput()
//   });

//   return stdin;
// }

// const handleUserInput = function() {
//     // \u0003 maps to ctrl+c input
//     if (key === '\u0003') {
//     process.exit();
//     }
// }



