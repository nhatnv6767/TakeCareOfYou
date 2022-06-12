import React, {Component} from "react";
import {connect} from "react-redux";
import "./DoctorExtraInfor.scss";
import {LANGUAGES} from "../../../utils";
import {getScheduleDoctorByDate} from "../../../services/userService";
import {FormattedMessage} from 'react-intl';

class DoctorExtraInfor extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    async componentDidMount() {
    }


    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.language !== this.props.language) {

        }
    }

    render() {
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

                    <div>
                        GIÁ KHÁM: 300.000đ. Xem chi tiết
                    </div>


                    <div>
                        Giá khám
                    </div>
                    <div>
                        Giá khám
                        Được ưu tiên khám trước khi đật khám qua BookingCare. Giá khám cho người nước ngoài là 30 USD
                    </div>
                    <div>
                        Người bệnh có thể thanh toán chi phí bằng hình thức tiền mặt và quẹt thẻ
                    </div>
                    <div>
                        Ẩn bảng giá
                    </div>


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
