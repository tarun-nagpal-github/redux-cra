import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { toggleComponent } from "./reduxUtils/actions";
import SomeOtherComponent from "./SomeOtherComponent";

class App extends Component {
  state = {
    isButtonClicked: false
  };
  render() {
    return (
      <div className="App">
        <div
          className={
            this.state.isButtonClicked ? "click-btn clicked" : "click-btn"
          }
          onClick={() => {
            this.setState({
              isButtonClicked: !this.state.isButtonClicked
            });
            this.props.toggleComponent();
          }}
        >
          Click me
        </div>
        <SomeOtherComponent />
      </div>
    );
  }
}
const mapDispatchToProps = {
  toggleComponent: toggleComponent
};
export default connect(
  null,
  mapDispatchToProps
)(App);
