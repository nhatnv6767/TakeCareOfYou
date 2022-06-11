import React, {Component} from "react";
import {connect} from "react-redux";
import "./DetailDoctor.scss";
import {LANGUAGES} from "../../../utils";

class DoctorSchedule extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    async componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
    }

    render() {
        return (
            <div>
                Doctor Schedule
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

export default connect(mapStateToProps, mapDispatchToProps)(DoctorSchedule);
