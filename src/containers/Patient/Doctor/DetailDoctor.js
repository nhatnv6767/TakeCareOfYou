import React, {Component} from "react";
import {connect} from "react-redux";
import HomeHeader from "../../HomePage/HomeHeader";
import "./DetailDoctor.scss";
import {getDetailInforDoctorService} from "../../../services/userService";

class DetailDoctor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detailDoctor: {}
        }
    }

    async componentDidMount() {
        if (
            this.props.match &&
            this.props.match.params &&
            this.props.match.params.id
        ) {
            let id = this.props.match.params.id;
            let res = await getDetailInforDoctorService(id)
            if (res && res.errCode === 0) {
                this.setState({detailDoctor: res.data})
            }
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
    }

    render() {
        console.log("Check log state: ", this.state);
        let { detailDoctor } = this.state
        return (
            <>
                <HomeHeader isShowBanner={false}/>
                <div className="doctor-detail-container">
                    <div className="intro-doctor">
                        <div
                            className="content-left"
                            style={{
                                backgroundImage: `url(${detailDoctor.image})`
                            }}
                        >

                        </div>
                        <div className="content-right">
                            <div className="up">Phó giáo sư Lê Văn A</div>
                            <div className="down">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Deleniti, harum. Id, temporibus esse eaque non odio nam
                                doloribus praesentium enim alias velit ex debitis tempore
                                nostrum nobis nisi illo maiores?
                            </div>
                        </div>
                    </div>
                    <div className="schedule-doctor"></div>
                    <div className="detail-infor-doctor">// do here</div>
                    <div className="comment-doctor"></div>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailDoctor);
