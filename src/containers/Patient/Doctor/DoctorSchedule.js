import React, {Component} from "react";
import {connect} from "react-redux";
import "./DoctorSchedule.scss";
import Select from "react-select";

class DoctorSchedule extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    async componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
    }

    render() {
        let options = [
            {label: 'Thứ 2', value: '2'},
            {label: 'Thứ 3', value: '3'},
            {label: 'Thứ 4', value: '4'},
            {label: 'Thứ 5', value: '5'},
        ];
        return (
            <div className="doctor-schedule-container">
                <div className="all-schedules">
                    <Select
                        options={options}
                    />
                </div>
                <div className="all-available-times">

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

export default connect(mapStateToProps, mapDispatchToProps)(DoctorSchedule);
