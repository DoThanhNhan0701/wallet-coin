import styled from 'styled-components';

export const WalletConnectWrap = styled.div``;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid #363636;
  background-color: rgb(21, 22, 23);

  span {
    color: #fafafa;
    font-weight: 500;
    font-size: 20px;
  }

  .close {
    cursor: pointer;
  }
`;

export const Body = styled.div`
  text-align: center;

  .connect {
    color: #fafafa;
    padding: 8px 0;
  }

  .works-best {
    padding: 16px;
    color: rgb(185, 186, 187);
  }

  .list-wallet {
    .item-wallet {
      padding: 16px;
      border-bottom: 1px solid #363636;
      display: flex;
      align-items: center;
      gap: 24px;
      cursor: pointer;

      &:hover {
        background: #22272c;
      }

      .name-wallet {
        color: #fafafa;
        font-weight: 600;
        font-size: 16px;
      }
    }
  }

  .version {
    display: flex;
    padding: 8px;
    justify-content: space-between;
    background-color: rgb(21, 22, 23);

    color: rgb(250, 250, 250);
    font-weight: 500;
  }
`;
