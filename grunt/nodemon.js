'use strict';

module.exports = {
  dev: {
    options: {
      args: [''],
      cwd: './',
      delayTime: 1,
      env: {
        PORT: '1337',
      },
      file: 'server.js',
      nodeArgs: ['--debug'],
    }
  },
};
