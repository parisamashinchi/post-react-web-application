import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Col, Modal} from 'antd';
import {  IntlProvider } from 'react-intl';
import get from 'lodash/get';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import { createForm } from '../../containers/form/Form';
import * as actions from './actions';
// import * as images from './assets/images';
import ConfirmCode from './confirm-code/ConfirmCode';
import { ArrowLeftOutlined } from '@ant-design/icons';

/*
 SignUp is a component to show sign up form to user
 */
export class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state={
            isModalVisible: false
        }
        this.form = createForm('signUp');
    }
    showEnterCodeMobile = (values) =>{
        this.setState({
            isModalVisible:true,
            mobile_num: values.Phone
        })

    }
     handleCancel = () => {
         this.setState({
             isModalVisible:false
         })
    };

    render() {
        const { signUp, signedData, lang } = this.props;
        const { phone, isModalVisible} = this.state;
        const Form = this.form;
        const targetTime = new Date().getTime() + 60;
        return (
                <div>
                    <IntlProvider locale={lang} >
                        <div className="form signUp">
                            <p>Enter either by umber or email.</p>
                            <Form
                            submitButton={{
                                text: 'Register and login ->',
                            }}
                            initialValues={{
                                email: signedData.email || '',
                                phone: signedData.phone || '',
                                password: signedData.password || '',
                                repeatPassword: signedData.repeatPassword || '',
                            }}
                            validationSchema={yup.object().shape({
                                email: yup.string()
                                    .email('please enter your email')
                                    .required('please enter your email '),
                                phone: yup.string()
                                    .required('please enter your phone number')
                                    .matches(/^\d+$/, "signUp.error.phoneNumberOnlyNumeric")
                                    .test('length', "signUp.error.phoneNumberLength", (val) => {
                                        if (val) {
                                            return (val.length === 11);
                                        }
                                    }),
                                password: yup.string()
                                    .min(8,'please enter more than 8 character')
                                    .required('please enter your password '),
                                repeatPassword: yup.string().oneOf(
                                    [yup.ref('password')],
                                    'The password does not match.',
                                )
                                    .required('please repeat your password ')
                            })}
                            fields={{
                                email: {
                                    name: 'email',
                                    label: 'Email',
                                    type: 'text',
                                    placeholder: 'Enter your email ',
                                    icon: 'fa-user',
                                    className:'email'
                                },
                                phone: {
                                    name: 'phone',
                                    label: 'Phone',
                                    type: 'tel',
                                    icon: 'fa-phone',
                                    placeholder: 'Enter your phone number',
                                },
                                password: {
                                    name: 'password',
                                    label: 'password',
                                    type: 'password',
                                    placeholder: 'Enter your password ',
                                    icon: 'fa-user',
                                },
                                repeatPassword: {
                                    name: 'repeatPassword',
                                    label: 'Repeat password',
                                    type: 'password',
                                    placeholder: 'Repeat your password ',
                                    icon: 'fa-user',
                                },
                                // rule: {
                                //     name: 'rule',
                                //     label: 'I accept the terms and conditions of this service.',
                                //     type: 'Radio',
                                //     placeholder: '',
                                //     icon: 'fa-user',
                                // },
                            }}
                            customSubmit={values => this.showEnterCodeMobile(values)}
                            requestType="post"
                        />

                        <div className="or">
                            <span>
                              Or
                            </span>
                        </div>
                        <Col span={24} className="images">
                            <img src="../../assets/images/google.png" alt="gmail" />
                            <img src="./assets/images/facebook.png" alt="facebook" />
                        </Col>
                    </div>
                        <Modal visible={isModalVisible}
                               onCancel={this.handleCancel}
                               footer={[]}
                               bodyStyle={{ padding: '100px', textAlign: 'center', input:{height: '30px'}}}
                               style={{input:{height: '30px'}}}
                        >
                            <p>The verification code is sent to </p>
                            <p>{phone}</p>
                            <ConfirmCode />
                            <a onClick={()=>this.setState({isModalVisible: false})}>
                                <ArrowLeftOutlined />
                                Edit phone number
                            </a>
                        </Modal>
                    </IntlProvider>
                </div>
        );
    }
}

/*
 mapStateToProps is a function that we
 use to get data from redux state
 resetCounterValue in redux state will show us boolean of reset counter
 */
const mapStateToProps = state => ({
    // lang: state.locale.lang,
    signedData: get(state.Authentication, 'signedData', {}),
});

/*
 mapDispatchToProps is a function that we
 use to dispatch actions from redux
 showModal is action to handle show or hide modal
 signUp is action to handle sign up request to server
 */
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        signUp: actions.signUp,
        getCurrent: actions.getCurrent,
    }, dispatch);
}

SignUp.propTypes = {
    // lang: PropTypes.string.isRequired,
    signUp: PropTypes.func.isRequired,
    getCurrent: PropTypes.func.isRequired,
    signedData: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
