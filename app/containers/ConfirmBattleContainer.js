var React = require('react');
var ConfirmBattle = require("../components/ConfirmBattle.js");
var githubHelpers = require('../utils/githubHelpers.js');

var ConfirmBattleContainer = React.createClass({
  contextTypes:{
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function(){
    return{
      isLoading : true,
      playersInfo : []
    }
  },
  componentDidMount: function(){
    var query = this.props.location.query;
    githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
      .then(function(playersInfo){
        this.setState({
          isLoading:false,
          playersInfo: [playersInfo[0], playersInfo[1]]
        })
      }.bind(this)
    )
  },
  handleInitiateBattle: function(){
    this.context.router.push({
      pathname:"/results",
      state:{
        playerInfo: this.state.playersInfo
      }
    })
  },
  render: function(){
    return(
      <ConfirmBattle
        isLoading = {this.state.isLoading}
        onInitiateBattle = {this.handleInitiateBattle}
        playersInfo = {this.state.playersInfo}
      />
    )
  }
})

module.exports = ConfirmBattleContainer;
