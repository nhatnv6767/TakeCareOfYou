import React, {Component} from "react";
import {connect} from "react-redux";
import "./DoctorSchedule.scss";
import moment from "moment";

class DoctorSchedule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allDays: [],
        };
    }

    async componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
    }

    render() {
        return (
            <div className="doctor-schedule-container">
                <div className="all-schedules">
                    <select>
                        <option value="">Thứ 2</option>
                        <option value="">Thứ 3</option>
                        <option value="">Thứ 4</option>
                        <option value="">Thứ 5</option>
                    </select>
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
