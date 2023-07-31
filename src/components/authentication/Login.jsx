import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavLink } from 'react-router-dom';
import { FormattedMessage, IntlProvider } from 'react-intl';
import * as yup from 'yup';
import PropTypes from 'prop-types';
// import { Helmet } from 'react-helmet';
import { createForm } from '../../containers/form/Form';
import * as actions from './actions';
import * as constants from './constants';

/*
 LoginComponent is a component to show login form
 */
export class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.form = createForm(constants.LOGIN_FORM);
    }

    render() {
        const { loginAction, lang } = this.props;
        const Form = this.form;
        return (
                <div>
                    <IntlProvider locale={lang} >
                    login
                    <div className="form">
                        <Form
                            submitButton={{
                                text: 'button.login',
                            }}
                            validationSchema={yup.object().shape({
                                username: yup.string()
                                    .email("form.error.email")
                                    .required("form.error.required"),
                                password: yup.string()
                                    .min(8, "form.error.passwordLength")
                                    .required("form.error.required"),
                            })}
                            fields={{
                                username: {
                                    name: 'username',
                                    label: 'form.input.email',
                                    type: 'text',
                                    placeholder: 'email@sample.com',
                                    class: 'form-control',
                                    icon: 'fa-user',
                                },
                                password: {
                                    name: 'password',
                                    label: 'form.input.password',
                                    type: 'password',
                                    class: 'form-control',
                                    icon: 'fa-lock',
                                },
                            }}
                            customSubmit={values => loginAction(values)}
                            requestType="post"
                        />
                        <div className="login-options">
                           {/* <Checkbox>
                                <FormattedMessage id="signUp.remember" />
                            </Checkbox>*/}
                            <NavLink to="forgot-password">
                                {/*<FormattedMessage id="login.button.forgotPassword" />*/}
                            </NavLink>
                        </div>
                        {/*
                        <div className="or">
                            <span><FormattedMessage id="signUp.or" /></span>
                        </div>
                        <Col span={24} className="images">
                            <img src={images.github} alt="github" />
                            <img src={images.gmail} alt="gmail" />
                            <img src={images.linkdin} alt="linkdin" />
                        </Col>
                        */}
                    </div>
                    </IntlProvider>
                </div>
        );
    }
};

/*
 mapStateToProps is a function that we
 use to get data from redux state
 */
const mapStateToProps = state => ({
    // lang: state.locale.lang,
});

/*
 mapDispatchToProps is a function that we
 use to dispatch actions from redux
 login is action to handle login request to server
 */
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        loginAction: actions.login,
        getCurrent: actions.getCurrent,
    }, dispatch);
}

LoginComponent.propTypes = {
    // lang: PropTypes.string.isRequired,
    loginAction: PropTypes.func.isRequired,
    getCurrent: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
