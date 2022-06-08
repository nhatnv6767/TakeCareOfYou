import React, { Component } from "react";
import { connect } from "react-redux";
import HomeHeader from "../../HomePage/HomeHeader";
import "./DetailDoctor.scss";

class DetailDoctor extends Component {
  constructor(props) {
    super(props);
    this.setState({});
  }

  componentDidMount() {
    if (
      this.props.match &&
      this.props.match.params &&
      this.props.match.params.id
    ) {
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {}
  render() {
    console.log(this.props.match.params.id);
    return (
      <>
        <HomeHeader isShowBanner={false} />
        <div className="doctor-detail-container">
          <div className="intro-doctor">
            <div className="content-left"></div>
            <div className="content-right">
              <div className="up">Phó giáo sư Lê Văn A</div>
              <div className="down">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti, harum. Id, temporibus esse eaque non odio nam
                doloribus praesentium enim alias velit ex debitis tempore
                nostrum nobis nisi illo maiores?
              </div>
            </div>
          </div>
          <div className="schedule-doctor"></div>
          <div className="detail-infor-doctor">// do here</div>
          <div className="comment-doctor"></div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailDoctor);
