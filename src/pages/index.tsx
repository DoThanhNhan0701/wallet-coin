import Button from '@/components/core/common/Button';
import ConnectYourWallet from '@/components/core/common/Modal/ConnectYourWallet';
import useModal from '@/hook/useModal';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import {
  useAccount,
  useBalance,
  useConnect,
  useDisconnect,
  useNetwork,
} from 'wagmi';
function Home() {
  const { isOpen, closeModal, openModal } = useModal();

  const { connectors, error, data } = useConnect();
  const {
    address,
    isConnected,
    isConnecting,
    connector,
    isDisconnected,
    isReconnecting,
    status,
  } = useAccount();

  const useAccountData = useAccount();
  const { chain, chains } = useNetwork();
  const { disconnect } = useDisconnect();
  const {} = useBalance();

  const result = useBalance({
    address: address,
  });

  return (
    <div style={{ padding: 100 }}>
      <div style={{ display: 'flex', gap: 10 }}>
        <Button width="200px" onClick={() => disconnect()} type="text">
          Disconnect
        </Button>
        <Button width="200px" onClick={openModal} type="ghost">
          Connect
        </Button>
      </div>
      <ConnectYourWallet
        dataConnectors={connectors}
        isOpen={isOpen}
        handleClickClose={closeModal}
      />

      <div style={{ marginTop: 60 }}>Danh sách khi connect</div>
      <hr />
      <span style={{ fontSize: 20, fontWeight: 700 }}>Chain</span>
      <div>
        <p>Message: {error?.message}</p>
        <p>ChainID: {chain?.id}</p>
        <p>name: {chain?.name}</p>
        <p>sourceId: {chain?.sourceId}</p>
        <p>testnet: {chain?.testnet}</p>
        <p>unsupported: {chain?.unsupported}</p>
        <p>Chains + name: {chains.map((item) => item.name)}</p>
        <p>Data: {data?.chain.id}</p>
      </div>
      <hr />
      <span style={{ fontSize: 20, fontWeight: 700 }}>useAccount</span>

      <div>
        <p>Address: {address}</p>
        <p>isConnected: {isConnected}</p>
        <p>isConnecting: {isConnecting}</p>
        <p>connector + id: {connector?.id}</p>
        <p>isDisconnected: {isDisconnected}</p>
        <p>isConnecting: {isConnecting}</p>
        <p>isReconnecting: {isReconnecting}</p>
        <p>status: {status}</p>
      </div>
      <hr />
      <div>
        <span style={{ fontSize: 20, fontWeight: 700 }}>ULI</span>
        <p>uil: </p>
      </div>
      <hr />
      <div>
        <span style={{ fontSize: 20, fontWeight: 700 }}>Balance</span>
        <p>Balance: {result.data?.decimals}</p>
        <p>Balance: {result.data?.formatted}</p>
        <p>Balance: {result.status}</p>
      </div>
    </div>
  );
}

export default Home;

export async function getServerSideProps({ locale }: { locale: string }) {
  try {
    return {
      props: {
        ...(await serverSideTranslations(locale, [])),
        title: 'Connect wallet',
      },
    };
  } catch (error) {
    return {
      props: {
        ...(await serverSideTranslations(locale, [])),
      },
    };
  }
}
