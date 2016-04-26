var React = require('react');
var ReactDOM = require('react-dom');


var TodoList = React.createClass({

    getInitialState: function() {
      return {
        todos: [
          {"name":"cukur"},
          {"name":"sarapan"},
          {"name":"nulis"}
        ]
      };
    },

    componentDidMount: function() {

    },

    render: function(){
      var todoNodes = this.state.todos.map(function(task, i) {
        return (<li key={i}>{task.name}</li>);
      });
      return (<ul>{todoNodes}</ul>);
    }

});



ReactDOM.render(
  <TodoList/>,
  document.getElementById('main')
);
