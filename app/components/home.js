var React = require('react');

var Home = React.createClass({
  render: function(){
    return(
      <div>
        {this.props.children}
      </div>
    )
  }
})

module.exports = Home;
