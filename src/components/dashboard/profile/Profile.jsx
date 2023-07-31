import { FormattedMessage, IntlProvider } from 'react-intl';
import ProfileStyle from "../profile/profile.style";
import React,{ useState } from "react";
import {Avatar, Card, Rate, Col, Row, Divider, Progress} from 'antd';
import { UserOutlined, SmileTwoTone } from '@ant-design/icons';

const Profile = ()=> {
    const [value, setValue] = useState(3);
    const handleChange = value => {
        setValue(value)
    };
    return (
        <ProfileStyle>
            <Row className="head">
                <Col span={2}>
                    <Avatar size={64} icon={<UserOutlined />} />
                </Col>
                <Col span={20}>
                    <h2>Kamran Pakdaman</h2>
                    <p>I am jhon i deliver box for you.</p>
                    <p>Ping me in case of need.</p>
                </Col>
                <Col span={2}>
                    <a>Edit</a>
                </Col>
            </Row>
            <Row className="site-card-border-less-wrapper">
                <Col span={12}>
                    <Card title="Your Score" bordered={false} >
                        <div>
                            <span className="card-text">Score as a requester</span>
                            <Rate onChange={handleChange} value={value} />
                            <span className="card-num">2/5</span>
                        </div>
                        <Divider />
                        <div>
                            <span className="card-text">Score as a courier</span>
                            <Rate onChange={handleChange} value={value} />
                            <span className="card-num">3/5</span>
                        </div>
                    </Card>
                    <Card  bordered={false} >
                        <p>
                            Request you have abandoned
                            <Avatar>23</Avatar>
                            <Progress type="circle" percent={30} width={80} />
                        </p>
                        <sub>(based on courier report)</sub>
                        <p>
                            Offers you have abandoned
                            <Avatar>23</Avatar>
                            <Progress type="circle" percent={30} width={80} />
                        </p>
                        <sub>(based on requester report)</sub>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card  bordered={false} >
                        <p>
                            Your requests fulfilled by other courier:
                            <span><Avatar>18</Avatar></span>
                        </p>
                        <p>
                            Other's requests fulfilled by you:
                            <span><Avatar>32</Avatar></span>
                        </p>
                    </Card>
                    <Card  bordered={false}  className="cancel">
                        <p>
                            Requests you have cancelled:
                            <Avatar>23</Avatar>
                            <Progress type="circle" percent={30} width={80} />
                        </p>
                        <p>
                            Offers you have cancelled:
                            <Avatar>23</Avatar>
                            <Progress type="circle" percent={30} width={80} />
                        </p>
                    </Card>
                </Col>
            </Row>
            <h4>Latest review</h4>
            <Row>
                <Col span={12}>
                    <Card  bordered={false}  className="review">
                        <div className="arrow-image">
                            <img src={require('../assets/images/circle 1.jpg').default}/>
                            - - -
                            <img src={require('../assets/images/arrow.png').default}/>
                            - - -
                            <img src={require('../assets/images/circle 1.jpg').default}/>

                            <img  className="box-icon" src={require('../assets/images/Graphic icon.png').default}/>
                        </div>
                        <Row>
                            <Col span={6}>
                                <p> Tehran</p>
                                <sub>20 Jan 2021</sub>
                            </Col>
                            <Col span={6}>
                                <p>Berlin</p>
                                <sub>28 Jan 2021</sub>
                            </Col>
                            <Col span={6}>
                                <p>Cargo</p>
                                <sub>6 Medium box</sub>
                            </Col>
                            <Col span={6} className="status">
                                <sub>Delivered</sub>
                            </Col>
                        </Row>
                        <Divider />
                        <Row>
                            <Col span={20}>
                                <p className="review-comment">Kamyar was available and we could smoothly coordinate on delivery. thanks</p>
                            </Col>
                            <Col span={4}>
                                <SmileTwoTone twoToneColor="#eb2f96"/>
                            </Col>
                        </Row>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card  bordered={false}  className="review">
                        <div className="arrow-image">
                            <img src={require('../assets/images/circle 1.jpg').default}/>
                            - - -
                            <img src={require('../assets/images/arrow.png').default}/>
                            - - -
                            <img src={require('../assets/images/circle 1.jpg').default}/>

                            <img  className="box-icon" src={require('../assets/images/Graphic icon.png').default}/>
                        </div>
                        <Row>
                            <Col span={6}>
                                <p> Tehran</p>
                                <sub>20 Jan 2021</sub>
                            </Col>
                            <Col span={6}>
                                <p>Berlin</p>
                                <sub>28 Jan 2021</sub>
                            </Col>
                            <Col span={6}>
                                <p>Cargo</p>
                                <sub>6 Medium box</sub>
                            </Col>
                            <Col span={6} className="status">
                                <sub>Fulfilled</sub>
                            </Col>
                        </Row>
                        <Divider />
                        <Row>
                            <Col span={20}>
                                <p className="review-comment">Kamyar was Ride Too FANTANCY</p>
                            </Col>
                            <Col span={4}>
                                <SmileTwoTone twoToneColor="#eb2f96"/>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </ProfileStyle>
    )
}
export default Profile