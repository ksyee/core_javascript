const server = require('live-server');

const params = {
  host: 'localhost',
  port: 3000,
  open: true,
  root: './client',
  browser: 'google chrome',
};

server.start(params);
