import React, { Component } from "react";
import { connect } from "react-redux";
import { getSmurfs } from "../actions";

import "./App.css";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  state = {
    name: "",
    age: "",
    height: ""
  };

  componentDidMount() {
    this.props.getSmurfs();
  }

  handleChanges = ev => {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <form>
          <input
            name="name"
            value={this.state.name}
            placeholder="name"
            onChange={this.handleChanges}
          />
          <input
            name="age"
            value={this.state.age}
            placeholder="age"
            onChange={this.handleChanges}
          />
          <input
            name="height"
            value={this.state.height}
            placeholder="height"
            onChange={this.handleChanges}
          />
          <button>Add Smurf</button>
        </form>

        {this.props.smurfs.map(smurf => (
          <div style={{ border: "1px solid gray", width: "200px" }}>
            <p>{smurf.name}</p>
            <p>{smurf.age}</p>
            <p>{smurf.height}</p>
            <button>Delete</button>
            <button>Update</button>
          </div>
        ))}
      </div>
    );
  }
}
function mapStateToProps(state) {
  console.log(state);
  return {
    smurfs: state.smurfs,
    getSmurfs: state.getSmurfs
  };
}

export default connect(
  mapStateToProps,
  {
    getSmurfs
  }
)(App);
