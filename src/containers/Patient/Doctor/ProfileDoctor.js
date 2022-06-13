import React, {Component} from "react";
import {connect} from "react-redux";
import {FormattedMessage} from 'react-intl';
import "./ProfileDoctor.scss";
import {getProfileDoctorById} from "../../../services/userService";
import {LANGUAGES} from "../../../utils";


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
        console.log("Check state at Profile Doctor", this.state);
        return (
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
                        {/*{language === LANGUAGES.VI ? nameVi : nameEn}*/}
                    </div>
                    {/*<div className="down">*/}
                    {/*    {detailDoctor && detailDoctor.Markdown && detailDoctor.Markdown.description &&*/}
                    {/*        <span>*/}
                    {/*                    {detailDoctor.Markdown.description}*/}
                    {/*                </span>*/}
                    {/*    }*/}
                    {/*</div>*/}
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
