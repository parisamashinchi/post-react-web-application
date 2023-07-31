import styled from 'styled-components';

const OfferStyle = styled.div`
  
   .ant-col {
      padding: 20px
   }
   .ant-col-12 {
      padding: 0px;
      text-align: left;
      margin-top:10px;
   }
   .ant-divider-horizontal {
        margin: 15px 0;
    }
   .ant-divider {
       border-top: 2px dashed rgb(0 0 0 / 15%);
   }
   .head {
     justify-content: flex-end;
      p {
        margin: 20px;
        color: gray;
        font-size: 16px;
      }
   }
   .ant-card {
      height: 250px;
      border-radius: 20px;
      color: #655d5d;
      
   }
   .arrow-image {
        text-align :left;
   }
   p {
        font-weight: bold;
        margin-bottom: 0
   }
   .where-section sub {
        bottom: 0.5em;
   }
   .box-icon {
          width: 30px;
          height:30px;
          margin-right: 10px;
          margin-top: 5px
    }
   .offer-content {
        sub {
            bottom:-2em;
            right: 80px;
            font-size: 90%;
            color:#8c8a8a;
        }
    }
    .request-btn {
        color: #655d5d;
        top: 30px;
        position:relative;
    }
    .ant-avatar {
        margin-top: 20px;
    } 
    .avatar-1 {
        left: 60px
    }  
    .avatar-2 {
        left: 45px
    } 
    .avatar-3 {
        left: 30px;
        background: #8981cc;
        font-size: 18px;
    }  
    .ant-badge-count { 
         background: #f5967f;
         width: 40px;
         height: 40px;
         border-radius: 50%;
         font-size:18px;
         font-weight: bold;
         line-height: 40px;
         top: 15px;
         right: 20px
    }
    .empty {
        color: #b3b1b1;
        top: 30px;
        position: relative;
        right: -75px;
        font-weight: bold;
    }
    .ok-badge {
       top: 15px;
       right: 20px;
       width: 40px
    }
    .offer-form {
        text-align: left;
        margin-left: 30px;
        .ant-select-selector, .ant-picker {
            border: none;
            background: transparent
        }
        .ant-form-item {
            width: 170px;
            display: inline-block;
            margin-bottom: 0
        }
       input::placeholder , .ant-select-selection-placeholder {
            color: #655d5d;
        }
    }
`;

export default OfferStyle;
