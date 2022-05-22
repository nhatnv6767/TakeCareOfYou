import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
class ModalUser extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
    }

    toggle = () => {
        this.props.toggleFromParent();
    }


    render() {
        console.log('Check child props', this.props)
        console.log('Check child open modal', this.props.isOpen)
        return (
            <Modal
                isOpen={this.props.isOpen}
                toggle={() => { this.toggle() }}
                className="modal-user-container"
                size="lg"
            // centered
            >
                <ModalHeader toggle={() => { this.toggle() }}>Create a new user</ModalHeader>
                <ModalBody>

                    <div className="input-container">
                        <label>Email</label>
                        <input type="text" />
                    </div>
                    <div className="input-container">
                        <label>Password</label>
                        <input type="password" />
                    </div>

                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => { this.toggle() }}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={() => { this.toggle() }}>Calcel</Button>
                </ModalFooter>
            </Modal>
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);



