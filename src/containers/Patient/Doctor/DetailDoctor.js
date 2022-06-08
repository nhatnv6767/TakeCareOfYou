import React, { Component } from "react";
import { connect } from "react-redux";

class DetailDoctor extends Component {
  render() {
    console.log(this.props.match.params.id);
    return <div>Detail Doctor</div>;
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailDoctor);
