import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { getAllCodeService } from "../../../services/userService";
class UserRedux extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genderArr: [],
    };
  }

  async componentDidMount() {
    try {
      let res = await getAllCodeService("gender");
      if (res && res.errCode === 0) {
        this.setState({ genderArr: res.data });
      }
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    console.log("Check state", this.state);
    return (
      <div className="user-redux-container">
        <div className="title text-center">User Redux</div>
        <div className="user-redux-body">
          <div className="container">
            <div className="row">
              <div className="col-12 my-3">
                <FormattedMessage id="manage-user.add" />
              </div>

              <div className="col-3">
                <label>
                  <FormattedMessage id="manage-user.email" />{" "}
                </label>
                <input className="form-control" type="email" />
              </div>
              <div className="col-3">
                <label>
                  <FormattedMessage id="manage-user.password" />{" "}
                </label>
                <input className="form-control" type="password" />
              </div>
              <div className="col-3">
                <label>
                  <FormattedMessage id="manage-user.first-name" />{" "}
                </label>
                <input className="form-control" type="text" />
              </div>
              <div className="col-3">
                <label>
                  <FormattedMessage id="manage-user.last-name" />{" "}
                </label>
                <input className="form-control" type="text" />
              </div>
              <div className="col-3">
                <label>
                  <FormattedMessage id="manage-user.phone-number" />
                </label>
                <input className="form-control" type="text" />
              </div>
              <div className="col-9">
                <label>
                  <FormattedMessage id="manage-user.address" />{" "}
                </label>
                <input className="form-control" type="text" />
              </div>

              <div className="col-3">
                <label>
                  <FormattedMessage id="manage-user.gender" />{" "}
                </label>
                <select class="form-control">
                  <option selected>Choose ...</option>
                  <option>...</option>
                </select>
              </div>

              <div className="col-3">
                <label>
                  <FormattedMessage id="manage-user.position" />{" "}
                </label>
                <select class="form-control">
                  <option selected>Choose ...</option>
                  <option>...</option>
                </select>
              </div>

              <div className="col-3">
                <label>
                  <FormattedMessage id="manage-user.role-id" />{" "}
                </label>
                <select class="form-control">
                  <option selected>Choose ...</option>
                  <option>...</option>
                </select>
              </div>

              <div className="col-3">
                <label>
                  <FormattedMessage id="manage-user.image" />{" "}
                </label>
                <input type="text" className="form-control" />
              </div>

              <div className="col-12 mt-3">
                <button className="btn btn-primary">
                  <FormattedMessage id="manage-user.save" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);