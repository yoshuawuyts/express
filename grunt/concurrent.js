'use strict';

module.exports = {
  options: {
    logConcurrentOutput: true
  },

  dev: {
    tasks: ['watch', 'open', 'nodemon', 'node-inspector']
  },

  build: {
    tasks: ['styles', 'views', 'js'],
  }
};
