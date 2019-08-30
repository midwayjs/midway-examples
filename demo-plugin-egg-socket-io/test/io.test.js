const {mm} = require('midway-mock');
const path = require('path');
const assert = require('assert');

const ioc = require('socket.io-client');
let basePort = 17001;

function client(nsp = '', opts = {}) {
  let url = 'http://127.0.0.1:' + opts.port + (nsp || '');
  if (opts.query) {
    url += '?' + opts.query;
  }
  return ioc(url, opts);
}

describe('test/socketio.test.ts', () => {

  it('should async/await works ok', done => {
    const app = mm.cluster({
      baseDir: path.join(__dirname, '../'),
      workers: 1,
      typescript: true,
      sticky: false,
    });

    let idx = 1;

    app.ready().then(() => {
      const socket = client('', { port: basePort });
      socket.on('connect', () => {
        console.log('hello, test connected');
        socket.emit('chat', 'chat-data');
      });
      socket.on('disconnect', () => app.close().then(done, done));
      socket.on('res', msg => {
        if(idx === 1) {
          assert(msg === 'connected!');
        }

        if(idx === 2) {
          assert(msg === 'Hi! I\'ve got your message: chat-data123')
          socket.close();
        }
        idx++;
      });
    });
  });

  
});