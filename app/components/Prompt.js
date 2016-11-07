var React = require('react');
var transparentBG = require('../styles/index.js').transparentBG;
var PropTypes = React.PropTypes;

var Prompt = React.createClass({
  propTypes: {
    header:PropTypes.string.isRequired
  },
  render:function(){
      return(
        <div className="jumbotron col-sm-6 col-sm-offset-3 text-center animated-cont" style={transparentBG}>
          <h1>{this.props.header}</h1>
          <div className="col-sm-12">
            <form onSubmit={this.props.onSubmitUser}>
              <div className="form-group">
                <input
                  className="form-control"
                  placeholder="Github Username"
                  onChange={this.props.onUpdateUser}
                  value={this.props.username}
                  type="text" />
              </div>
              <div className="form-group col-sm-4 col-sm-offset-4">
                <button
                  className="btn btn-block btn-success"
                  type="submit">
                  Continue
                </button>
              </div>
            </form>
          </div>
        </div>
      )
    }
});

module.exports = Prompt;
