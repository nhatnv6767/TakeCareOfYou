import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss'
import { getAllUsers } from '../../services/userService'

class UserManage extends Component {

    constructor(props) {
        super(props);
        // khởi tạo những biến muốn dùng với thằng class này
        this.state = {
            arrUsers: [],
        }
    }

    async componentDidMount() {
        let response = await getAllUsers('ALL')
        if (response && response.errCode == 0) {
            // hàm this.setState luôn là 1 hàm bất đồng bộ
            this.setState({
                arrUsers: response.users
            }, () => {
                // tức là sau khi hoàn thành xong việc setState sẽ 
                // chạy ở đây, áp dụng với các trường hợp dữ liệu nhiều, 

            })

        }
    }

    /** Life cycle
     *  Run component
     * 1. Run constructor -> init state
     * 2. Didmount ( set state)
     * 3. Render
     */

    render() {
        console.log('Check render ', this.state)
        let arrUsers = this.state.arrUsers
        return (
            <div className="users-container">
                <div className="title text-center">Manage users</div>
                <div className="users-table mt-3 mx-1">
                    <table id="customers">
                        <tr>
                            <th>Email</th>
                            <th>First name</th>
                            <th>Last name</th>
                            <th>Address</th>
                            <th>Action</th>
                        </tr>

                        {arrUsers && arrUsers.map((item, index) => {
                            return (
                                <tr>
                                    <td>{item.email}</td>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.address}</td>
                                    <td>{item.address}</td>
                                </tr>
                            )
                        })
                        }



                    </table>
                </div>
            </div>
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
