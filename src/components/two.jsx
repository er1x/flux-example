var React = require('react');
var Store = require('../stores');


var Two = React.createClass({

  componentDidMount: function() {
    Store.events.addListener('enrage', this._enrage);
  },

  _enrage: function() {
    console.log('its over nine thousand!!');
  },

  render: function() {
    return (
      <img src="img/two.png" />
    );
  }
});

module.exports = Two;
