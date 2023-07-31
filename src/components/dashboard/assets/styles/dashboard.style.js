import styled from 'styled-components';

const DashboardStyle = styled.div`
    padding: 20px 50px;
    .content {
        padding: 50px;
        background-color : whitesmoke
    }
    .logo {
         float right;
         position: absolute;
         font-weight: bold;
         font-size: 22px;
    }
    .out {
         color: #8981cc;
    }
    .box {
        color: #deb962;
    }
    .menu-btn {
        border-radius: 20px;
        background: #8981cc;
        border: 1px solid #8981cc;
        margin-top:110px;
        color: white;
        height: 40px;
        width: 122px;
        font-size: 16px;
        line-height: 30px;
        padding: 0 10px;
        img {
            width: 17px;
            float: right;
            padding: 7px 0;
        }
    }
    ul {
        list-style: none;
        padding: 0;
        margin-top: 30px;
        li {
            padding-left: 0!important;
            margin-bottom: 15px;
            cursor: pointer;
            img {
               width: 35px;
               margin-right: 20px;
            }
            span {
                top: -10px;
                position: relative;
                a {
                    color: #a5a4a4;
                    text-decoration: none
                 }
            }
        }
        .ant-menu-item-selected{
            background-color: #ffffff;
              border: none!important;
            &:after {
                border-right: none!important;
            }
            span a{
                color: #8981cc;
            }
        }
    }
  
`;

export default DashboardStyle;
