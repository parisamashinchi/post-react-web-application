import styled from 'styled-components';

const AuthenticationStyle = styled.div`
 .elecomp{
    background-size: contain;
    height: 120vh;
    .right-addon input {
        font-size: .8em!important;
        height: 30px!important;
    }
    .right-addon .fa {
        top: 33px !important;
    }
    .ant-btn {
        height: 30px!important;
        font-size: 1em!important;
    }
    .back-section{
        direction:rtl ;
        .back-btn{
            margin: 30px 20px;
            color: white;
            background: #6e69f0;
            border-color: #6e69f0;
            border-radius: 16px;
        }
    }
    
        .confirmCode-number {
            margin: 0 20px;
            text-align: left;
            a {
                float: right;
            }
        }
        .count-down, .ant-statistic-content-value {
           
            font-size: 25px;
        }
    .elecomp-detail{
        padding-top: 10%;
        label {
            font-size: .9em!important;
        }
        p{
            color: white;
            list-style: none;
            padding: 0;
            font-size:1em;
            margin: 0 auto;
            width: 200px;
        }
        .blue-title{
           color: #00ccff;
        } 
        label{
            color: white;
        }
        .signUp {
            margin: 0 auto!important;
            width: 200px;
        }
        #recaptcha {
            transform: scale(0.65);
            transform-origin:0% 60% ;
        }
        @media (max-width: 350px){
             padding-top: 2%;
        }
    }
 }
 .elecomp-confirm{
    text-align: center;
    color: white;
    width: 200px;
    margin: auto;
    padding-top: 15%;
    .confirmCode-number {
        margin: 10px 0!important;
    }
    h3 {
        color: white;
        text-align: left;
    }
    p {
        text-align:left;
    }
    label {
         color: lightblue!important;
    }
    .form {
         margin-top: 20px;
    }
 }
    .size-alert {
        background-image: linear-gradient(to right bottom, #5670b9, #485c9d, #3a4982, #2c3768, #1e264f);

        z-index: 100000;
        height: 100vh;
        width: 100%;
        text-align: center;
        padding-top: 25%;
        .text {
            margin: 20px 25%;
            width: 50%;
        }
    }
    .success {
       font-family: Roboto;
      
       background-size: cover;
       height: 100vh;
       text-align: center;
       color: white;
       padding: 10% 0;
       h1 {
          font-size: 45px;
       }
       h1 , h2 {
          color: white;
       }
       h2 {
          margin-top: 4%;
          margin-bottom: 0;
       }
       p {
          font-size:20px;
       }
       pre {
          color: #B1B6CD;
          font-family: Roboto;
          margin-bottom: 0;
       }
       button {
          margin-top: 5%;
       }
     }

    .background {
      background-color: #f0f2f5;

      padding: 5% 0;
      height: 100vh;
      background-repeat: no-repeat;
      background-size: cover;
      .copyRight {
          font-size: 12px;
          margin-top: 2%;
          color: #B1B6CD;
          text-align: center;
       }
      .ant-col-20 {
        margin: 0 7%;
        border-radius: 10%;
        height: 100%;
      }
      .left {
          border-radius: 7% 0 0 7%;
          height: 100%!important;
        }
      .right {
          border-radius: 0 7% 7% 0;
          height: 100vh;
            .fa-angle-right {
                margin:4% 0;
            }
            .form {
                margin: 10% auto 0 auto;
            }
            .form-with-header {
                margin: 15% auto;
            }
        }
    }
    .back-button {
        float: left;
        direction: ltr;
        margin: 20px 0;
        border-radius: 10px;
        color: black;
        i {
            margin-right: 2px;
        }
    }
    .home-button {
        float: left;
        direction: ltr;
        margin: 20px;
        background-color: #3E4A82;
        color: white;
        border-radius: 10px;
        padding: 10px;
        i {
            margin-right: 5px;
        }
    }
    .left {
        font-family: Roboto;    
        height: 100vh;
        background-repeat: no-repeat;
        background-color: #8981cc;
        background-image: url('${require('./assets/images/graphiv-icon.png').default}');
        background-size: 50%;    
        background-position: 50% 50%;
        padding: 40px 100px;
        h4 {
            color: white;
            font-size: 30px;
            padding-top: 150px;
            text-align: center;
            font-weight: bold;
        }
        .help {
            color: white;
            right: 140px;
            position: relative;
        }
       .anticon-arrow-left {
          color: white;
          float: left;
       }
       .accountExit {
            margin-bottom: 20%;
            font-size: 18px;
            cursor: pointer;
        }
        .disabled {
            color: #6699FF;
        }
        .ready {
            color: white;
        }
        .description {
            color: white;
            margin: 0 auto;
            font-size: 22px;
            text-align: center;
            p {
                margin: 0
            }
        }
        .login {       
            font-size: 18px;
            cursor: pointer;
        }
        .login-status {
            float: right;    
            text-align: right;
            top: 6%;
            position: relative;
            cursor: pointer;
        }        
    }
    
    .half-circle {
        position: absolute;
        left: 0;
        height: 70px;
        top: inherit;
        transition: 1s;
    }
    
    .right {
       background-color: #f0f2f5;
       text-align: center;
       height: 100vh;
       label{
          top: 35px;
          position: relative;
          z-index: 1;
          float: left;
          padding-left: 30px;
          color: gray;
       }
       p{
         color: gray;
         margin-bottom: 0;    
       }
       .home-button {
          color: black;
          background-color: transparent;
       }
       .form {
           margin: 20% auto 0 auto;
           width: 300px
       }
       .form-with-header {
           margin: 15% auto;
           width: 300px
       }
       
       .images {
          text-align: center;
          img {
            width: 50px;
            margin: 5%
          }
       }
       .agreement {
          font-size: 12px;
          margin-top: 10px;
       }
       .or {
            width: 100%;
            margin: 0;
            padding: 0;
            text-align: center;
            margin-top: 5%;
            &:before {
                display: inline-block;
                margin: 0 20px 8px 0;
                height: 1px;
                content: " ";
                text-shadow: none;
                background-color: #999;
                width: 25%;
            }
            &:after {
                display: inline-block;
                margin: 0 0 8px 20px;
                height: 1px;
                content: " ";
                text-shadow: none;
                background-color: #999;
                width: 25%;
            }
        }
        .login {
            float: right;
            margin: 40px;
            color: gray;
        }
        .login-options {
            margin: 3%;
            text-align: center;
        }
        .logo-type {
            img {
                width: 100px;
            }
            margin-top: 15%;
            @media (min-width: 767px){
                display: none;
            }
        }
        .confirmCode-number {
            margin: 0 20px;
            text-align: left;
            a {
                float: right;
            }
        }
        .count-down, .ant-statistic-content-value {

            font-size: 25px;
        }
        .forgot p {
           margin-bottom: 40px;
        }
        
    #custom-submit {
        margin-top: 25px;   
        background: #8981cc;
        color: white;
        border-radius: 10px;
        width: 100%;
        height: 60px;
    }
    @media (max-width: 767px){
        .left {
            display: none!important;
        }
        .half-circle {
            display: none!important;
        }
        .form {
            margin: 15% auto 0 auto!important;
        }
    }
   .confirm-modal{
  padding: 100px;
  .ant-modal-body {
    text-align: center;
  }
  .confirm {
    input {
      height: 30px;
    }

  }

}
`;

export default AuthenticationStyle;
