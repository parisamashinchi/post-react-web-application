import SettingStyle from "../setting/setting.style";
import React from "react";
import {Avatar, Card, Col, Divider, Row, Button, Switch} from "antd";
import { UserOutlined } from '@ant-design/icons';

const Setting = ()=> {
    function onChange(checked) {
        console.log(`switch to ${checked}`);
    }
    return (
        <SettingStyle>
            <Row className="head">
                <p>Kamyar</p>
                <Avatar size={64} icon={<UserOutlined />} />
            </Row>
            <Col span={14}>
                <Card  bordered={false} >
                    <div>
                        <span className="card-text">Email:  abbasGharib@gamil.com</span>
                        <span className="verify">Verified</span>
                    </div>
                    <Divider />
                    <div>
                        <span className="card-text">Phone:    032893903284</span>
                        <Button className="invalid-btn">Invalid</Button>
                    </div>
                </Card>
            </Col>
            <Col span={14}>
                <Card  bordered={false} >
                    <div>
                        <span className="card-text">Sms notification</span>
                        <Switch defaultChecked onChange={onChange} />
                    </div>
                    <Divider />
                    <div>
                        <span className="card-text">Email notification</span>
                        <Switch  onChange={onChange} />
                    </div>
                </Card>
            </Col>
        </SettingStyle>
    )
}
export default Setting