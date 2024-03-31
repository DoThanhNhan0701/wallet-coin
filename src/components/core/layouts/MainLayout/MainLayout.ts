import { Layout } from 'antd';
import styled from 'styled-components';

export const AdminLayoutWrap = styled(Layout)`
  .ant-layout-header {
    background-color: ${(props) => props.theme.colors.backgroundColor};
    position: sticky;
    top: 0;
    height: 80px;
    overflow: hidden;
    z-index: 99;
  }

  .ant-layout-content {
  }
`;
