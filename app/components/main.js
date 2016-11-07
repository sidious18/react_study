var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var transparentBG = require('../styles/index.js').transparentBG;

var MainComponent = React.createClass({
  render: function(){
    return(
      <div className="jumbotron col-sm-12 text-center" style={transparentBG}>
        <h2>
          Start
        </h2>
        <Link to="/playerone">
          <button type="button" className="btn btn-lg btn-success">
            Continue
          </button>
        </Link>
      </div>
    )
  }
});

module.exports = MainComponent;
