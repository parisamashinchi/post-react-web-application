import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Statistic } from 'antd';
// import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';
import Countdown from 'react-countdown-now';
import get from 'lodash/get';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import { createForm } from '../../../containers/form/Form';
import * as actions from '../actions';
import * as constants from '../constants';
import { injectIntl} from 'react-intl';

/*
 ConfirmCode is a component to show user form of confirmation code
 */
export class ConfirmCode extends Component {
    constructor(props) {
        super(props);
        /*
         startCounter contains boolean to start counter
         */
        this.state = {
            startCounter: true,
        };
        this.form = createForm(constants.CONFIRM_CODE_FORM);
    }

    /**
     * confirmCode to handle sending confirmation code to server using confirmCode action
     * @param value contains confirmation code
     */
    confirmCode = (values) => {
        const { confirmCode, signedData } = this.props;
        const data = {
            ...values,
            email: signedData.email,
            phone: signedData.phone,
        };
        confirmCode(data);
    };

    /*
     tryAgain to call signUp action to get a new code
     */
    tryAgain = () => {
        const { signUp, signedData } = this.props;
        signUp(signedData);
        this.setState({
            startCounter: true,
        });
    };

    render() {
        const { signedData, lang } = this.props;
        const Form = this.form;
        const noneRequired = this.state.startCounter ? [] : ['confirm_code', 'password', 'confirmPassword'];
        const Countdown = Statistic.Countdown;
        const deadline = Date.now() + 60000;
        return (
            <div className="confirm">
                {this.state.startCounter
                    ? <Countdown
                        value={deadline}
                        onFinish={() => this.setState({startCounter: false})}
                        format="mm:ss"
                    />
                    : <span className="count-down">00:00</span>
                }
                <Form
                    submitButton={{
                        text: this.state.startCounter
                            ? 'Verify'
                            : 'Resend',
                        class: 'btn btn-block confirm-btn',
                        submitBackColor: this.state.startCounter
                            ? '#8981cc'
                            : '#e09090',
                        submitColor: '#fffff'
                    }}
                    noneRequired={noneRequired}
                    validationSchema={yup.object().shape({
                        confirm_code: yup.string()
                            .required('please enter the code you received'),

                    })}
                    fields={{
                        confirm_code: {
                            name: 'confirm_code',
                            label: 'please enter the code you received',
                            type: 'text',
                        },
                    }}
                    customSubmit={(values) => {
                        this.state.startCounter
                            ? this.confirmCode(values)
                            : this.tryAgain();
                    }}
                    requestType="post"
                />
            </div>
        )
    }
};

/*
 mapStateToProps is a function that we
 use to get data from redux state
 forgotPasswordData in redux state will show us user data for forgot password
 resetCounterValue in redux state will show us boolean of reset counter
 */
const mapStateToProps = state => ({
    signedData: get(state.Authentication, 'signedData', {}),
    // lang: state.locale.lang,
});

/*
 mapDispatchToProps is a function that we
 use to dispatch actions from redux
 showModal is action to handle show or hide modal
 confirmCode is action to send confirmation code to server
 signUp is action to handle sign up request to server
 */
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        confirmCode: actions.confirmCode,
        signUp: actions.signUp,
    }, dispatch);
};

ConfirmCode.propTypes = {
    signedData: PropTypes.objectOf(PropTypes.string).isRequired,
    confirmCode: PropTypes.func.isRequired,
    signUp: PropTypes.func.isRequired,
};

export default injectIntl(connect(mapStateToProps, mapDispatchToProps)(ConfirmCode));
