import React, {Component} from "react";
import {connect} from "react-redux";
import {FormattedMessage} from 'react-intl';
import "./BookingModal.scss";
import {Modal} from "reactstrap";


class BookingModal extends Component {
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
            <Modal
                isOpen={false}
                className={'booking-modal-container'}
                size="lg"
                centered
                // backdrop={true}
            >
                <div className="booking-modal-content">
                    <div className="booking-modal-header">
                        <span className="left">
                            Thông tin đặt lịch khám bệnh
                        </span>
                        <span className="right">
                            <i className="fas fa-times"></i>
                        </span>
                    </div>

                    <div className="booking-modal-body">

                        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab dolores dolorum exercitationem
                            explicabo libero minus natus non quas recusandae tempora, vel veniam? Labore magnam nihil
                            porro possimus, quia vel voluptatibus?
                        </div>
                        <div>Adipisci asperiores eius provident repudiandae sequi! Accusamus amet at eos magni minima
                            mollitia suscipit! A amet aperiam consequuntur culpa ea expedita explicabo fugit maxime
                            neque nisi, quidem quo recusandae veritatis.
                        </div>
                        <div>Commodi ea eaque explicabo quia ratione sint tempore totam voluptate! Ab doloribus eaque,
                            enim incidunt, itaque iure labore libero modi nemo perferendis placeat, qui quod reiciendis
                            repudiandae unde veniam voluptas!
                        </div>
                        <div>Alias aliquam animi aspernatur cum eius eveniet fugiat fugit, harum illum nemo nihil
                            perferendis, qui repellat repudiandae soluta tempora tempore vel veritatis. Consequuntur ex
                            hic id ipsum iste possimus voluptates.
                        </div>
                        <div>At cum ea est incidunt itaque, modi mollitia necessitatibus nihil sunt. Ad architecto at
                            consectetur delectus fugit hic illum, libero mollitia natus officia quae repellat sed, ut
                            velit veritatis voluptate!
                        </div>
                        <div>Alias beatae consectetur culpa dolorum eaque earum esse exercitationem fugit, molestiae
                            nulla odit omnis quae quidem quisquam recusandae reprehenderit sunt voluptate voluptatem
                            voluptates, voluptatibus? Atque id inventore non tempora voluptates?
                        </div>
                        <div>A accusamus, aliquam aliquid assumenda, dicta eum harum itaque iusto, quae qui sunt veniam
                            voluptate. Accusantium animi aut consequatur, eligendi fugiat, obcaecati omnis placeat quos
                            sit soluta suscipit tempora voluptate.
                        </div>
                        <div>Ex facere odit qui soluta ullam? Accusantium animi aperiam, aut consequuntur corporis cum
                            dignissimos eos impedit mollitia neque nesciunt praesentium rem. Consectetur doloremque ex
                            iste pariatur qui, quibusdam quo tempora.
                        </div>


                    </div>

                    <div className="booking-modal-footer">
                        <button
                            className="btn-booking-confirm"
                        >
                            Xác nhận
                        </button>
                        <button
                            className="btn-booking-cancel"
                        >
                            Huỷ bỏ
                        </button>
                    </div>
                </div>

            </Modal>
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

export default connect(mapStateToProps, mapDispatchToProps)(BookingModal);
