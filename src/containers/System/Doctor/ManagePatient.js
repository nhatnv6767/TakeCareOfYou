import React, {Component} from "react";
import {connect} from "react-redux";
import {FormattedMessage} from 'react-intl';
import "./ManagePatient.scss";
import DatePicker from "../../../components/Input/DatePicker";
import {getAllPatientForDoctor} from "../../../services/userService";
import moment from "moment";

class ManagePatient extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDate: moment(new Date()).startOf("day").valueOf(),
        };
    }

    async componentDidMount() {
        // lấy thông qua redux
        let {user} = this.props;
        let {currentDate} = this.state;

        console.log("Check state: ", this.state);
        let formatedDate = new Date(currentDate).getTime();
        let res = await getAllPatientForDoctor({
            doctorId: user.id,
            date: formatedDate
        });

        console.log("ManagePatient check response", res);
    }


    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.language !== this.props.language) {

        }
    }

    handleOnChangeDatePicker = (date) => {
        this.setState({
            birthday: date[0]
        });
    };

    render() {
        console.log("ManagePatient check user: ", this.props);
        return (
            <div className="manage-patient-container">
                <div className="m-p-title">
                    Quản lý bệnh nhân khám bệnh
                </div>
                <div className="manage-patient-body row">
                    <div className="col-4 form-group">
                        <label>Chọn ngày khám</label>
                        <DatePicker
                            onChange={this.handleOnChangeDatePicker}
                            className="form-control"
                            value={this.state.currentDate}

                        />
                    </div>
                    <div className="col-12 table-manage-patient">
                        <table style={{width: "100%"}}>
                            <tbody>
                            <tr>
                                <th>Name</th>
                                <th colSpan="2">Telephone</th>

                            </tr>
                            <tr>
                                <td>Alfreds Futterkiste</td>
                                <td>Maria Anders</td>
                                <td>Germany</td>
                            </tr>
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        language: state.app.language,
        // user of userreducer
        user: state.user.userInfo,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ManagePatient);
