import styled from 'styled-components';

const FormStyle = styled.div`
    p {
      font-weight: bold;
      color: #000;
    }
    
    .mb-10 {
        margin-bottom: 10px;
    }
    
    .double-button {
        margin-top: 25px;
        .cancel-button {
            float: right;
        }
    }
    .attachment-section {
        margin-bottom: 20px;
    }
    
    input[type="text"], textarea {
      border: none;
      background-color: white;
      border: 1px solid #E1E1E0;
      &:focus {
        border: none;
        background-color: white;
        outline: none;
      }
    }
    select {
        cursor: pointer;
    }

    .ant-slider {
      margin: 11px 15px;
    }
    .ant-slider-with-marks {
        margin-bottom: 0;
    }
    .ant-form-item {
         margin-bottom: 0;
     }
    .right-addon {
        .fa {
            right: 0px;
            left: inherit ;
            top: 35px;
            z-index: 9;
            position: absolute;
            padding: 14px;
            pointer-events: none;
            color: transparent;
            -webkit-text-stroke-width: 1px;
            -webkit-text-stroke-color: #495057;
         }
         input {
            padding: 40px 30px 10px;
            height: 60px;
            border-radius: 15px 15px 0 0;
        }
    }
     
    .ant-input {
      padding: 10px;
    }
    
    .h-40 {
        height: 40px;
    }
    
    .on-demand-error {
        .ant-input:focus {
            -webkit-box-shadow: 0 0 0 1px #f5222d;
            box-shadow: 0 0 0 1px #f5222d;
       }
        .ant-input-number:focus {
            -webkit-box-shadow: 0 0 0 1px #f5222d;
            box-shadow: 0 0 0 1px #f5222d;
       }
       .slider-label {
          color: red;
       }
    }
    
   .on-demand-error .ant-input , .on-demand-error .ant-input:hover {
        border-color: #f5222d!important;
       .slider-label {
          color: red;
       }
    }
    
    .ant-form-item-control {
        text-align: left'
        margin-bottom: 10px;
        line-height: 32.9999px;
    }
    .ant-form-item {
        margin-bottom: 0;
        margin-top: 5px!important;
        margin-bottom: 0!important;
      }
   .has-error .ant-input, .has-error .ant-input:hover {
        border-color: #f5222d!important;
    }
    .ant-form-explain {
        height: 5px;
        color: #f5222d;
    }
    .ant-form-inline {
      .ant-form-item {
        display: inline-block;
        margin:0 8px;
        width: 100%;
      }
     .double-button {
        padding: 0 8px;
      }
    }
    #custom-submit {
        margin-top: 5px;
    }
    .backend-error {
        color: red;
    }
    .ant-form-inline .ant-form-item > .ant-form-item-control-wrapper, .ant-form-inline .ant-form-item > .ant-form-item-label {
        width: 100%;
    }
`;

export default FormStyle;
