import React, { Component } from "react";
import { connect } from "react-redux";

class SomeOtherComponent extends Component {
  render() {
    let otherComponent = this.props.showComponent ? (
      <div className="toggled">Toggled Component</div>
    ) : (
      <></>
    );
    return (
      <div className="component">
        <div className="static"> Static Component</div>
        {otherComponent}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    showComponent: state.example.showComponent
  };
};

export default connect(mapStateToProps)(SomeOtherComponent);
