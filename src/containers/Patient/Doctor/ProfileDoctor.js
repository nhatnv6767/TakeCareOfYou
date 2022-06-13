import React, {Component} from "react";
import {connect} from "react-redux";
import {FormattedMessage} from 'react-intl';
import "./ProfileDoctor.scss";
import {getProfileDoctorById} from "../../../services/userService";
import {LANGUAGES} from "../../../utils";
import NumberFormat from 'react-number-format';

// Delete Markdown in node
class ProfileDoctor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataProfile: {}
        };
    }

    async componentDidMount() {
        let data = await this.getInforDoctor(this.props.doctorId);
        this.setState({
            dataProfile: data,
        });
    }

    getInforDoctor = async (id) => {
        let result = {};
        if (id) {
            let res = await getProfileDoctorById(id);
            if (res && res.errCode === 0) {
                result = res.data;
            }
        }
        return result;
    };


    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.language !== this.props.language) {

        }
        if (prevProps.doctorId !== this.props.doctorId) {
            // this.getInforDoctor(this.props.doctorId);
        }
    }

    render() {
        let {dataProfile} = this.state;
        let {language} = this.props;
        let nameVi = '', nameEn = '';
        if (dataProfile && dataProfile.positionData) {
            nameVi = `${dataProfile.positionData.valueVi}, ${dataProfile.lastName} ${dataProfile.firstName}`;
            nameEn = `${dataProfile.positionData.valueEn}, ${dataProfile.firstName} ${dataProfile.lastName}`;
        }
        console.log("Check state at Profile Doctor", this.state);
        return (
            <div className="profile-doctor-container">
                <div className="intro-doctor">
                    <div
                        className="content-left"
                        style={{
                            backgroundImage: `url(${dataProfile && dataProfile.image ? dataProfile.image : ""})`
                        }}
                    >

                    </div>
                    <div className="content-right">
                        <div className="up">
                            {language === LANGUAGES.VI ? nameVi : nameEn}
                        </div>
                        <div className="down">
                            {
                                dataProfile &&
                                dataProfile.Markdown &&
                                dataProfile.Markdown.description &&
                                <span>
                                {dataProfile.Markdown.description}
                            </span>
                            }
                        </div>
                    </div>

                </div>
                <div className="price">
                    Giá khám:<span> </span>
                    {dataProfile && dataProfile.Doctor_Infor && dataProfile.Doctor_Infor.priceData && language === LANGUAGES.VI &&
                        <NumberFormat
                            className="currency"
                            value={dataProfile.Doctor_Infor.priceData.valueVi}
                            displayType={'text'}
                            thousandSeparator={true}
                            suffix={' VND'}
                        />
                    }
                    {dataProfile && dataProfile.Doctor_Infor && dataProfile.Doctor_Infor.priceData && language === LANGUAGES.EN &&
                        <NumberFormat
                            className="currency"
                            value={dataProfile.Doctor_Infor.priceData.valueEn}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={'$'}
                        />
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfileDoctor);
