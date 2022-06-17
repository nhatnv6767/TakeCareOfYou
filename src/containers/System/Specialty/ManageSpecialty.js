import React, {Component} from "react";
import {connect} from "react-redux";
import {FormattedMessage} from 'react-intl';
import "./ManageSpecialty.scss";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";

// Initialize a markdown parser
const mdParser = new MarkdownIt(/* Markdown-it options */);

class ManageSpecialty extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    async componentDidMount() {
    }


    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.language !== this.props.language) {

        }
    }

    render() {
        return (
            <div className="manage-specialty-container">
                <div className="ms-title">
                    Quản lý chuyên khoa
                </div>
                <div className="btn-add-new-specialty">
                    <button>Add new</button>
                </div>

                <div className="all-specialty">

                </div>

                <MdEditor
                    style={{height: "500px"}}
                    renderHTML={(text) => mdParser.render(text)}
                    // onChange={this.handleEditorChange}
                    // value={this.state.contentMarkdown}
                />
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

export default connect(mapStateToProps, mapDispatchToProps)(ManageSpecialty);
