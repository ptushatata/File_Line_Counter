console.log("Welcome");
/* 
** Require 
** File system and 
** ReadLine
*/
var readLine = require('readline');
var fileSystem = require('fs');

var filePath = 'lineCounter.js'; // directory path to the input file w.r.t the current location
var numberOfLines = 0;
var readLineInterface = readLine.createInterface({
    input: fileSystem.createReadStream(filePath),
    output: process.stdout,
    terminal: false
});
readLineInterface.on('line', function (line) {
    numberOfLines++; // on each new line, increement counter
});
readLineInterface.on('close', function () {
    console.log(numberOfLines); // print the result when the internal 'close' event is called
});