import styled from 'styled-components';

const ProfileStyle = styled.div`
   .head {
     margin-bottom: 30px;
     h2 {
        color: #676464;
        text-align: left;
      }
      p {
          text-align : left;
          color: #9e9e9e;
          margin: 0;
      }
      a {
        color: #9e9e9e;
        cursor: pointer;
        font-size: 16px;
      }
    }
    .ant-avatar {
        float: left;
    }
    .card-text {
       float: left;
    }
    .card-num {
       float: right; 
    }
    ul {
      margin-top: 10px;
    }
    .ant-card {
        border-radius: 10px;
    }
    .ant-card-body {
        font-size: 17px;
        color: #9e9e9e;
        margin-bottom: 10px;
        p {
            text-align: left;
            color: #717070;
            margin: 30px 5px 5px 0;
            font-weight: bold;
        }
        .ant-avatar {
            float: right;
            background: #e2e1ec;
            width: 50px;
            height: 50px;
            line-height: 47px;
            font-size: 14px;
            color: rgb(158 158 158);
            font-weight: normal
        }
        sub {
          float: left;
        }
    }
    .ant-rate {
        line-height: 17px
    }
    .ant-divider-horizontal {
        margin: 0 0 15px 0;
    }
    .ant-card-head-title{
        text-align: left;
        color: #848080;
        font-size: 18px;
    }
    .ant-card-head {
        border-bottom: none;
        height: 35px
    }
    .ant-col-12 {
        padding-right: 10px;
    }
    .ant-progress {
        float: right;
        margin-right: 10px;
        .ant-progress-inner {
            width: 50px!important;
            height: 50px!important;
            background: #e2e1ec;
        }
        .ant-progress-text {
            color: rgb(158 158 158);
            font-size: 14px;
            font-weight: normal
        }
        .ant-progress-circle-path {
            stroke: #8981cc;
        }
        .ant-progress-circle-trail {
            stroke: #ededfb!important;
        }
    }
    .cancel {
        .ant-progress-circle-path {
            stroke:red;
        }
    }
    .arrow-image {
        text-align: left
    }
    h4 {
        text-align: left;
        color: gray;
        margin-top: 20px;
        margin-left: 20px;
    }
    .review {
        text-align : left;
        height: 220px;
        p {
            color: gray
        }
        .ant-divider-horizontal {
            margin: 24px 0;
        }
        .anticon {
            float: right
        }
        .review-comment{
            font-size : 12px;
            font-weight: normal;
            margin : 0
        }
        .box-icon {
           width: 25px;
           margin-left: 80px;
        }
        .status {
            margin-top: 50px;
            text-align: right
        }
    }
    
`;

export default ProfileStyle;
