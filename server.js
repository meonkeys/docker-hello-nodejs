'use strict';

const http = require('http');
const stringify = require('json-stable-stringify');

http.createServer((request, response) => {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Success. Environment:\n\n' + stringify(process.env, { space: 2 }));
}).listen(8888);
