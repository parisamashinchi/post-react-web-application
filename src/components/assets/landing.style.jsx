import styled from 'styled-components';

const LandingStyle = styled.div`
     .ant-col-1, .ant-col-2, .ant-col-3, .ant-col-4,
     .ant-col-5, .ant-col-6, .ant-col-7, .ant-col-8,
     .ant-col-9, .ant-col-10, .ant-col-11, .ant-col-12,
     .ant-col-13, .ant-col-14, .ant-col-15, .ant-col-16,
     .ant-col-17, .ant-col-18, .ant-col-19, .ant-col-20,
     .ant-col-21, .ant-col-22, .ant-col-23, .ant-col-24
     .ant-col-xs-10, .ant-col-xs-14, .ant-col-xs-11, .ant-col-xs-13,
     .ant-col-xl-1, .ant-col-xl-2, .ant-col-xl-3, .ant-col-xl-4,
     .ant-col-xl-5, .ant-col-xl-6, .ant-col-xl-7, .ant-col-xl-8, 
     .ant-col-xl-9, .ant-col-xl-10, .ant-col-xl-11, .ant-col-xl-12,
     .ant-col-xl-13, .ant-col-xl-14, .ant-col-xl-15, .ant-col-xl-16, 
     .ant-col-xl-17, .ant-col-xl-18, .ant-col-xl-19, .ant-col-xl-20,
     .ant-col-xl-21, .ant-col-xl-22, .ant-col-xl-23, .ant-col-xl-24,
     .ant-col-xxl-1, .ant-col-xxl-2, .ant-col-xxl-3, .ant-col-xxl-4,
     .ant-col-xxl-5, .ant-col-xxl-6, .ant-col-xxl-7, .ant-col-xxl-8,
     .ant-col-xxl-9, .ant-col-xxl-10, .ant-col-xxl-11, .ant-col-xxl-12,
     .ant-col-xxl-13, .ant-col-xxl-14, .ant-col-xxl-15, .ant-col-xxl-16,
     .ant-col-xxl-17, .ant-col-xxl-18, .ant-col-xxl-19, .ant-col-xxl-20,
     .ant-col-xxl-21, .ant-col-xxl-22, .ant-col-xxl-23, .ant-col-xxl-24
      { float: left;}
     h2 {
        font-size: 2.5em;
        @media (max-width: 576px){
            font-size: 1.5em;
        }
     }
     p {
        font-size: 1.1em;
         @media (max-width: 576px){
            font-size: 1em;
        }
     }
    .ant-layout {
        background: transparent;
        text-align: center;
        .ant-layout-header {
           text-align: right;
           padding: 20px 40px;
           background: white;
           .sign{
              color: rgb(255 255 255);
              background: #8981cc;
              border-color: #8981cc;
              border-radius: 10px;
           }
           .logo{
              float right;
              position: absolute;
              font-weight: bold;
              font-size: 20px;
           }
           .out {
              color: #8981cc;
           }
           .box{
              color: #deb962;
           }
           .ant-menu-item {
                background-color: #8981cc;
                width: fit-content;
                float: right;
                list-style: none;
                 padding: 10px;
                border-radius: 10px;
                color: white
           }
        }
        .ant-layout-content {
            padding: 160px 100px;
            background-image: url(${require('./images/Graphic-back.png').default});
            background-repeat: no-repeat;
            background-position: 50% 20%;
            background-size: 20%;
            .title {
                font-size: 40px;
                color: #8c7ab5;
                margin: 10px
            }
            .sub-title {
              color: #a9a6a6;
               font-size: 20px;
               margin: 10px;
            }
            .emoji {
              width: 40px;
              margin-left: 10px
            }
            .message-title {
              font-size: 30px;
              color: #8c7ab5;
              margin: 100px 0 0 0;
            }
            .message-sub-title {
             color: #8c7ab5;
            }
            .delivery {
                background-color: #8981cc;
                color: white;
                padding: 15px 25px;
                border-radius: 40px;
                font-size: 17px;
                border: none;
                height: 55px;
                display: block;
                margin: 30px auto;
             }
        }
    }
    .ant-layout-header {
        height: 0;
        padding: 0;
        z-index: 1000;
        ul {
          width: 50%;
          float: right;
        }
        @media (max-width: 576px){
           line-height: 30px;
       }
     }
    .ant-layout-content {
        z-index: 0;
    }
    .ant-layout-footer {
        padding: 0;
     }
   
     .ant-form {
         margin-bottom: 150px;
        button {
          margin-left: 10px;
          border-radius: 20px;
          height: 52px;
          background: #8981cc;
          border-color: #8981cc;
          margin-top: 45px;
        }
         input {
            height: 0px!important;
            border-radius: 20px!important;
         }
         img {
            width: 25px;
         }  
         .ant-divider {
          position: relative;
          top: 35px;
          margin: 20px auto!important;
          width:40%;
          min-width: 40%;
          .ant-divider-horizontal.ant-divider-with-text::before, .ant-divider-horizontal.ant-divider-with-text::after{
            border-width: 2px
          }
        }
        .form-bottom {
          margin-right: 60px;
          margin-top: 35px;
        }
      
      .ant-form-item {
        width: 200px;
        display: inline-block;
        text-align: left;
        margin: 40px 10px 0;
        .ant-picker{
           height: 65px;
           border-radius: 8px;
           box-shadow: 0px 0px 5px 0px #d7c6fd;
        }
        .ant-select {
          width: 200px;
          height: 3em;
          position: absolute;
          top: 0;
          left: 0;
          .ant-select-selector{
            height: 65px;
            border-radius: 8px;
            box-shadow: 0px 0px 5px 0px #d7c6fd;
            .ant-select-selection-item, .ant-select-selection-placeholder{
              position: relative;
              top: 26px;
              left: 42px;
            }
         }
         .ant-select-arrow {
          color: #625975;
         }
        }
        .ant-form-item-label{
            position: absolute;
            z-index: 999;
            padding: 6px 20px;
            label{
               color: #625975;
               font-weight:bold;
               img {
                  width: 14px;
                  margin-right: 20px;
               }
             }
          }    
      } 
      .message-form{
          margin: 0 auto;
          width: 270px;
          .ant-form-item {
            margin:0
          }
          input{
            height: 51px!important;
          }
          button {
            margin-top: 0
          }       
      }
      .ant-layout-footer {
          background: #8981cc;
          color: white;
          padding: 60px;
          .ant-col{
              padding: 0 90px;
              text-align: left
          .right {
              margin-top: 60px;
          }
          ul {
            list-style: none;
            li {
              margin: 15px 0;
            }
            a {
              color: white
            }
          }
          h1 {
              color: white;
              font-size:40px;
              margin:0;
              line-height: 45px;
          }
          p {
             margin-top: 10px;
           }
      }
     
  `;
export default LandingStyle;
