import React, {Component} from "react";
import {connect} from "react-redux";
import {FormattedMessage} from 'react-intl';
import "./DetailSpecialty.scss";
import HomeHeader from "../../HomePage/HomeHeader";
import DoctorSchedule from "../Doctor/DoctorSchedule";

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
                <div className="each-doctor">
                    <div className="content-left">

                    </div>

                    <div className="connect-right">

                    </div>
                </div>
                {arrDoctorId && arrDoctorId.length > 0 &&
                    arrDoctorId.map((item, index) => {
                        return (
                            <DoctorSchedule
                                doctorIdFromParent={item}
                                key={index}
                            />
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
