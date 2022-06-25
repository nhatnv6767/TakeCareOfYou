import React, {Component} from "react";
import {connect} from "react-redux";
import {FormattedMessage} from 'react-intl';
import "./ManagePatient.scss";
import DatePicker from "../../../components/Input/DatePicker";
import {getAllPatientForDoctor, postSendRemedy} from "../../../services/userService";
import moment from "moment";
import {LANGUAGES} from "../../../utils";
import RemedyModal from "./RemedyModal";


class ManagePatient extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDate: moment(new Date()).startOf("day").valueOf(),
            dataPatient: [],
            isOpenRemedyModal: false,
            dataModal: {}
        };

    }

    async componentDidMount() {
        // lấy thông qua redux
        let {user} = this.props;
        let {currentDate} = this.state;
        let formatedDate = new Date(currentDate).getTime();
        this.getDataPatient(user, formatedDate);

    }

    getDataPatient = async (user, formatedDate) => {
        let res = await getAllPatientForDoctor({
            doctorId: user.id,
            date: formatedDate
        });

        if (res && res.errCode === 0) {
            this.setState({
                dataPatient: res.data ? res.data : []
            });
        }
    };

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.language !== this.props.language) {

        }
    }

    handleOnChangeDatePicker = (date) => {
        this.setState({
            currentDate: date[0]
        }, () => {
            let {user} = this.props;
            let {currentDate} = this.state;
            let formatedDate = new Date(currentDate).getTime();
            this.getDataPatient(user, formatedDate);
        });
    };

    handleBtnConfirm = (item) => {
        let data = {
            doctorId: item.doctorId,
            patientId: item.patientId,
            email: item.patientData.email,
            name: item.patientData.firstName,
        };

        this.setState({
            isOpenRemedyModal: true,
            dataModal: data
        });

        console.log("Check data", data);
    };

    closeRemedyModal = () => {
        this.setState({
            isOpenRemedyModal: false,
            dataModal: {}
        });
    };

    sendRemedyModal = (dataFromModal) => {
        console.log("Parent check modal: NODE API ", dataFromModal);
    };

    render() {
        // console.log("ManagePatient check user: ", this.state);
        let {dataPatient, isOpenRemedyModal, dataModal} = this.state;
        let {language} = this.props;
        return (
            <>
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
                                    <th>STT</th>
                                    <th>Thời gian</th>
                                    <th>Họ và tên</th>
                                    <th>Địa chỉ</th>
                                    <th>Giới tính</th>
                                    <th>Actions</th>

                                </tr>
                                {dataPatient && dataPatient.length > 0 ?
                                    dataPatient.map((item, index) => {
                                        let time = language === LANGUAGES.VI ?
                                            item.timeTypeDataPatient.valueVi : item.timeTypeDataPatient.valueEn;

                                        let gender = language === LANGUAGES.VI ?
                                            item.patientData.genderData.valueVi : item.patientData.genderData.valueEn;
                                        return (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{time}</td>
                                                <td>{item.patientData.firstName}</td>
                                                <td>{item.patientData.address}</td>
                                                <td>{gender}</td>
                                                <td>
                                                    <button
                                                        className="mp-btn-confirm"
                                                        onClick={() => this.handleBtnConfirm(item)}
                                                    >
                                                        Xác nhận
                                                    </button>
                                                </td>
                                            </tr>
                                        );
                                    })
                                    :
                                    <tr>
                                        no Data
                                    </tr>
                                }

                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>
                <RemedyModal
                    isOpenModal={isOpenRemedyModal}
                    dataModal={dataModal}
                    closeRemedyModal={this.closeRemedyModal}
                    sendRemedyModal={this.sendRemedyModal}
                />
            </>
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
