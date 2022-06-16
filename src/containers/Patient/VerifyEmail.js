import React, {Component} from "react";
import {connect} from "react-redux";
import {FormattedMessage} from 'react-intl';

class VerifyEmail extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    async componentDidMount() {
        console.log("VerifyEmail check props", this.props);
        const urlParams = new URLSearchParams(this.props.location.search);
        const token = urlParams.get('token');
        const doctorId = urlParams.get('doctorId');
        console.log(token, doctorId);
        if (
            this.props.match &&
            this.props.match.params
        ) {

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
