import React, { Component } from "react";
import { connect } from "react-redux";

class SomeOtherComponent extends Component {
  render() {
    return (
      <div className="App">
        <div className="btn">SomeOtherComponent</div>
        <div className="btn">{this.props.exampleProperty}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    exampleProperty: state.example.exampleProperty
  };
};

export default connect(mapStateToProps)(SomeOtherComponent);
