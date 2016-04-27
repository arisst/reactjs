var React     = require('react');
var ReactDOM  = require('react-dom');
var Router    = require('react-router').Router;
var Route     = require('react-router').Route;
var Link      = require('react-router').Link;
var browserHistory      = require('react-router').browserHistory;

var Models = require('./models')();

var App       = React.createClass({
  render: function() {
    return (
      <div>
        <h1>My App</h1>
        <ul>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/users">Users</Link></li>
          <li><Link to="/users/aris">Users Aris</Link></li>
          <li><Link to="/home">Home</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
});


ReactDOM.render(
  (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="login" component={Models.LoginPage} />
        <Route path="home" component={Models.DashboardPage} />
        <Route path="users" component={Models.ProfilePage}>
          <Route path=":userId" component={Models.ProfilePage} />
        </Route>
        <Route path="*" component={Models.NotFoundPage} />
      </Route>
    </Router>
  ),
  document.getElementById('main')
);
