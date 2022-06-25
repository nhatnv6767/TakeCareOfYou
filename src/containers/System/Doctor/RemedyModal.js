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
                        Gửi hoá đơn khám bệnh
                    </h5>
                    <button
                        type="button"
                        className="close"
                        aria-label="Close"
                        onClick={closeRemedyModal}
                    >
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <ModalBody>
                    <div className="row">
                        <div className="col-6 form-group">
                            <label>Email bệnh nhân</label>
                            <input
                                type="email"
                                value={dataModal.email}
                                className="form-control"
                            />
                        </div>
                        <div className="col-6 form-group">
                            <label>Chọn file đơn thuốc</label>
                            <input
                                type="file"
                                className="form-control-file"
                            />
                        </div>

                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={closeRemedyModal}>Send</Button>{' '}
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
