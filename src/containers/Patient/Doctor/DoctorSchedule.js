import React, {Component} from "react";
import {connect} from "react-redux";
import "./DoctorSchedule.scss";
import moment from "moment";
import localization from "moment/locale/vi";

import {LANGUAGES} from "../../../utils";

class DoctorSchedule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allDays: [],
        };
    }

    async componentDidMount() {
        let {language} = this.props;

        console.log("moment VI", moment(new Date()).format('dddd - DD/MM'));
        console.log("moment EN", moment(new Date()).locale('en').format('ddd - DD/MM'));

        let arrDate = [];
        for (let i = 0; i < 7; i++) {
            let object = {};
            object.label = moment(new Date()).add(i, 'days').format('dddd - DD/MM');
            object.value = moment(new Date()).add(i, 'days').startOf('day').valueOf();

            arrDate.push(object);
        }
        console.log(arrDate);
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
