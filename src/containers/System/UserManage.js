import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
class UserManage extends Component {

    constructor(props) {
        super(props);
        // khởi tạo những biến muốn dùng với thằng class này
        this.state = {

        }
    }

    componentDidMount() {

    }

    /** Life cycle
     *  Run component
     * 1. Run constructor -> init state
     * 2. Didmount
     * 3. Render
     */

    render() {
        return (
            <div className="text-center">Manage users in system</div>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
