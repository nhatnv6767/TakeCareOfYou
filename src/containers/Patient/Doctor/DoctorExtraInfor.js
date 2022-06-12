import React, {Component} from "react";
import {connect} from "react-redux";
import "./DoctorExtraInfor.scss";
import {LANGUAGES} from "../../../utils";
import {getExtraInforDoctorById} from "../../../services/userService";
import {FormattedMessage} from 'react-intl';

class DoctorExtraInfor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowDetailInfor: false,
            extraInfor: {}
        };
    }

    async componentDidMount() {
    }


    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.language !== this.props.language) {

        }
        // nó so sánh với giá trị của thằng cha, nếu có sự thay đổi sẽ chạy vào đây
        if (prevProps.doctorIdFromParent !== this.props.doctorIdFromParent) {
            let res = await getExtraInforDoctorById(this.props.doctorIdFromParent);
            if (res && res.errCode === 0) {
                this.setState({
                    extraInfor: res.data,
                });
                console.log("EXTRA DATA: ", res);
            }

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

                        <div className="short-infor">
                            GIÁ KHÁM: 250.000đ.
                            <span onClick={() => this.showHideDetailInfor(!isShowDetailInfor)}>
                                Xem chi tiết
                            </span>
                        </div>
                    }

                    {isShowDetailInfor &&
                        <>
                            <div className="title-price">
                                Giá khám:
                            </div>
                            <div className="detail-infor">
                                <div className="price">
                                    <span className="left">
                                        Giá khám
                                    </span>
                                    <span className="right">
                                        250.000đ
                                    </span>
                                </div>
                                <div className="note">
                                    Được ưu tiên khám trước khi đật khám qua BookingCare. Giá khám cho người nước ngoài
                                    là
                                    30 USD
                                </div>

                            </div>
                            <div className="payment">
                                Người bệnh có thể thanh toán chi phí bằng hình thức tiền mặt và quẹt thẻ
                            </div>
                            <div className="hide-price">
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
