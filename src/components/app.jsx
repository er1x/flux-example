var React = require('react');
var One = require('./one.jsx')
var Two = require('./two.jsx')

var App = React.createClass({
  render: function() {
    return (
      <div>
        <One />
        <Two />
      </div>
    );
  }
});


module.exports = App;
