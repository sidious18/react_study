var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var UserDetails = require('../components/UserDetails.js');
var UserDetailsWrapper = require('../components/UserDetailsWrapper.js');


function puke(object){
  return <pre>{JSON.stringify(object, null, " ")}</pre>
}

var ConfirmBattle = React.createClass({
  propTypes:{
    isLoading: React.PropTypes.bool.isRequired,
    onInitiateBattle: React.PropTypes.func.isRequired,
    playersInfo: React.PropTypes.array.isRequired
  },
  render:function(){
    return(
      this.props.isLoading === true
        ? <p>Loading</p>
      : <div className="jumbotron col-sm-12 text-center">
          <h1>Confirm Players</h1>
          <div className="col-sm-8 col-sm-offset-2">
            <UserDetailsWrapper header='Player 1'>
              <UserDetails info={this.props.playersInfo[0]} />
            </UserDetailsWrapper>
            <UserDetailsWrapper header='Player 2'>
              <UserDetails info={this.props.playersInfo[1]} />
            </UserDetailsWrapper>
          </div>
          <div className="col-sm-8 col-sm-offset-2">
            <div className="col-sm-12">
              <button type="button" className="btn btn-lg btn-success" onClick={this.props.onInitiateBattle}>
                  Initiate Battle
              </button>
            </div>
            <div className="col-sm-12">
              <Link to="/playerone">
                <button type="button" className="btn btn-lg btn-danger">
                    Reset Battle
                </button>
              </Link>
            </div>
          </div>
        </div>
    )
  }
})

module.exports = ConfirmBattle;
