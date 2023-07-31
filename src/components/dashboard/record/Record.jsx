import RecordStyle from "../record/record.style";
import {Avatar, Row , Button, Table} from "antd";
import { UserOutlined } from '@ant-design/icons';

const Record = ()=> {
    const columns = [
        {
            title: 'No.',
            dataIndex: 'no',
            key: 'no',
        },
        {
            title: 'Request id',
            dataIndex: 'request',
            key: 'request',
        },
        {
            title: 'Origin',
            dataIndex: 'origin',
            key: 'origin',
        },
        {
            title: 'Destination',
            dataIndex: 'destination',
            key: 'destination',
        },
        {
            title: 'S date',
            dataIndex: 's_date',
            key: 's_date',
        },
        {
            title: 'D date',
            dataIndex: 'd_date',
            key: 'd_date',
        },
        {
            title: 'Courier',
            dataIndex: 'courier',
            key: 'courier',
        },
        {
            title: 'Payment',
            dataIndex: 'payment',
            key: 'payment',
        },
        {
            title: 'Last status',
            dataIndex: 'status',
            key: 'status',
        },
        ];
    const data = [
        {
            no: '1453',
            request: '134243',
            origin: 'tehran',
            destination: 'Berlin',
            s_date: "2021.3.2",
            d_date: "2021.2.1",
            courier: '21324',
            payment: "$24.00" ,
            status: "Done"
        },
        {
            no: '1453',
            request: '134243',
            origin: 'tehran',
            destination: 'Berlin',
            s_date: "2021.3.2",
            d_date: "2021.2.1",
            courier: '21324',
            payment: "$24.00" ,
            status: "Done"
        },
        {
            no: '1453',
            request: '134243',
            origin: 'tehran',
            destination: 'Berlin',
            s_date: "2021.3.2",
            d_date: "2021.2.1",
            courier: '21324',
            payment: "$24.00" ,
            status: "Done"
        },
    ];

    return (
        <RecordStyle>
            <Row className="head">
                <p>Kamyar</p>
                <Avatar size={64} icon={<UserOutlined />} />
            </Row>
            <h4>Your requests</h4>
            <Button>Export</Button>
            <Table columns={columns} dataSource={data} bordered={true} pagination={false}/>


            <h4>Your offers</h4>
            <Button>Export</Button>
            <Table columns={columns} dataSource={data} bordered={true} pagination={false}/>
        </RecordStyle>
    )
}
export default Record