import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import Slider from "react-slick";

class OutStandingDoctor extends Component {
  render() {
    return (
      <div className="section-share section-outstanding-doctor">
        <div className="section-container">
          <div className="section-header">
            <span className="title-section">Bác sĩ nổi bật tuần qua</span>
            <button className="btn-section">Xem thêm</button>
          </div>
          <div className="section-body">
            <Slider {...this.props.settings}>
              <div className="specialty-customize">
                <div className="bg-image section-outstanding-doctor" />
                <div>Trần Mike Fence 1</div>
              </div>
              <div className="specialty-customize">
                <div className="bg-image section-outstanding-doctor" />
                <div>Trần Mike Fence 2</div>
              </div>
              <div className="specialty-customize">
                <div className="bg-image section-outstanding-doctor" />
                <div>Trần Mike Fence 3</div>
              </div>
              <div className="specialty-customize">
                <div className="bg-image section-outstanding-doctor" />
                <div>Trần Mike Fence 4</div>
              </div>
              <div className="specialty-customize">
                <div className="bg-image section-outstanding-doctor" />
                <div>Trần Mike Fence 5</div>
              </div>
              <div className="specialty-customize">
                <div className="bg-image section-outstanding-doctor" />
                <div>Trần Mike Fence 6</div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(OutStandingDoctor);
