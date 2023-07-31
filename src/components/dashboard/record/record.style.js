import styled from 'styled-components';

const OfferStyle = styled.div`
   .head {
     justify-content: flex-end;
     margin-bottom: 50px;
      p {
        margin: 20px;
        color: gray;
        font-size: 16px;
      }
   }
    h4 {  
        float: left;
        margin: 20px;
        color: #6d6a88;
        font-weight: bold;
    }
    button {
        margin: 0 30px;
        width: 75px;
        float: right;
        border-radius: 20px;
        background: #8981cc;
        border: 1px solid #8981cc;
        color: white;
        height: 40px;
        font-size: 16px;
        line-height: 30px;
        padding: 0 10px;
    }
    .ant-table {
        background: transparent;
        table {
            border-spacing: 0 5px;
            margin-bottom: 50px;
        }
        .ant-table-container {
            border: none;
        }
        td {
            border-top: 3px solid #f0f0f0;
            border-bottom: 3px solid #f0f0f0;
            border-right: none!important;
            background: white;
            color: #a7a4a4;
            &:first-child {
                border-left: 2px solid #f0f0f0;
                border-radius: 10px 0 0 10px  ;
            }
            &:last-child {
                border-right: 2px solid #f0f0f0!important;
                border-radius: 0 10px 10px 0;
            }
        }
        th {
            background: white!important;
            border-top: 3px solid #f0f0f0;
            border-bottom: 3px solid #f0f0f0;
            border-right: none!important;
            background: white;
            color: #5a5a5a;
             &:first-child {
                border-left: 2px solid #f0f0f0;
                border-top-left-radius: 11px!important;
            }
            &:last-child {
                border-right: 2px solid #f0f0f0!important;
                border-top-right-radius:  11px!important;
            }
        }
        .ant-table-thead > tr > th:not(:last-child):not(.ant-table-selection-column):not(.ant-table-row-expand-icon-cell):not([colspan])::before {
            background: transparent
        }
    }
`;

export default OfferStyle;
