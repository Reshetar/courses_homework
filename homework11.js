// Task 1

const http = require('http');
const os = require('node:os');
const path = require('path');

http.createServer((req, res) => {
  var ut_sec = os.uptime();
  var ut_min = ut_sec/60;
  var ut_hour = ut_min/60;
    
  ut_sec = Math.floor(ut_sec);
  ut_min = Math.floor(ut_min);
  ut_hour = Math.floor(ut_hour);
    
  ut_hour = ut_hour%60;
  ut_min = ut_min%60;
  ut_sec = ut_sec%60;

  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("<h1>System information</h1>");
  res.write(`<p>Current user name: ${os.userInfo().username}</p>`);
  res.write(`<p>OS type: ${os.type()}</p>`);
  res.write(`<p>System work time: ${ut_hour} Hour(s) ${ut_min} minute(s) and ${ut_sec} second(s)</p>`);
  res.write(`<p>Current work directory: ${path.dirname(__filename)}</p>`);
  res.write(`<p>Server file name: ${path.basename(__filename)}</p>`);
    res.end();
}).listen(5000);


// Task 2

const http = require('http');
const os = require('node:os');
var personalModule = require('./personalmodule.js');

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  personalModule.name = os.userInfo().username;
  personalModule.time = new Date();
  let result = personalModule.getResult();
  res.write(`${result}`);
  res.end();
}).listen(8000);