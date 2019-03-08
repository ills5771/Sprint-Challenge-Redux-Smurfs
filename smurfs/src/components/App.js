import React, { Component } from "react";
import { connect } from "react-redux";
import { getSmurfs, addSmurf, deleteSmurf } from "../actions";

import "./App.css";

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
  addSmurf = ev => {
    const newSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    };
    ev.preventDefault();
    this.props.addSmurf(newSmurf);
    this.setState({
      name: "",
      age: "",
      height: ""
    });
  };
  deleteSmurf = (ev, id) => {
    ev.preventDefault();
    this.props.deleteSmurf(id);
  };

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <form onSubmit={this.addSmurf}>
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
            <button onClick={ev => this.deleteSmurf(ev, smurf.id)}>
              Delete
            </button>
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
    getSmurfs,
    addSmurf,
    deleteSmurf
  }
)(App);
