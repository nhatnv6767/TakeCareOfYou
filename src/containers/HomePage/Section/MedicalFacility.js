import React, { Component } from "react";
import { connect } from "react-redux";

class MedicalFacility extends Component {
  render() {
    return <div></div>;
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);
