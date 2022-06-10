import React, {Component} from "react";
import {connect} from "react-redux";
import './ManageSchedule.scss';
import {FormattedMessage} from 'react-intl';

class ManageSchedule extends Component {
    render() {
        return (
            <div className="manage-schedule-container">
                <div className="m-s-title">
                    <FormattedMessage id=""/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.user.isLoggedIn,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageSchedule);
