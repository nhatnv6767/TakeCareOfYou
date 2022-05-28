import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";

class About extends Component {
  render() {
    return (
      <div className="section-share section-about">
        <div className="section-about-header">
          Truyền thông nói về chúng tôi
        </div>
        <div className="section-about-content">
          <div className="content-left">
            <iframe
              width="60%"
              height="400px"
              src="https://www.youtube.com/embed/Y2LrrsEivEc"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="content-right">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              ea illum eligendi deleniti. Numquam incidunt deleniti, nisi, enim
              corporis hic expedita unde nesciunt excepturi repudiandae cum
              impedit pariatur consequatur recusandae.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
