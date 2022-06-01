import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./TableManageUser.scss";
import * as actions from "../../../store/actions";

class TableManageUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //mảng lưu trữ các giá trị của user được lấy từ redux về
      usersRedux: [],
    };
  }

  componentDidMount() {
    this.props.fetchUserRedux();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.listUsers !== this.props.listUsers) {
      this.setState({ usersRedux: this.props.listUsers });
    }
  }

  render() {
    console.log("Check all users: ", this.props.listUsers);
    console.log("Check all users 2: ", this.state.usersRedux);
    let arrUsers = this.state.usersRedux;
    return (
      <table id="tableManagerUser">
        <tbody>
          <tr>
            <th>Email</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>

          {arrUsers &&
            arrUsers.length > 0 &&
            arrUsers.map((item, index) => {
              return (
                <tr>
                  <td>{"item.email"}</td>
                  <td>{"item.firstName"}</td>
                  <td>{"item.lastName"}</td>
                  <td>{"item.address"}</td>
                  <td>
                    <button className="btn-edit">
                      <i className="fas fa-pencil-alt"></i>
                    </button>
                    <button className="btn-delete">
                      <i className="fas fa-trash"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // state redux adminReducer
    listUsers: state.admin.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserRedux: () => dispatch(actions.fetchAllUsersStart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableManageUser);
