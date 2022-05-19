import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss'
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
     * 2. Didmount ( set state)
     * 3. Render
     */

    render() {
        return (
            <div className="users-container">
                <div className="title text-center">Manage users</div>
                <div className="users-table">
                    <table id="customers">
                        <tr>
                            <th>Company</th>
                            <th>Contact</th>
                            <th>Country</th>
                        </tr>
                        <tr>
                            <td>Alfreds Futterkiste</td>
                            <td>Maria Anders</td>
                            <td>Germany</td>
                        </tr>
                        <tr>
                            <td>Berglunds snabbköp</td>
                            <td>Christina Berglund</td>
                            <td>Sweden</td>
                        </tr>
                        <tr>
                            <td>Centro comercial Moctezuma</td>
                            <td>Francisco Chang</td>
                            <td>Mexico</td>
                        </tr>
                        <tr>
                            <td>Ernst Handel</td>
                            <td>Roland Mendel</td>
                            <td>Austria</td>
                        </tr>
                        <tr>
                            <td>Island Trading</td>
                            <td>Helen Bennett</td>
                            <td>UK</td>
                        </tr>
                        <tr>
                            <td>Königlich Essen</td>
                            <td>Philip Cramer</td>
                            <td>Germany</td>
                        </tr>
                        <tr>
                            <td>Laughing Bacchus Winecellars</td>
                            <td>Yoshi Tannamuri</td>
                            <td>Canada</td>
                        </tr>
                        <tr>
                            <td>Magazzini Alimentari Riuniti</td>
                            <td>Giovanni Rovelli</td>
                            <td>Italy</td>
                        </tr>
                        <tr>
                            <td>North/South</td>
                            <td>Simon Crowther</td>
                            <td>UK</td>
                        </tr>
                        <tr>
                            <td>Paris spécialités</td>
                            <td>Marie Bertrand</td>
                            <td>France</td>
                        </tr>
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
