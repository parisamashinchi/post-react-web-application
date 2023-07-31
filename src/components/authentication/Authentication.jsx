import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {NavLink, Route, withRouter} from 'react-router-dom';
import {Row, Col, Layout} from 'antd';
import {ArrowLeftOutlined} from '@ant-design/icons';
import get from 'lodash/get';
import PropTypes from 'prop-types';
import AuthStyle from '../authentication/authentication.style';
import SignUp from './signUp';
import Login from './Login';
import ResetPassword from './reset-password/ResetPassword';
import ForgotPassword from './forgot-password/ForgotPassword';
import ConfirmCode from './confirm-code/ConfirmCode';
import * as actions from './actions';
import 'antd/dist/antd.css';

export class Authentication extends Component {
    render() {
        const {match, currentData} = this.props;
        const path = this.props.match.path;
        console.log(path,match, 'here')
        return (
                <AuthStyle>
                    <Layout>
                        <Row>
                            <Col span={12} className="left">
                                    <NavLink exact to="/">
                                        <ArrowLeftOutlined />
                                    </NavLink>
                                    <a className="help">Help</a>
                                    <h4>Hello, Friend!</h4>
                                    <div className="description">
                                        <p> Fill up personal information and </p>
                                        <p> start journey with us.</p>
                                    </div>
                                </Col>
                                <Col span={12} className="right">
                                    <NavLink exact to="/login"  className="login">
                                        Login
                                    </NavLink>
                                    <SignUp />
                                </Col>

                                    {/*<Route*/}
                                    {/*    path={`${match.path}/sign-up`}*/}
                                    {/*    component={signUp}*/}
                                    {/*/>*/}
                                    {/*<Route*/}
                                    {/*    path={`${match.path}/login`}*/}
                                    {/*    component={Login}*/}
                                    {/*/>*/}
                                    {/*<Route*/}
                                    {/*    path={`${match.path}/reset-password`}*/}
                                    {/*    component={ResetPassword}*/}
                                    {/*/>*/}
                                    {/*<Route*/}
                                    {/*    path={`${match.path}/forgot-password`}*/}
                                    {/*    component={ForgotPassword}*/}
                                    {/*/>*/}
                                    {/*<Route*/}
                                    {/*    path={`${match.path}/confirm-code`}*/}
                                    {/*    component={ConfirmCode}*/}
                                    {/*/>*/}
                                    {/*{*/}
                                    {/*    // this.state.mobile &&*/}
                                    {/*    <div>*/}
                                    {/*        <NavLink*/}
                                    {/*            to={currentData.state === 'login' ? `${path}/sign-up` : `${path}/login`}*/}
                                    {/*            className="mobile-link"*/}
                                    {/*        >*/}
                                    {/*            {*/}
                                    {/*                // currentData.state === 'login'*/}
                                    {/*                //     ? <FormattedMessage*/}
                                    {/*                //         id="signUp.accountExit"/>*/}
                                    {/*                //     : <FormattedMessage*/}
                                    {/*                //         id="signUp.login"/>*/}
                                    {/*            }*/}
                                    {/*        </NavLink>*/}
                                    {/*    </div>*/}
                                    {/*}*/}
                                {/*</Col>*/}
                        </Row>
                    </Layout>
                </AuthStyle>
        );
    }
};


/*
 mapStateToProps is a function that we
 use to get data from redux state
 lang in redux state will show us selected language
 */
const mapStateToProps = state => ({
    currentData: get(state.Authentication, 'currentData', {}),
});

/*
 mapDispatchToProps is a function that we
 use to dispatch actions from redux
 login is action to handle login request to server
 */
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getCurrent: actions.getCurrent,
        setSignUp: actions.setSignUp,
        // showModal: modalActions.showModal,
    }, dispatch);
}

Authentication.propTypes = {
    // lang: PropTypes.string.isRequired,
    match: PropTypes.oneOfType([
        PropTypes.shape({
            url: PropTypes.string.isRequired,
            path: PropTypes.string.isRequired,
        }),
    ]).isRequired,
    getCurrent: PropTypes.func.isRequired,
    setSignUp: PropTypes.func.isRequired,
    // currentData: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Authentication));
