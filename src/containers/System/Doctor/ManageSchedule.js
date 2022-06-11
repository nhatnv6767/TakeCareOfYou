import React, {Component} from "react";
import {connect} from "react-redux";
import './ManageSchedule.scss';
import {FormattedMessage} from 'react-intl';
import Select from "react-select";
import * as actions from "../../../store/actions";
import {LANGUAGES, CRUD_ACTIONS} from "../../../utils";
import {getDetailInforDoctorService} from "../../../services/userService";

class ManageSchedule extends Component {
    constructor(props) {
        // kế thừa các props từ cha truyền xuống
        super(props);
        this.state = {
            listDoctors: []
        };
    }

    componentDidMount() {
        this.props.fetchAllDoctorsStart();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.allDoctors !== this.props.allDoctors) {
            let dataSelect = this.buildDataInputSelect(this.props.allDoctors);
            this.setState({
                listDoctors: dataSelect,
            });
        }
        // if (prevProps.language !== this.props.language) {
        //     let dataSelect = this.buildDataInputSelect(this.props.allDoctors);
        //     this.setState({
        //         listDoctors: dataSelect,
        //     });
        // }
    }

    buildDataInputSelect = (inputData) => {
        let result = [];
        let {language} = this.props;
        if (inputData && inputData.length > 0) {
            inputData.map((item, index) => {
                let object = {};
                let labelVi = `${item.lastName} ${item.firstName}`;
                let labelEn = `${item.firstName} ${item.lastName}`;
                object.label = language === LANGUAGES.VI ? labelVi : labelEn;
                object.value = item.id;
                result.push(object);
            });
        }

        return result;
    };

    handleChangeSelect = async (selectedOption) => {
        this.setState({selectedOption}, () =>
            console.log(`Option selected:`, this.state.selectedOption)
        );

        let res = await getDetailInforDoctorService(selectedOption.value);
        if (res && res.errCode === 0 && res.data && res.data.Markdown) {
            let mardown = res.data.Markdown;
            this.setState({
                contentHTML: mardown.contentHTML,
                contentMarkdown: mardown.contentMarkdown,
                description: mardown.description,
                hasOldData: true,
            });
        } else {
            this.setState({
                contentHTML: "",
                contentMarkdown: "",
                description: "",
                hasOldData: false,
            });
        }
        console.log(`getDetailInforDoctorService:`, res);
    };

    render() {
        return (
            <div className="manage-schedule-container">
                <div className="m-s-title">
                    <FormattedMessage id="manage-schedule.title"/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6 form-group">
                            <label>Chọn bác sĩ</label>
                            <Select
                                value={this.state.selectedDoctor}
                                onChange={this.handleChangeSelect}
                                options={this.state.listDoctors}
                            />
                        </div>
                        <div className="col-6 form-group">
                            <label>Chọn ngày</label>
                            <input className="form-control"/>
                        </div>
                        <div className="col-12 pick-hour-container">

                        </div>
                        <button className="btn btn-primary">Lưu thông tin</button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        // state redux adminReducer
        allDoctors: state.admin.allDoctors,
        language: state.app.language,

        isLoggedIn: state.user.isLoggedIn,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllDoctorsStart: () => dispatch(actions.fetchAllDoctorsStart()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageSchedule);
