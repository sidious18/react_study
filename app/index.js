var React = require('react');
var ReactDOM = require('react-dom');
var sampleComponent = require ("./components/sample_components.js");
var routes = require('./config/routes.js');

var Greeting = React.createClass({
  render: function(){
    return(
      <h2>
        {this.props.greeting}
      </h2>
    )
  }
});

var DutiesList = React.createClass({
  render: function(){
    var dutiesList = this.props.duties.map(function(duty){
      return <li> {duty} </li>
    })
    return(
      <ul>
        {dutiesList}
      </ul>
    )
  }
})

var Motivate = React.createClass({
  motivate: function(){
      alert("AHAHAH");
  },
  render: function(){
    return(
      <button onClick={this.motivate} style={{color:"blue", cursor:"pointer"}}>
        Motiavate
      </button>
    )
  }
})

var SmallTip = React.createClass({
  render: function(){
    return(
      <form>
        {this.props.children}
      </form>
    )
  }
})

var DutieContainer = React.createClass({
  render: function(){
    var duties = ['clean', 'code', 'destroy the world'];
    return(
      <div>
        <Greeting greeting="HeyB0ss" />
        <DutiesList duties={duties} />

        <SmallTip>
          <p>
            JUST DO IT!
          </p>
          <Motivate />
        </SmallTip>
      </div>
    )
  }
})

ReactDOM.render( routes, document.querySelector("#app"));
