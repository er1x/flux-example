'use strict';

var Constants = require('../constants');
var Dispatcher = require('../dispatcher');

var Actions = {

  taunt: function (text) {
    Dispatcher.dispatch({
      actionType: Constants.Taunt,
      text: text
    });
  }

};

module.exports = Actions;
