import React, {Component} from "react";
import {connect} from "react-redux";
import "./DoctorExtraInfor.scss";
import {LANGUAGES} from "../../../utils";
import {getScheduleDoctorByDate} from "../../../services/userService";
import {FormattedMessage} from 'react-intl';

class DoctorExtraInfor extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    async componentDidMount() {
    }


    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.language !== this.props.language) {

        }
    }

    render() {
        return (
            <div className="doctor-extra-infor-container">
                Doctor Extra Information
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

export default connect(mapStateToProps, mapDispatchToProps)(DoctorExtraInfor);
