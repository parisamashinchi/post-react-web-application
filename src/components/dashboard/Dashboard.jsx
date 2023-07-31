import React, { Component } from 'react';
import {Row, Col, Button, Menu} from 'antd';
import DashboardStyle from './assets/styles/dashboard.style';
import { NavLink } from 'react-router-dom';
import PrivateRoutes from "../../routers/privateRoute";

export class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state={
            current_key: 1
        }
    }
     handleClick = (e) => {
        this.setState({
            current_key: e.key
        })
    }
    render() {
        const {current_key} = this.state;
         return(
            <DashboardStyle>
                <Row>
                    <Col span={4}>
                        <NavLink to="/">
                            <p className="logo"><span className="out">Out</span><span className="box">box</span></p>
                        </NavLink>

                        <Button className="menu-btn">
                            New offer
                            <img src={require('./assets/images/offer-icon.png').default}/>
                        </Button>
                        <Menu
                            defaultSelectedKeys={['1']}
                            mode="inline"
                            onClick={this.handleClick}
                        >
                            <Menu.Item key="1"
                                       icon={current_key == 1
                                           ? <img src={require('./assets/images/profile info on.png').default}/>
                                           : <img src={require('./assets/images/profile info off.png').default}/>
                                        }
                                >
                                <NavLink to="/dashboard/profile" >
                                    Profile
                                </NavLink>
                            </Menu.Item>
                            <Menu.Item key="2"
                                       icon={current_key == 2
                                           ? <img src={require('./assets/images/offer on.png').default}/>
                                           : <img src={require('./assets/images/offer off.png').default}/>
                                       }
                            >
                                <NavLink to="/dashboard/offer" >
                                    Offer
                                </NavLink>
                            </Menu.Item>
                            <Menu.Item key="3"
                                       icon={current_key == 3
                                           ? <img src={require('./assets/images/request on.png').default}/>
                                           : <img src={require('./assets/images/request off.png').default}/>
                                       }
                            >
                                <NavLink to="/dashboard/request" >
                                    Request
                                </NavLink>
                            </Menu.Item>
                            <Menu.Item key="4"
                                       icon={current_key == 4
                                           ? <img src={require('./assets/images/records on.png').default}/>
                                           : <img src={require('./assets/images/records off.png').default}/>
                                       }
                            >
                                <NavLink to="/dashboard/record" >
                                    Records
                                </NavLink>
                            </Menu.Item>
                            <Menu.Item key="5"
                                       icon={current_key == 5
                                           ? <img src={require('./assets/images/setting on.png').default}/>
                                           : <img src={require('./assets/images/setting off.png').default}/>
                                       }
                            >
                                <NavLink to="/dashboard/setting" >
                                    Setting
                                </NavLink>
                            </Menu.Item>
                        </Menu>
                    </Col>
                    <Col span={20} className="content">
                        <PrivateRoutes />
                    </Col>
                </Row>
            </DashboardStyle>
        );
    }
}

export default Dashboard;
