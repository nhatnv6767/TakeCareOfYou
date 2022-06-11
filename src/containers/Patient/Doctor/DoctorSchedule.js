import React, {Component} from "react";
import {connect} from "react-redux";
import "./DoctorSchedule.scss";
import moment from "moment";
import localization from "moment/locale/vi";
import {LANGUAGES} from "../../../utils";
import {getScheduleDoctorByDate} from "../../../services/userService";

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

        this.setArrDays(language);

    }

    setArrDays = async (language) => {
        let allDays = [];
        for (let i = 0; i < 7; i++) {
            let object = {};
            if (language === LANGUAGES.VI) {
                object.label = moment(new Date()).add(i, 'days').format('dddd - DD/MM');
            } else {
                object.label = moment(new Date()).add(i, 'days').locale('en').format('ddd - DD/MM');
            }

            object.value = moment(new Date()).add(i, 'days').startOf('day').valueOf();

            allDays.push(object);
        }


        this.setState({
            allDays: allDays,
        });
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.language !== this.props.language) {
            this.setArrDays(this.props.language);
        }
    }

    handleOnChangeSelect = async (event) => {
        if (
            this.props.match &&
            this.props.match.params &&
            this.props.match.params.id
        ) {
            let doctorId = this.props.match.params.id;
            let res = await getScheduleDoctorByDate(32, 1655132400000);
            console.log("Check res getScheduleDoctorByDate", res);
        }
        console.log("Everytime choose", event.target.value);
    };

    render() {
        let {allDays} = this.state;
        return (
            <div className="doctor-schedule-container">
                <div className="all-schedules">
                    <select
                        onChange={(event) => this.handleOnChangeSelect(event)}
                    >
                        {allDays && allDays.length > 0 &&
                            allDays.map((item, index) => {
                                return (
                                    <option
                                        value={item.value}
                                        key={index}
                                    >
                                        {item.label}
                                    </option>
                                );
                            })
                        }

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
