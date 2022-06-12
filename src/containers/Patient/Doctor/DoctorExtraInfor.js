import React, {Component} from "react";
import {connect} from "react-redux";
import "./DoctorExtraInfor.scss";
import {LANGUAGES} from "../../../utils";
import {getScheduleDoctorByDate} from "../../../services/userService";
import {FormattedMessage} from 'react-intl';

class DoctorExtraInfor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowDetailInfor: false,
        };
    }

    async componentDidMount() {
    }


    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.language !== this.props.language) {

        }
    }

    showHideDetailInfor = (status) => {
        this.setState({
            isShowDetailInfor: status
        });
    };

    render() {
        let {isShowDetailInfor} = this.state;
        return (
            <div className="doctor-extra-infor-container">
                <div className="content-up">
                    <div className="text-address">
                        Địa chỉ khám
                    </div>
                    <div className="name-clinic">
                        Phòng khám Bệnh viện Đại học Y Dược 1
                    </div>
                    <div className="detail-address">
                        20-22 Dương Quang Trung, Phường 12, Quận 10, Tp. HCM
                    </div>
                </div>

                <div className="content-down">
                    {!isShowDetailInfor &&

                        <div>
                            GIÁ KHÁM: 300.000đ.
                            <span onClick={() => this.showHideDetailInfor(!isShowDetailInfor)}>
                                Xem chi tiết
                            </span>
                        </div>
                    }

                    {isShowDetailInfor &&
                        <>
                            <div className="title">
                                Giá khám: .
                            </div>
                            <div className="detail-infor">
                                <div>
                                    <span className="left">
                                        Giá khám
                                    </span>
                                    <span className="right">
                                        250.000đ
                                    </span>
                                </div>
                                <div>
                                    Được ưu tiên khám trước khi đật khám qua BookingCare. Giá khám cho người nước ngoài
                                    là
                                    30 USD
                                </div>

                            </div>
                            <div>
                                Người bệnh có thể thanh toán chi phí bằng hình thức tiền mặt và quẹt thẻ
                            </div>
                            <div>
                                <span onClick={() => this.showHideDetailInfor(!isShowDetailInfor)}>
                                Ẩn bảng giá
                            </span>
                            </div>
                        </>
                    }

                </div>


            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        language: state.app.language,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(DoctorExtraInfor);
