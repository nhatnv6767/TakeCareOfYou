import React, {Component} from "react";
import {connect} from "react-redux";
import {FormattedMessage} from 'react-intl';
import "./RemedyModal.scss";
import {Modal} from "reactstrap";
import _ from "lodash";
import {LANGUAGES} from "../../../../utils";
import {toast} from "react-toastify";
import moment from "moment";

class RemedyModal extends Component {
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
        let {isOpenModal, closeBookingModal, dataTime} = this.props;
        return (
            <Modal
                isOpen={true}
                className={'booking-modal-container'}
                size="lg"
                centered
                // backdrop={true}
            >
                <div>RemedyModal</div>
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
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(RemedyModal);
