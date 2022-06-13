import React, {Component} from "react";
import {connect} from "react-redux";
import {FormattedMessage} from 'react-intl';
import "./BookingModal.scss";
import {Modal} from "reactstrap";


class BookingModal extends Component {
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
            <Modal isOpen={true} toggle={} className={'booking-modal-container'}>
                Hello world inside modal
            </Modal>
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

export default connect(mapStateToProps, mapDispatchToProps)(BookingModal);
