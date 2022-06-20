import React, {Component} from "react";
import {connect} from "react-redux";
import {FormattedMessage} from 'react-intl';
import "./DetailSpecialty.scss";
import HomeHeader from "../../HomePage/HomeHeader";
import DoctorSchedule from "../Doctor/DoctorSchedule";
import DoctorExtraInfor from "../Doctor/DoctorExtraInfor";

class DetailSpecialty extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrDoctorId: [32, 39, 37]
        };
    }

    async componentDidMount() {
    }


    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.language !== this.props.language) {

        }
    }

    render() {
        let {arrDoctorId} = this.state;
        return (
            <div className="detail-specialty-container">
                <HomeHeader isShowBanner={false}/>
                <div className="description-specialty">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem earum molestiae ut vel! Atque culpa
                    dolore eligendi explicabo fugit omnis quisquam sit totam? Earum eius explicabo, laudantium odit
                    reprehenderit voluptas?
                </div>

                {arrDoctorId && arrDoctorId.length > 0 &&
                    arrDoctorId.map((item, index) => {
                        return (
                            <div className="each-doctor" key={index}>
                                <div className="content-left">

                                </div>

                                <div className="connect-right">
                                    <div className="doctor-schedule">
                                        <DoctorSchedule
                                            doctorIdFromParent={item}
                                        />
                                    </div>

                                    <div className="doctor-extra-infor">
                                        <DoctorExtraInfor
                                            doctorIdFromParent={item}
                                        />
                                    </div>
                                </div>
                            </div>

                        );
                    })
                }

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        language: state.app.language,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailSpecialty);
