import Image from 'next/image';
import { Connector, useConnect } from 'wagmi';
import * as S from './ConnectYourWallet';
import ModalCommon from '..';

interface WalletConnect {
  isOpen: boolean;
  handleClickClose: () => void;
  dataConnectors: Connector<any, any>[];
}

export default function ConnectYourWallet({
  isOpen,
  handleClickClose,
  dataConnectors,
}: WalletConnect) {
  const { connect } = useConnect();

  const handleRederIcon = (name: string) => {
    switch (name) {
      case 'MetaMask':
        return '/icons/common/metamask-icon.svg';
      case 'WalletConnect':
        return '/icons/common/wallet-connect.svg';
      case 'MetaMask':
        return '/icons/common/coinbase-wallet.svg';
      default:
        return '/icons/common/coinbase-wallet.svg';
    }
  };

  return (
    <S.WalletConnectWrap>
      <ModalCommon width="450px" open={isOpen} onCancel={handleClickClose}>
        <S.Header>
          <span>Connect your wallet</span>
          <Image
            onClick={handleClickClose}
            className="close"
            src={'/icons/common/close-icon.svg'}
            width={18}
            height={18}
            alt=""
          />
        </S.Header>
        <S.Body>
          <div className="list-wallet">
            {dataConnectors.map((connector) => (
              <div
                key={connector.id}
                onClick={() => {
                  connect({ connector }), handleClickClose();
                }}
                className="item-wallet"
              >
                <Image
                  src={`${handleRederIcon(connector.name)}`}
                  width={30}
                  height={30}
                  alt=""
                />
                <span className="name-wallet">{connector.name}</span>
              </div>
            ))}
          </div>
          <div className="version">
            <span>Connect wallet</span>
            <span>block</span>
          </div>
        </S.Body>
      </ModalCommon>
    </S.WalletConnectWrap>
  );
}
