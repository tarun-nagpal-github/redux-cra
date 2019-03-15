import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { exampleAction } from "./reduxUtils/actions";
import SomeOtherComponent from "./SomeOtherComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div
          className="btn"
          onClick={() => this.props.exampleAction("example payload")}
        >
          click me
        </div>
        <SomeOtherComponent />
      </div>
    );
  }
}
const mapDispatchToProps = {
  exampleAction: exampleAction
};
export default connect(
  null,
  mapDispatchToProps
)(App);
