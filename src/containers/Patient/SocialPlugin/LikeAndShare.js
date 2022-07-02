import React, {Component} from "react";
import {connect} from "react-redux";
import {FormattedMessage} from 'react-intl';
import {LANGUAGES} from "../../../utils";

class LikeAndShare extends Component {
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

    initFacebookSDK() {
        if (window.FB) {
            window.FB.XFBML.parse();
        }

        let {language} = this.props;
        let locale = language === LANGUAGES.VI ? "vi_VN" : "en_US";
        window.fbAsyncInit = function () {
            window.FB.init({
                appId: process.env.REACT_APP_FACEBOOK_APP_ID,
                cookie: true,// enable cookies to allow the server to access
                // the session
                xfbml: true, // parse social plugins on this page
                version: "v2.5" // use version 2.1
            });

        };

    }

    render() {
        let {dataHref} = this.props;
        return (
            <>
                <div className="fb-like"
                     data-href={dataHref}
                     data-width=""
                     data-layout="standard"
                     data-action="like"
                     data-size="small"
                     data-share="true"
                >

                </div>
            </>
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

export default connect(mapStateToProps, mapDispatchToProps)(LikeAndShare);
