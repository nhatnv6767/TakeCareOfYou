import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./TableManageUser.scss";

class TableManageUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //mảng lưu trữ các giá trị của user được lấy từ redux về
      usersRedux: [],
    };
  }

  componentDidMount() {}

  render() {
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
