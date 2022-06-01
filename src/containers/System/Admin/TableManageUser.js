import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./TableManageUser.scss";

class TableManageUser extends Component {
  constructor(props) {
    super(props);
    // khởi tạo những biến muốn dùng với thằng class này
    this.state = {};
  }

  render() {
    return (
      <table>
        <tbody>
          <tr>
            <th>Email</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>

          <tr>
            <td>{"item.email"}</td>
            <td>{"item.firstName"}</td>
            <td>{"item.lastName"}</td>
            <td>{"item.address"}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(TableManageUser);
