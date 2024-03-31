import { Layout } from 'antd';
import styled from 'styled-components';

export const AdminLayoutWrap = styled(Layout)`
  .ant-layout-header {
    background-color: ${(props) => props.theme.colors.backgroundColor};
    position: sticky;
    top: 0;
    height: 64px;
    overflow: hidden;
    z-index: 99;
    padding: 0 20px;
    background: rgba(23, 23, 26, 0.8) !important;
    backdrop-filter: blur(20px);

    .header-bitget {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .button-connect-wallet {
        background: linear-gradient(
          275.08deg,
          #9d81ff 0.11%,
          #210093 34.88%,
          #00e1ff 73.87%,
          #54ffe0 101.26%
        );
        border-radius: 4px;
        box-sizing: border-box;
        overflow: hidden;
        padding: 1px;
        color: #e5e5e5;
        width: 150px;
        cursor: pointer;

        .content {
          align-items: center;
          border-radius: 4px;
          box-sizing: border-box;
          display: flex;
          font-size: 14px;
          font-weight: 500;
          height: 33px;
          justify-content: center;
          min-width: 90px;
          padding: 0 16px;
          white-space: nowrap;
          background: #17171a;
        }
      }
    }
  }

  .ant-layout-content {
  }
`;
