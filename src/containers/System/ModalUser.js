import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
class ModalUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: '',
        }
    }

    componentDidMount() {
    }

    toggle = () => {
        this.props.toggleFromParent();
    }

    handleOnChangeInput = (event, id) => {
        //bad code. modify state
        // should not modify directly state
        /**
         * this.state = {
         *  email: '',
         *  password: '',
         * 
         * }
         * this.state.email == this.state['email']
         */
        // this.state[id] = event.target.value;
        // this.setState({
        //     ...this.state
        // }, () => {
        //     console.log('Check bad state', this.state);
        // })

        // good code

        console.log(event.target.value, id)
    }

    render() {
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
                    <div className="modal-user-body">
                        <div className="input-container">
                            <label>Email</label>
                            <input type="text" onChange={(event) => { this.handleOnChangeInput(event, 'email') }} />
                        </div>
                        <div className="input-container">
                            <label>Password</label>
                            <input type="password" onChange={(event) => { this.handleOnChangeInput(event, 'password') }} />
                        </div>

                        <div className="input-container">
                            <label>First name</label>
                            <input type="text" onChange={(event) => { this.handleOnChangeInput(event, 'firstName') }} />
                        </div>
                        <div className="input-container">
                            <label>Last name</label>
                            <input type="text" onChange={(event) => { this.handleOnChangeInput(event, 'lastName') }} />
                        </div>

                        <div className="input-container max-width-input">
                            <label>Address</label>
                            <input type="text" onChange={(event) => { this.handleOnChangeInput(event, 'address') }} />
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" className="px-3" onClick={() => { this.toggle() }}>Add new</Button>{' '}
                    <Button color="secondary" className="px-3" onClick={() => { this.toggle() }}>Close</Button>
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



