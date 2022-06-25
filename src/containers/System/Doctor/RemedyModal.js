import React, {Component} from "react";
import {connect} from "react-redux";
import {FormattedMessage} from 'react-intl';
import "./RemedyModal.scss";
import {Modal, ModalHeader, ModalBody, ModalFooter, Button} from "reactstrap";
import _ from "lodash";
import {LANGUAGES} from "../../../utils";
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
        let {isOpenModal, closeRemedyModal, dataModal} = this.props;
        return (
            <Modal
                isOpen={isOpenModal}
                className={'booking-modal-container'}
                size="lg"
                centered
                // backdrop={true}
            >
                <div className="modal-header">
                    <h5 className="modal-title">
                        Modal title
                    </h5>
                    <button type="button" className="close" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={closeRemedyModal}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={closeRemedyModal}>Cancel</Button>
                </ModalFooter>
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
