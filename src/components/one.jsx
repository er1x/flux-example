var React   = require('react');
var Actions = require('../actions')

var One = React.createClass({

  doTaunt: function() {
    Actions.taunt('What is his powerlevel?');
  },

  render: function() {
    return (
      <img src="img/one.png" onClick={this.doTaunt}/>
    );
  }
});

module.exports = One;
