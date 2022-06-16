import React, {Component} from "react";
import {connect} from "react-redux";
import {FormattedMessage} from 'react-intl';
import {postVerifyBookAppointment} from "../../services/userService"

class VerifyEmail extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    async componentDidMount() {
        if (this.props.location && this.props.location.search) {
            console.log("VerifyEmail check props", this.props);
            let urlParams = new URLSearchParams(this.props.location.search);
            let token = urlParams.get('token');
            let doctorId = urlParams.get('doctorId');

        }

    }


    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.language !== this.props.language) {

        }
    }

    render() {
        return (
            <div>
                VerifyEmail
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

export default connect(mapStateToProps, mapDispatchToProps)(VerifyEmail);
