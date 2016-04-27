var React     = require('react');
module.exports = function() {
  return React.createClass({

    render: function() {
      return (
        <h2>Users Page : {this.props.params.userId}</h2>
      );
    }
  });
}
