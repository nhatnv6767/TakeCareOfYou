import React, {Component} from "react";
import {connect} from "react-redux";
import "./DoctorExtraInfor.scss";
import {LANGUAGES} from "../../../utils";
import {getExtraInforDoctorById} from "../../../services/userService";
import {FormattedMessage} from 'react-intl';
import NumberFormat from 'react-number-format';

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
            }

        }
    }

    showHideDetailInfor = (status) => {
        this.setState({
            isShowDetailInfor: status
        });
    };

    render() {
        let {isShowDetailInfor, extraInfor} = this.state;
        let {language} = this.props;
        console.log("EXTRA DATA RENDER: ", extraInfor);
        return (
            <div className="doctor-extra-infor-container">
                <div className="content-up">
                    <div className="text-address">
                        Địa chỉ khám
                    </div>
                    <div className="name-clinic">
                        {extraInfor && extraInfor.nameClinic ?
                            extraInfor.nameClinic : ""
                        }
                    </div>
                    <div className="detail-address">
                        {extraInfor && extraInfor.addressClinic ?
                            extraInfor.addressClinic : ""
                        }
                    </div>
                </div>

                <div className="content-down">

                    {isShowDetailInfor ?
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
                                        <span></span>
                                        {extraInfor && extraInfor.priceData ?
                                            extraInfor.priceData.valueVi : ""
                                        } VND <span></span>
                                    </span>
                                </div>
                                <div className="note">
                                    Được ưu tiên khám trước khi đật khám qua BookingCare. Giá khám cho người nước ngoài
                                    là
                                    <span> </span>
                                    {extraInfor && extraInfor.priceData ?
                                        extraInfor.priceData.valueEn : ""
                                    } USD <span></span>
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

                        :

                        <div className="short-infor">
                            GIÁ KHÁM:
                            {extraInfor && extraInfor.priceData && language === LANGUAGES.VI &&

                                <NumberFormat
                                    value={extraInfor.priceData.valueVi}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    suffix={' VND'}
                                />
                            }

                            {extraInfor && extraInfor.priceData && language === LANGUAGES.EN &&

                                <NumberFormat
                                    value={extraInfor.priceData.valueEn}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'$'}
                                />
                            }
                            <span onClick={() => this.showHideDetailInfor(!isShowDetailInfor)}>
                                Xem chi tiết
                            </span>
                        </div>


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
