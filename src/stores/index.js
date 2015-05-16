'use strict';

var Dispatcher   = require('../dispatcher');
var Constants    = require('../constants');
var EventEmitter = require('events').EventEmitter;

var FluxionStore = {
  events: new EventEmitter(),

  numTaunts: 0,

  addTaunt: function() {
    this.numTaunts++;
    if (this.numTaunts === 3) {
      this.events.emit('enrage');
      this.numTaunts = 0;
    }
  }
};


Dispatcher.register(function(action) {
  if (action.actionType === Constants.Taunt) {
    FluxionStore.addTaunt();
  }
});

module.exports = FluxionStore;
