var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var Main = require("../components/main.js");
var Home = require("../components/home.js");
var PromptContainer = require("../containers/PromptContainer.js");
var ConfirmBattleContainer = require('../containers/ConfirmBattleContainer.js');
var ResultBattleContainer = require('../containers/ResultBattleContainer.js');


var routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Home}>
      <IndexRoute component={Main} />
      <Route path="/playerone" header="Player One" component={PromptContainer} />
      <Route path="/playertwo/:playerone" header="Player Two" component={PromptContainer} />
      <Route path="/battle" component={ConfirmBattleContainer} />
      <Route path='/results' component={ResultBattleContainer} />
    </Route>
  </Router>
);

module.exports = routes;
