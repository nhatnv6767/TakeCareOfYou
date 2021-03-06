import React, {Component} from "react";
import {FormattedMessage} from "react-intl";
import {connect} from "react-redux";
import {LANGUAGES, CRUD_ACTIONS, CommonUtils} from "../../../utils";
import * as actions from "../../../store/actions";
import "./UserRedux.scss";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // This only needs to be imported once in your app
import TableManageUser from "./TableManageUser";

class UserRedux extends Component {
    constructor(props) {
        super(props);
        this.state = {
            genderArr: [],
            positionArr: [],
            roleArr: [],
            previewImgURL: "",
            isOpen: false,

            email: "",
            password: "",
            firstName: "",
            lastName: "",
            phoneNumber: "",
            address: "",
            gender: "",
            position: "",
            role: "",
            avatar: "",

            action: "",
            userEditId: "",
        };
    }

    async componentDidMount() {
        this.props.getGenderStart();
        this.props.getPositionStart();
        this.props.getRoleStart();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        //render => didUpdate
        // hiện tại (this) và quá khứ (previous)
        // quá khứ rỗng [] vs hiện tại đã load xong [3 phần tử]
        if (prevProps.genderRedux !== this.props.genderRedux) {
            let arrGenders = this.props.genderRedux;
            this.setState({
                genderArr: arrGenders,
                gender: arrGenders && arrGenders.length > 0 ? arrGenders[0].keyMap : "",
            });
        }

        if (prevProps.positionRedux !== this.props.positionRedux) {
            let arrPositions = this.props.positionRedux;
            this.setState({
                positionArr: arrPositions,
                position:
                    arrPositions && arrPositions.length > 0 ? arrPositions[0].keyMap : "",
            });
        }

        if (prevProps.roleRedux !== this.props.roleRedux) {
            let arrRoles = this.props.roleRedux;
            this.setState({
                roleArr: arrRoles,
                role: arrRoles && arrRoles.length > 0 ? arrRoles[0].keyMap : "",
            });
        }

        if (prevProps.listUsers !== this.props.listUsers) {
            let arrGenders = this.props.genderRedux;
            let arrPositions = this.props.positionRedux;
            let arrRoles = this.props.roleRedux;
            this.setState({
                email: "",
                password: "",
                firstName: "",
                lastName: "",
                phoneNumber: "",
                address: "",
                avatar: "",
                gender: arrGenders && arrGenders.length > 0 ? arrGenders[0].keyMap : "",
                position:
                    arrPositions && arrPositions.length > 0 ? arrPositions[0].keyMap : "",
                role: arrRoles && arrRoles.length > 0 ? arrRoles[0].keyMap : "",
                action: CRUD_ACTIONS.CREATE,
                previewImgURL: "",
            });
        }
    }

    handleOnChangeImage = async (event) => {
        let data = event.target.files;
        let file = data[0];
        if (file) {
            let base64 = await CommonUtils.getBase64(file);
            let objectUrl = URL.createObjectURL(file);
            this.setState({
                previewImgURL: objectUrl,
                avatar: base64,
            });
        }
    };

    openPreviewImage = () => {
        if (!this.state.previewImgURL) return;
        this.setState({
            isOpen: true,
        });
    };

    handleSaveUser = () => {
        let isValid = this.checkValidateInput();
        if (!isValid) return;

        let {action} = this.state;

        // fire redux create user

        if (action === CRUD_ACTIONS.CREATE) {
            this.props.createUserStart({
                email: this.state.email,
                password: this.state.password,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                address: this.state.address,
                phonenumber: this.state.phoneNumber,
                gender: this.state.gender,
                roleId: this.state.role,
                positionId: this.state.position,
                avatar: this.state.avatar,
            });
        }
        if (action === CRUD_ACTIONS.EDIT) {
            // fire redux edit user
            this.props.editUserRedux({
                id: this.state.userEditId,
                email: this.state.email,
                password: this.state.password,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                address: this.state.address,
                phonenumber: this.state.phoneNumber,
                gender: this.state.gender,
                roleId: this.state.role,
                positionId: this.state.position,
                avatar: this.state.avatar,
            });
        }
    };

    checkValidateInput = () => {
        let isValid = true;
        let arrCheck = [
            "email",
            "password",
            "firstName",
            "lastName",
            "phoneNumber",
            "address",
        ];
        for (let i = 0; i < arrCheck.length; i++) {
            if (!this.state[arrCheck[i]]) {
                isValid = false;
                alert(`Please enter your ${arrCheck[i]}`);
                break;
            }
        }

        return {isValid};
    };

    onChangeInput = (event, id) => {
        let copyState = {...this.state};

        copyState[id] = event.target.value;

        this.setState(
            {
                ...copyState,
            },
            () => {
                // console.log("Check input onchange: ", this.state);
            }
        );
    };

    handleEditUserFromParent = (user) => {
        let imageBase64 = "";
        if (user.image) {
            imageBase64 = Buffer.from(user.image, "base64").toString("binary");
        }

        this.setState({
            email: user.email,
            password: "HASHCODE",
            firstName: user.firstName,
            lastName: user.lastName,
            phoneNumber: user.phonenumber,
            address: user.address,
            avatar: "",
            previewImgURL: imageBase64,
            gender: user.gender,
            position: user.positionId,
            role: user.roleId,
            action: CRUD_ACTIONS.EDIT,
            userEditId: user.id,
        });
    };

    render() {
        let genders = this.state.genderArr;
        let positions = this.state.positionArr;
        let roles = this.state.roleArr;

        let language = this.props.language;
        let isGetGenders = this.props.isLoadingGender;

        let {
            email,
            password,
            firstName,
            lastName,
            phoneNumber,
            address,
            gender,
            position,
            role,
            avatar,
        } = this.state;

        return (
            <div className="user-redux-container">
                <div className="title text-center">User Redux</div>

                <div className="user-redux-body">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 my-3">
                                <FormattedMessage id="manage-user.add"/>
                            </div>
                            <div className="col-12">
                                {isGetGenders === true ? "Loading genders" : ""}
                            </div>
                            <div className="col-3">
                                <label>
                                    <FormattedMessage id="manage-user.email"/>{" "}
                                </label>
                                <input
                                    className="form-control"
                                    type="email"
                                    value={email}
                                    onChange={(event) => {
                                        this.onChangeInput(event, "email");
                                    }}
                                    disabled={this.state.action === CRUD_ACTIONS.EDIT}
                                />
                            </div>
                            <div className="col-3">
                                <label>
                                    <FormattedMessage id="manage-user.password"/>{" "}
                                </label>
                                <input
                                    className="form-control"
                                    type="password"
                                    value={password}
                                    onChange={(event) => {
                                        this.onChangeInput(event, "password");
                                    }}
                                    disabled={this.state.action === CRUD_ACTIONS.EDIT}
                                />
                            </div>
                            <div className="col-3">
                                <label>
                                    <FormattedMessage id="manage-user.first-name"/>{" "}
                                </label>
                                <input
                                    className="form-control"
                                    type="text"
                                    value={firstName}
                                    onChange={(event) => {
                                        this.onChangeInput(event, "firstName");
                                    }}
                                />
                            </div>
                            <div className="col-3">
                                <label>
                                    <FormattedMessage id="manage-user.last-name"/>{" "}
                                </label>
                                <input
                                    className="form-control"
                                    type="text"
                                    value={lastName}
                                    onChange={(event) => {
                                        this.onChangeInput(event, "lastName");
                                    }}
                                />
                            </div>
                            <div className="col-3">
                                <label>
                                    <FormattedMessage id="manage-user.phone-number"/>
                                </label>
                                <input
                                    className="form-control"
                                    type="text"
                                    value={phoneNumber}
                                    onChange={(event) => {
                                        this.onChangeInput(event, "phoneNumber");
                                    }}
                                />
                            </div>
                            <div className="col-9">
                                <label>
                                    <FormattedMessage id="manage-user.address"/>{" "}
                                </label>
                                <input
                                    className="form-control"
                                    type="text"
                                    value={address}
                                    onChange={(event) => {
                                        this.onChangeInput(event, "address");
                                    }}
                                />
                            </div>

                            <div className="col-3">
                                <label>
                                    <FormattedMessage id="manage-user.gender"/>{" "}
                                </label>
                                <select
                                    class="form-control"
                                    onChange={(event) => {
                                        this.onChangeInput(event, "gender");
                                    }}
                                    value={gender}
                                >
                                    {genders &&
                                        genders.length > 0 &&
                                        genders.map((item, index) => {
                                            return (
                                                <option key={index} value={item.keyMap}>
                                                    {language === LANGUAGES.VI
                                                        ? item.valueVi
                                                        : item.valueEn}
                                                </option>
                                            );
                                        })}
                                </select>
                            </div>

                            <div className="col-3">
                                <label>
                                    <FormattedMessage id="manage-user.position"/>{" "}
                                </label>
                                <select
                                    class="form-control"
                                    onChange={(event) => {
                                        this.onChangeInput(event, "position");
                                    }}
                                    value={position}
                                >
                                    {positions &&
                                        positions.length > 0 &&
                                        positions.map((item, index) => {
                                            return (
                                                <option key={index} value={item.keyMap}>
                                                    {language === LANGUAGES.VI
                                                        ? item.valueVi
                                                        : item.valueEn}
                                                </option>
                                            );
                                        })}
                                </select>
                            </div>

                            <div className="col-3">
                                <label>
                                    <FormattedMessage id="manage-user.role-id"/>{" "}
                                </label>
                                <select
                                    class="form-control"
                                    onChange={(event) => {
                                        this.onChangeInput(event, "role");
                                    }}
                                    value={role}
                                >
                                    {roles &&
                                        roles.length > 0 &&
                                        roles.map((item, index) => {
                                            return (
                                                <option key={index} value={item.keyMap}>
                                                    {language === LANGUAGES.VI
                                                        ? item.valueVi
                                                        : item.valueEn}
                                                </option>
                                            );
                                        })}
                                </select>
                            </div>

                            <div className="col-3">
                                <label>
                                    <FormattedMessage id="manage-user.image"/>{" "}
                                </label>
                                <div className="preview-img-container">
                                    <input
                                        type="file"
                                        id="previewImg"
                                        hidden
                                        onChange={(event) => this.handleOnChangeImage(event)}
                                    />
                                    <label htmlFor="previewImg" className="label-upload">
                                        Tải ảnh <i className="fas fa-upload"></i>
                                    </label>
                                    <div
                                        className="preview-image"
                                        style={{
                                            backgroundImage: `url(${this.state.previewImgURL})`,
                                        }}
                                        onClick={() => this.openPreviewImage()}
                                    ></div>
                                </div>
                            </div>

                            <div className="col-12 my-3">
                                <button
                                    className={
                                        this.state.action === CRUD_ACTIONS.EDIT
                                            ? "btn btn-warning"
                                            : "btn btn-primary"
                                    }
                                    onClick={() => this.handleSaveUser()}
                                >
                                    {this.state.action === CRUD_ACTIONS.EDIT ? (
                                        <FormattedMessage id="manage-user.edit"/>
                                    ) : (
                                        <FormattedMessage id="manage-user.save"/>
                                    )}
                                </button>
                            </div>

                            <div className="col-12 mb-5">
                                <TableManageUser
                                    // tên của biến props muốn truy cập
                                    handleEditUserFromParent={this.handleEditUserFromParent}
                                    action={this.state.action}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {this.state.isOpen && (
                    <Lightbox
                        mainSrc={this.state.previewImgURL}
                        onCloseRequest={() => this.setState({isOpen: false})}
                    />
                )}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        language: state.app.language,
        // admin ở đây mình đã khai báo nó ở rootReducer
        // truyền state gender lưu bên trong redux vào bên trong react
        // "map" state của thằng redux vào bên trong props cho thằng react
        genderRedux: state.admin.genders,
        positionRedux: state.admin.positions,
        roleRedux: state.admin.roles,
        isLoadingGender: state.admin.isLoadingGender,
        listUsers: state.admin.users,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getGenderStart: () => dispatch(actions.fetchGenderStart()),

        getPositionStart: () => dispatch(actions.fetchPositionStart()),
        getRoleStart: () => dispatch(actions.fetchRoleStart()),
        createUserStart: (data) => dispatch(actions.createUserStart(data)),
        fetchUserRedux: () => dispatch(actions.fetchAllUsersStart()),
        editUserRedux: (data) => dispatch(actions.editUserStart(data)),
        // processLogout: () => dispatch(actions.processLogout()),
        // changeLanguageAppRedux: (language) =>
        //   dispatch(actions.changeLanguageApp(language)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);

/// setTimeout at Node to test
