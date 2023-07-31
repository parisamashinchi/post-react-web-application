import styled from 'styled-components';

const ProfileStyle = styled.div`
   .head {
     justify-content: flex-end;
     margin-bottom: 50px;
      p {
        margin: 20px;
        color: gray;
        font-size: 16px;
      }
   }
    .ant-card {
        border-radius: 10px;
    }
    .ant-card-body {
        font-size: 17px;
        color: #9e9e9e;
        margin-bottom: 50px;
        .invalid-btn {
            margin: 0;
            float: right;
            background-color: #ef9a5e;
            border-color: #ef9a5e;
            width: 80px;
            height: 35px;
            color: white;
            border-radius: 20px;
            margin-right: 65px;
        }
        .ant-switch {
            float: right;
             margin-right: 80px;
             width: 60px
        }
        .ant-switch-checked {
            background-color: #8981cc;
        }
        .card-text {
            float: left;
            margin-bottom: 20px;
            font-size: 16px;
        }
        .verify {
            float: right;
            margin-right: 80px;
            font-size: 16px;
        }
        .ant-divider-horizontal {
            margin: 0 0 15px 0;
        }
    }
`;

export default ProfileStyle;
