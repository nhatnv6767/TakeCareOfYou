import React, {Component} from "react";
import {connect} from "react-redux";
import {FormattedMessage} from "react-intl";
import Slider from "react-slick";
import {getAllClinic} from "../../../services/userService";

class MedicalFacility extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataClinics: [],
        };
    }

    async componentDidMount() {
        let res = await getAllClinic();
        console.log("Check res MedicalFacility", res);
    }

    render() {
        return (
            <div className="section-share section-medical-facility">
                <div className="section-container">
                    <div className="section-header">
                        <span className="title-section">Cơ sở y tế nổi bật</span>
                        <button className="btn-section">Xem thêm</button>
                    </div>
                    <div className="section-body">
                        <Slider {...this.props.settings}>
                            <div className="section-customize">
                                <div className="bg-image section-medical-facility"/>
                                <div>Hệ thống Y tế Thu Cúc 1</div>
                            </div>
                            <div className="section-customize">
                                <div className="bg-image section-medical-facility"/>
                                <div>Hệ thống Y tế Thu Cúc 2</div>
                            </div>
                            <div className="section-customize">
                                <div className="bg-image section-medical-facility"/>
                                <div>Hệ thống Y tế Thu Cúc 3</div>
                            </div>
                            <div className="section-customize">
                                <div className="bg-image section-medical-facility"/>
                                <div>Hệ thống Y tế Thu Cúc 4</div>
                            </div>
                            <div className="section-customize">
                                <div className="bg-image section-medical-facility"/>
                                <div>Hệ thống Y tế Thu Cúc 5</div>
                            </div>
                            <div className="section-customize">
                                <div className="bg-image section-medical-facility"/>
                                <div>Hệ thống Y tế Thu Cúc 6</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);
