// server.js
const { Bootstrap } = require('@midwayjs/bootstrap');
const { Framework } = require('@midwayjs/rabbitmq')
Bootstrap
  .load(
    new Framework().configure({
      url: {
        hostname: 'localhost',
        port: '5672'
      }
    })
  )
  .run();
