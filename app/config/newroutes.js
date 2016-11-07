var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var Main = require('../components/main.js');
var Hello = require('../components/hello.js');

var routes =(
      <Router history={hashHistory}>
        <Route path="/" component={Main}>
          <Route path='/home' component = {Hello} />
        </Route>
      </Router>
    );

module.exports = routes;
