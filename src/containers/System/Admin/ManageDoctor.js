import React, {Component} from "react";
import {FormattedMessage} from "react-intl";
import {connect} from "react-redux";
import "./ManageDoctor.scss";
import * as actions from "../../../store/actions";

import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";
import Select from "react-select";
import {LANGUAGES, CRUD_ACTIONS, CommonUtils} from "../../../utils";
import {getDetailInforDoctorService} from "../../../services/userService";

// Initialize a markdown parser
const mdParser = new MarkdownIt(/* Markdown-it options */);

class ManageDoctor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            contentMarkdown: "",
            contentHTML: "",
            selectedOption: "",
            description: "",
            listDoctors: [],
            hasOldData: false,
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
        if (prevProps.language !== this.props.language) {
            let dataSelect = this.buildDataInputSelect(this.props.allDoctors);
            this.setState({
                listDoctors: dataSelect,
            });
        }
    }

    // Finish!
    handleEditorChange = ({html, text}) => {
        this.setState({
            contentHTML: html,
            contentMarkdown: text,
        });
    };

    handleSaveContentMarkdown = () => {
        let {hasOldData} = this.state;
        this.props.saveDetailDoctorStart({
            contentHTML: this.state.contentHTML,
            contentMarkdown: this.state.contentMarkdown,
            description: this.state.description,
            doctorId: this.state.selectedOption.value,
            action: hasOldData ? CRUD_ACTIONS.EDIT : CRUD_ACTIONS.CREATE
        });
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

    handleOnChangeDesc = (event) => {
        this.setState({
            description: event.target.value,
        });
    };

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

    render() {
        let {hasOldData} = this.state;
        return (
            <div className="manage-doctor-container">
                <div className="manage-doctor-title">
                    <FormattedMessage id="admin.manage-doctor.title"/>
                </div>
                <div className="more-infor">
                    <div className="content-left form-group">
                        <label><FormattedMessage id="admin.manage-doctor.choose-doctor"/></label>
                        <Select
                            value={this.state.selectedOption}
                            onChange={this.handleChangeSelect}
                            options={this.state.listDoctors}
                        />
                    </div>
                    <div className="content-right form-group">
                        <label><FormattedMessage id="admin.manage-doctor.introduce"/></label>
                        <textarea
                            className="form-control"
                            rows="4"
                            onChange={(event) => this.handleOnChangeDesc(event)}
                            value={this.state.description}
                        >
              TEXT AREA
            </textarea>
                    </div>
                </div>
                <div className="manage-doctor-editor">
                    <MdEditor
                        style={{height: "500px"}}
                        renderHTML={(text) => mdParser.render(text)}
                        onChange={this.handleEditorChange}
                        value={this.state.contentMarkdown}
                    />
                </div>
                <button
                    className={hasOldData ? "save-content-doctor" : "create-content-doctor"}
                    onClick={() => this.handleSaveContentMarkdown()}
                >
                    {hasOldData ?
                        <span>
                            <FormattedMessage id="admin.manage-doctor.save-infor"/>
                        </span> :
                        <span>
                            <FormattedMessage id="admin.manage-doctor.create-infor"/>
                        </span>}

                </button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        // state redux adminReducer
        allDoctors: state.admin.allDoctors,
        language: state.app.language,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllDoctorsStart: () => dispatch(actions.fetchAllDoctorsStart()),
        saveDetailDoctorStart: (data) =>
            dispatch(actions.saveDetailDoctorStart(data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageDoctor);
