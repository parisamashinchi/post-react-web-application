import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout, Button , Menu, Form, Input, Select, Divider, Row, Col, DatePicker } from 'antd';
import { bindActionCreators } from 'redux';
import get from 'lodash/get';
import LoadingStyle from './assets/landing.style';
import { FormattedMessage, IntlProvider } from 'react-intl';
import 'antd/dist/antd.css';
;

const { Header, Footer, Content } = Layout;

const LandingPage = (props)=> {
    const handleSing = () =>{
        props.history.push('authentication');
    }
     const onFinish = (values) => {
        console.log(values);
    };
    function onOk(value) {
        console.log('onOk: ', value);
    }
    const { loginAction, lang } = props;
    const { Option } = Select;
    const [form] = Form.useForm();
        return (
            <IntlProvider locale={lang} >
                <LoadingStyle>
                    <Layout>
                        <Header>
                            <p className="logo"><span className="out">Out</span><span className="box">box</span></p>
                            <Button className="sign" onClick={handleSing}>
                                Sign up
                            </Button>
                        </Header>
                        <Content>
                            <span className="title">Send <b>whatever</b> you want</span>
                            <img src={require('./assets/images/Emoji.png').default}  className="emoji"/>
                            <p className="sub-title">Enter your information and search</p>
                            <Form form={form}  onFinish={onFinish}>
                                <Form.Item label={<div><img src={require('./assets/images/orgin-icon.png').default}/><span>origin</span></div>}  >
                                    <Select
                                        placeholder="Tehran"
                                        // onChange={onGenderChange}
                                         allowClear
                                    >
                                        <Option value="male">male</Option>
                                        <Option value="female">female</Option>
                                        <Option value="other">other</Option>
                                    </Select>
                                </Form.Item>
                                <Form.Item label={<div><img src={require('./assets/images/orgin-icon.png').default}/><span>Destination</span></div>}   >
                                    <Select
                                        placeholder="Berlin"
                                        // onChange={onGenderChange}
                                        allowClear
                                    >
                                        <Option value="male">male</Option>
                                        <Option value="female">female</Option>
                                        <Option value="other">other</Option>
                                    </Select>
                                </Form.Item>
                                <Form.Item label={<div><img src={require('./assets/images/send-icon.png').default}/><span>Sent Date</span></div>} >
                                    <DatePicker showTime  onOk={onOk} />
                                </Form.Item>
                                {/*<Form.Item>*/}
                                <Button type="primary" htmlType="submit">
                                    <img src={require('./assets/images/Search-icon.png').default}/>
                                </Button>
                                {/*</Form.Item>*/}
                                <Divider  plain>Advance Search</Divider>
                                <div className="form-bottom">
                                    <Form.Item label={<div><img src={require('./assets/images/train-icon.png').default}/><span>Vehicle type</span></div>}  >
                                        <Select
                                            placeholder="Train"
                                            // onChange={onGenderChange}
                                            allowClear
                                        >
                                            <Option value="Airplane">
                                                <img src={require('./assets/images/Airplane icon.png').default}/>
                                                Airplane
                                            </Option>
                                            <Option value="Train">
                                                <img src={require('./assets/images/train-icon.png').default}/>
                                                Train
                                            </Option>
                                            <Option value="Bus">
                                                <img src={require('./assets/images/bus icon.png').default}/>
                                                Bus
                                            </Option>
                                            <Option value="Car">
                                                <img src={require('./assets/images/car icon.png').default}/>
                                                Car
                                            </Option>
                                            <Option value="Ship">
                                                <img src={require('./assets/images/ship icon.png').default}/>
                                                Ship
                                            </Option>
                                        </Select>
                                    </Form.Item>
                                    <Form.Item label="Weight" >
                                        <Select
                                            placeholder="3.5 kg"
                                            // onChange={onGenderChange}
                                            allowClear
                                        >
                                            <Option value="1.5">1.5 kg</Option>
                                            <Option value="2.5">2.5 kg</Option>
                                            <Option value="3">3 kg</Option>
                                        </Select>
                                    </Form.Item>
                                    <Form.Item label={<div><img src={require('./assets/images/box.png').default}/><span>Cargo type</span></div>}  >
                                        <Select
                                            placeholder="Box"
                                            // onChange={onGenderChange}
                                            allowClear
                                        >
                                            <Option value="Box">
                                                <img src={require('./assets/images/Big box icon.png').default}/>
                                                Box
                                            </Option>
                                            <Option value="Box2">
                                                <img src={require('./assets/images/Big box icon.png').default}/>
                                                Box2
                                            </Option>
                                            <Option value="Box3">
                                                <img src={require('./assets/images/Small box icon.png').default}/>
                                                Box3
                                            </Option>
                                            <Option value="Letter">
                                                <img src={require('./assets/images/Doc letter icon.png').default}/>
                                                letter
                                            </Option>
                                            <Option value="liquids">
                                                <img src={require('./assets/images/abshangooli icon.png').default}/>
                                                liquids
                                            </Option>
                                            <Option value="Plastic">
                                                <img src={require('./assets/images/plastic con.png').default}/>
                                                Plastic
                                            </Option>
                                        </Select>
                                    </Form.Item>
                                </div>
                            </Form>
                            <p className="title">The <b>benefits of</b> our <b>product</b></p>
                            <p className="sub-title">Turn your trips into <b>opportunities</b></p>
                            <Button className="delivery">Delivery offer</Button>
                            <img src={require('./assets/images/Benefit.png').default} width="300"/>

                            <p className="message-title">If you are interested in our <b>Product</b></p>
                            <p className="message-sub-title ">Say something ... </p>
                            <Form layout="inline" form={form}  className="message-form" onFinish={onFinish}>
                                <Form.Item
                                    rules={[{ required: true, message: 'Please fill the input!' }]}
                                >
                                    <Input />
                                </Form.Item>
                                {/*<Form.Item>*/}
                                    <Button type="primary" htmlType="submit">
                                        <img src={require('./assets/images/Search-icon.png').default}/>
                                    </Button>
                                {/*</Form.Item>*/}
                            </Form>
                        </Content>
                        <Footer>
                            <Row>
                                <Col span={8}>
                                    <h1>Outbox</h1>
                                    <pre>Send <b>whatever</b> you want</pre>
                                    <p className="right">@2021 Outbox. All right reserved.</p>
                                </Col>
                                <Col span={8}>
                                    <ul>
                                        <li>
                                            <a href="" >About </a>
                                        </li>
                                        <li>
                                            <a href="" >Contact </a>
                                        </li>
                                        <li>
                                            <a href="" >Terms of service </a>
                                        </li>
                                        <li>
                                            <a href="" >Support</a>
                                        </li>
                                    </ul>
                                </Col>
                                <Col span={8}>
                                    <p>Berlin,cfsd, dsdsde</p>
                                    <p>5555,dsfs</p>
                                    <p>09428428983012</p>
                                </Col>
                            </Row>
                        </Footer>
                    </Layout>
                </LoadingStyle>
            </IntlProvider>
        );
    }


const mapStateToProps = state => ({
    // langLoading: state.locale.langLoading,
    // isAuth: state.Authentication.isAuth,
    loadData: get(state.LoadingReducer, 'loadData', {}),
});

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        // getUserProfile: profileActions.getUserProfile,
        // showLoading: loadingActions.showLoading,
        // setLocaleLoading: languageActions.setLocaleLoading,
    }, dispatch);
}

LandingPage.propTypes = {
    // lang: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
