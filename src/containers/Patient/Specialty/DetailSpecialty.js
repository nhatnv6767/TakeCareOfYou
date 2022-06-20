import React, {Component} from "react";
import {connect} from "react-redux";
import {FormattedMessage} from 'react-intl';
import "./DetailSpecialty.scss";
import HomeHeader from "../../HomePage/HomeHeader";
import DoctorSchedule from "../Doctor/DoctorSchedule";
import DoctorExtraInfor from "../Doctor/DoctorExtraInfor";
import ProfileDoctor from "../Doctor/ProfileDoctor";
import {getDetailInforDoctorService} from "../../../services/userService";

class DetailSpecialty extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrDoctorId: [32, 39, 37]
        };
    }

    async componentDidMount() {
        // if (
        //     this.props.match &&
        //     this.props.match.params &&
        //     this.props.match.params.id
        // ) {
        //     let id = this.props.match.params.id;
        //     this.setState({
        //         currentDoctorId: id,
        //     });
        //     let res = await getDetailInforDoctorService(id);
        //     if (res && res.errCode === 0) {
        //         this.setState({
        //             detailDoctor: res.data,
        //         });
        //     }
        // }
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
                <div className="detail-specialty-body">
                    <div className="description-specialty">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem earum molestiae ut vel! Atque
                        culpa
                        dolore eligendi explicabo fugit omnis quisquam sit totam? Earum eius explicabo, laudantium odit
                        reprehenderit voluptas?
                    </div>

                    {arrDoctorId && arrDoctorId.length > 0 &&
                        arrDoctorId.map((item, index) => {
                            return (
                                <div className="each-doctor" key={index}>
                                    <div className="dt-content-left">
                                        <div className="profile-doctor">
                                            <ProfileDoctor
                                                doctorId={item}
                                                isShowDescriptionDoctor={true}
                                                // dataTime={dataTime}
                                            />
                                        </div>
                                    </div>

                                    <div className="dt-content-right">
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
