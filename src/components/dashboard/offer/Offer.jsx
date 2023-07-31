import { FormattedMessage, IntlProvider } from 'react-intl';
import OfferStyle from "../offer/offer.style";
import {Avatar, Card, Badge, Col, Row, Divider, Form, Select, DatePicker} from 'antd';
import { UserOutlined, SmileTwoTone } from '@ant-design/icons';

const Offer = ()=> {
    const [form] = Form.useForm();
    const { Option } = Select;
    const onFinish = (values) => {
        console.log(values);
    };
    function onOk(value) {
        console.log('onOk: ', value);
    }
    return (
        <OfferStyle>
            <Row className="head">
                <p>Kamyar</p>
                <Avatar size={64} icon={<UserOutlined />} />
            </Row>
            <Form form={form}  onFinish={onFinish} className="offer-form">
                <Form.Item >
                    <Select
                        placeholder="origin"
                        // onChange={onGenderChange}
                        allowClear
                    >
                        <Option value="male">male</Option>
                        <Option value="female">female</Option>
                        <Option value="other">other</Option>
                    </Select>
                </Form.Item>
                <Form.Item>
                    <Select
                        placeholder="Destination"
                        // onChange={onGenderChange}
                        allowClear
                    >
                        <Option value="male">male</Option>
                        <Option value="female">female</Option>
                        <Option value="other">other</Option>
                    </Select>
                </Form.Item>
                <Form.Item >
                    <DatePicker placeholder ="Send Date" showTime  onOk={onOk} />
                </Form.Item>
                <Form.Item >
                    <DatePicker placeholder ="Delivery Date" showTime  onOk={onOk} />
                </Form.Item>
            </Form>
            <Row>
                    <Col span={8}>
                        <Badge count={10}>
                            <Card  bordered={false}  className="review">
                                <div className="arrow-image">
                                    <img src={require('../assets/images/circle 1.jpg').default}/>
                                    - - -
                                    <img src={require('../assets/images/arrow.png').default}/>
                                    - - -
                                    <img src={require('../assets/images/circle 1.jpg').default}/>

                                </div>
                                <Row className="where-section">
                                    <Col span={12}>
                                        <p> Tehran</p>
                                        <sub>20 Jan 2021</sub>
                                    </Col>
                                    <Col span={12}>
                                        <p>Berlin</p>
                                        <sub>28 Jan 2021</sub>
                                    </Col>
                                </Row>
                                <Divider />
                                <Row>
                                    <img  className="box-icon" src={require('../../assets/images/medium box version on.png').default}/>
                                    <span className="offer-content">
                                        <b>Cost/Cargo</b>
                                        <sub>$ 18.5/ Medium box</sub>
                                    </span>
                                </Row>
                                <Row>
                                    <Col span={12}>
                                        <a href="" className="request-btn"><b>Requests</b></a>
                                    </Col>
                                    <Col span={12}>
                                        <Avatar size={30} icon={<UserOutlined />}  className="avatar-1"/>
                                        <Avatar size={30} icon={<UserOutlined />}  className="avatar-2" />
                                        <Avatar size={30}  className="avatar-3">s</Avatar>
                                    </Col>
                                </Row>
                            </Card>
                        </Badge>
                    </Col>
                    <Col span={8}>
                        <Card  bordered={false}  className="review">
                            <div className="arrow-image">
                                <img src={require('../assets/images/circle 1.jpg').default}/>
                                - - -
                                <img src={require('../assets/images/arrow.png').default}/>
                                - - -
                                <img src={require('../assets/images/circle 1.jpg').default}/>

                            </div>
                            <Row className="where-section">
                                <Col span={12}>
                                    <p> Tehran</p>
                                    <sub>20 Jan 2021</sub>
                                </Col>
                                <Col span={12}>
                                    <p>Berlin</p>
                                    <sub>28 Jan 2021</sub>
                                </Col>
                            </Row>
                            <Divider />
                            <Row>
                                <img  className="box-icon" src={require('../../assets/images/medium box version on.png').default}/>
                                <span className="offer-content">
                                        <b>Cost/Cargo</b>
                                        <sub>$ 18.5/ Medium box</sub>
                                    </span>
                            </Row>
                            <Row>
                                <Col span={12}>
                                    <a href="" className="request-btn"><b>Requests</b></a>
                                </Col>
                                <Col span={12}>
                                   <span className="empty">Empty</span>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Badge count={8}>
                            <Card  bordered={false}  className="review">
                                <div className="arrow-image">
                                    <img src={require('../assets/images/circle 1.jpg').default}/>
                                    - - -
                                    <img src={require('../assets/images/arrow.png').default}/>
                                    - - -
                                    <img src={require('../assets/images/circle 1.jpg').default}/>

                                </div>
                                <Row className="where-section">
                                    <Col span={12}>
                                        <p> Tehran</p>
                                        <sub>20 Jan 2021</sub>
                                    </Col>
                                    <Col span={12}>
                                        <p>Berlin</p>
                                        <sub>28 Jan 2021</sub>
                                    </Col>
                                </Row>
                                <Divider />
                                <Row>
                                    <img  className="box-icon" src={require('../../assets/images/medium box version on.png').default}/>
                                    <span className="offer-content">
                                        <b>Cost/Cargo</b>
                                        <sub>$ 18.5/ Medium box</sub>
                                    </span>
                                </Row>
                                <Row>
                                    <Col span={12}>
                                        <a href="" className="request-btn"><b>Requests</b></a>
                                    </Col>
                                    <Col span={12}>
                                        <Avatar size={30} icon={<UserOutlined />}  className="avatar-1"/>
                                        <Avatar size={30} icon={<UserOutlined />}  className="avatar-2" />
                                        <Avatar size={30}  className="avatar-3">s</Avatar>
                                    </Col>
                                </Row>
                            </Card>
                        </Badge>
                    </Col>
                </Row>
            <Row>
                <Col span={8}>
                    <Badge count={<img src={require('../../assets/images/Accept icon.png').default} className="ok-badge"/>} >
                        <Card  bordered={false}  className="review">
                            <div className="arrow-image">
                                <img src={require('../assets/images/circle 1.jpg').default}/>
                                - - -
                                <img src={require('../assets/images/arrow.png').default}/>
                                - - -
                                <img src={require('../assets/images/circle 1.jpg').default}/>

                            </div>
                            <Row className="where-section">
                                <Col span={12}>
                                    <p> Tehran</p>
                                    <sub>20 Jan 2021</sub>
                                </Col>
                                <Col span={12}>
                                    <p>Berlin</p>
                                    <sub>28 Jan 2021</sub>
                                </Col>
                            </Row>
                            <Divider />
                            <Row>
                                <img  className="box-icon" src={require('../../assets/images/medium box version on.png').default}/>
                                <span className="offer-content">
                                        <b>Cost/Cargo</b>
                                        <sub>$ 18.5/ Medium box</sub>
                                    </span>
                            </Row>
                            <Row>
                                <Col span={12}>
                                    <a href="" className="request-btn"><b>Requests</b></a>
                                </Col>
                                <Col span={12}>
                                    <Avatar size={30} icon={<UserOutlined />}  className="avatar-1"/>
                                    <Avatar size={30} icon={<UserOutlined />}  className="avatar-2" />
                                    <Avatar size={30}  className="avatar-3">s</Avatar>
                                </Col>
                            </Row>
                        </Card>
                    </Badge>
                </Col>
                <Col span={8}>
                    <Badge count={<img src={require('../../assets/images/Accept icon.png').default} className="ok-badge"/>} >
                        <Card  bordered={false}  className="review">
                            <div className="arrow-image">
                                <img src={require('../assets/images/circle 1.jpg').default}/>
                                - - -
                                <img src={require('../assets/images/arrow.png').default}/>
                                - - -
                                <img src={require('../assets/images/circle 1.jpg').default}/>

                            </div>
                            <Row className="where-section">
                                <Col span={12}>
                                    <p> Tehran</p>
                                    <sub>20 Jan 2021</sub>
                                </Col>
                                <Col span={12}>
                                    <p>Berlin</p>
                                    <sub>28 Jan 2021</sub>
                                </Col>
                            </Row>
                            <Divider />
                            <Row>
                                <img  className="box-icon" src={require('../../assets/images/medium box version on.png').default}/>
                                <span className="offer-content">
                                        <b>Cost/Cargo</b>
                                        <sub>$ 18.5/ Medium box</sub>
                                    </span>
                            </Row>
                            <Row>
                                <Col span={12}>
                                    <a href="" className="request-btn"><b>Requests</b></a>
                                </Col>
                                <Col span={12}>
                                    <Avatar size={30} icon={<UserOutlined />}  className="avatar-1"/>
                                    <Avatar size={30} icon={<UserOutlined />}  className="avatar-2" />
                                    <Avatar size={30}  className="avatar-3">s</Avatar>
                                </Col>
                            </Row>
                        </Card>
                    </Badge>
                </Col>
                <Col span={8}>
                    <Badge count={<img src={require('../../assets/images/Accept icon.png').default} className="ok-badge"/>} >
                        <Card  bordered={false}  className="review">
                            <div className="arrow-image">
                                <img src={require('../assets/images/circle 1.jpg').default}/>
                                - - -
                                <img src={require('../assets/images/arrow.png').default}/>
                                - - -
                                <img src={require('../assets/images/circle 1.jpg').default}/>

                            </div>
                            <Row className="where-section">
                                <Col span={12}>
                                    <p> Tehran</p>
                                    <sub>20 Jan 2021</sub>
                                </Col>
                                <Col span={12}>
                                    <p>Berlin</p>
                                    <sub>28 Jan 2021</sub>
                                </Col>
                            </Row>
                            <Divider />
                            <Row>
                                <img  className="box-icon" src={require('../../assets/images/medium box version on.png').default}/>
                                <span className="offer-content">
                                        <b>Cost/Cargo</b>
                                        <sub>$ 18.5/ Medium box</sub>
                                    </span>
                            </Row>
                            <Row>
                                <Col span={12}>
                                    <a href="" className="request-btn"><b>Requests</b></a>
                                </Col>
                                <Col span={12}>
                                    <Avatar size={30} icon={<UserOutlined />}  className="avatar-1"/>
                                    <Avatar size={30} icon={<UserOutlined />}  className="avatar-2" />
                                    <Avatar size={30}  className="avatar-3">s</Avatar>
                                </Col>
                            </Row>
                        </Card>
                    </Badge>
                </Col>
            </Row>
        </OfferStyle>
    )
}
export default Offer