import React, {Component} from "react";
import {connect} from "react-redux";
import {FormattedMessage} from 'react-intl';
import {postVerifyBookAppointment} from "../../services/userService";
import HomeHeader from "../HomePage/HomeHeader";

class VerifyEmail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            statusVerify: false,
        };
    }

    async componentDidMount() {
        if (this.props.location && this.props.location.search) {
            console.log("VerifyEmail check props", this.props);
            let urlParams = new URLSearchParams(this.props.location.search);
            let token = urlParams.get('token');
            let doctorId = urlParams.get('doctorId');
            let res = await postVerifyBookAppointment({
                token: token,
                doctorId: doctorId
            });

            if (res && res.errCode === 0) {
                this.setState({
                    statusVerify: true,
                });
            }
        }

    }


    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.language !== this.props.language) {

        }
    }

    render() {
        return (
            <>
                <HomeHeader/>
                <div>
                    VerifyEmail
                </div>
            </>
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

export default connect(mapStateToProps, mapDispatchToProps)(VerifyEmail);
