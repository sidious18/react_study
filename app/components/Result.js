var React = require('react');

function puke(obj){
  return <pre>{JSON.stringify(obj, 2, " ")}</pre>
}

var Result = React.createClass({
  PropTypes:{
    isLoading: React.PropTypes.bool.isRequired,
    playerInfo: React.PropTypes.array.isRequired,
    scores:  React.PropTypes.array.isRequired
  },
  render: function(){
    return (
      <div>
        {puke(this.props.scores)}
        {puke(this.props.playerInfo)}
      </div>
    )
  }
})

module.exports = Result;
