import React from 'react';

import { WagmiConfig, configureChains, createConfig } from 'wagmi';

import { publicProvider } from 'wagmi/providers/public';

import { bscTestnet } from 'viem/chains';
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';

const projectId = '2f801ab6d044fdc6ee641dca0a82936b';

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [bscTestnet],
  [publicProvider()],
);

const config = createConfig({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: 'wagmi',
      },
    }),
    new WalletConnectConnector({
      chains,
      options: {
        projectId: projectId,
      },
    }),
    new InjectedConnector({
      chains,
      options: {
        name: 'Injected',
        shimDisconnect: true,
      },
    }),
  ],
  publicClient,
  webSocketPublicClient,
});

type Props = {
  children: React.ReactNode;
};

export function Web3Modal({ children }: Props) {
  return <WagmiConfig config={config}>{children}</WagmiConfig>;
}
