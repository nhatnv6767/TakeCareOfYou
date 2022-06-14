import React, {Component} from "react";
import {connect} from "react-redux";
import {FormattedMessage} from 'react-intl';
import "./BookingModal.scss";
import {Modal} from "reactstrap";
import ProfileDoctor from "../ProfileDoctor";
import _ from "lodash";
import DatePicker from "../../../../components/Input/DatePicker";
import * as actions from "../../../../store/actions";
import {fetchGenderStart} from "../../../../store/actions";
import {LANGUAGES} from "../../../../utils";
import Select from "react-select";

class BookingModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: "",
            phoneNumber: "",
            email: "",
            address: "",
            reason: "",
            birthday: "",
            selectedGender: "",
            genders: "",
            doctorId: "",
        };
    }

    async componentDidMount() {
        this.props.getGenderStart();
    }

    buildDataGender = (data) => {
        let result = [];
        let language = this.props.language;

        if (data && data.length > 0) {
            data.map((item) => {
                let object = {};
                object.label = language === LANGUAGES.VI ? item.valueVi : item.valueEn;
                object.value = item.keyMap;
                result.push(object);
            });
        }
        return result;
    };

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.language !== this.props.language) {
            this.setState({
                genders: this.buildDataGender(this.props.genders)
            });
        }

        if (prevProps.genders !== this.props.genders) {
            this.setState({
                genders: this.buildDataGender(this.props.genders)
            });
        }
    }

    handleOnChangeInput = (event, id) => {
        let valueInput = event.target.value;
        let stateCopy = {...this.state};
        // key:value
        stateCopy[id] = valueInput;
        this.setState({
            ...stateCopy
        });
    };

    handleOnChangeDatePicker = (date) => {
        this.setState({
            birthday: date[0]
        });
    };

    render() {
        let {isOpenModal, closeBookingModal, dataTime} = this.props;
        let doctorId = dataTime && !_.isEmpty(dataTime) ? dataTime.doctorId : "";

        console.log("Check state: ", this.state);
        return (
            <Modal
                isOpen={isOpenModal}
                className={'booking-modal-container'}
                size="lg"
                centered
                // backdrop={true}
            >
                <div className="booking-modal-content">
                    <div className="booking-modal-header">
                        <span className="left">
                            Thông tin đặt lịch khám bệnh
                        </span>
                        <span
                            className="right"
                            onClick={closeBookingModal}
                        >
                            <i className="fas fa-times"></i>
                        </span>
                    </div>

                    <div className="booking-modal-body">

                        {/*{JSON.stringify(dataTime)}*/}
                        <div className="doctor-infor">
                            <ProfileDoctor
                                doctorId={doctorId}
                                isShowDescriptionDoctor={false}
                                dataTime={dataTime}
                            />
                        </div>

                        <div className="row">
                            <div className="col-6 form-group">
                                <label>Họ tên</label>
                                <input
                                    className="form-control"
                                    value={this.state.fullName}
                                    onChange={(event) => this.handleOnChangeInput(event, 'fullName')}
                                />
                            </div>
                            <div className="col-6 form-group">
                                <label>Số điện thoại</label>
                                <input
                                    className="form-control"
                                    value={this.state.phoneNumber}
                                    onChange={(event) => this.handleOnChangeInput(event, 'phoneNumber')}
                                />
                            </div>
                            <div className="col-6 form-group">
                                <label>Địa chỉ Email</label>
                                <input
                                    className="form-control"
                                    value={this.state.email}
                                    onChange={(event) => this.handleOnChangeInput(event, 'email')}
                                />
                            </div>
                            <div className="col-6 form-group">
                                <label>Địa chỉ liên hệ</label>
                                <input
                                    className="form-control"
                                    value={this.state.address}
                                    onChange={(event) => this.handleOnChangeInput(event, 'address')}
                                />
                            </div>

                            <div className="col-12 form-group">
                                <label>Lý do khám</label>
                                <input
                                    className="form-control"
                                    value={this.state.reason}
                                    onChange={(event) => this.handleOnChangeInput(event, 'reason')}
                                />
                            </div>

                            <div className="col-6 form-group">
                                <label>Ngày sinh</label>
                                <DatePicker
                                    onChange={this.handleOnChangeDatePicker}
                                    className="form-control"
                                    value={this.state.birthday}
                                    // get current date
                                    // minDate={yesterday}
                                />
                            </div>
                            <div className="col-6 form-group">
                                <label>Giới tính</label>
                                <Select
                                    value={this.state.selectedGender}
                                    options={this.state.genders}
                                    onChange={this.handleChangeSelect}
                                />
                            </div>

                        </div>

                    </div>

                    <div className="booking-modal-footer">
                        <button
                            className="btn-booking-confirm"
                            onClick={closeBookingModal}
                        >
                            Xác nhận
                        </button>
                        <button
                            className="btn-booking-cancel"
                            onClick={closeBookingModal}
                        >
                            Huỷ bỏ
                        </button>
                    </div>
                </div>

            </Modal>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        language: state.app.language,
        genders: state.admin.genders,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getGenderStart: () => dispatch(actions.fetchGenderStart()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingModal);
