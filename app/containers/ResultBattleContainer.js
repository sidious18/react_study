var React = require('react');
var Result = require('../components/Result.js');
var githubHelpers = require("../utils/githubHelpers.js");

var ResultBattleContainer = React.createClass({
  getInitialState: function(){
    return {
      isLoading: true,
      scores: []
    }
  },
  componentDidMount: function(){
    githubHelpers.battle(this.props.location.state.playerInfo)
      .then(function(scores){
        this.setState({
          scores:scores,
          isLoading:false
        })
      }.bind(this))
  },
  render: function(){
    return (
      <Result
        isLoading={this.state.isLoading}
        playerInfo = {this.props.location.state.playerInfo}
        scores={this.state.scores}
      />
    )
  }
})

module.exports = ResultBattleContainer;
