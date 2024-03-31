import { appWithTranslation } from 'next-i18next';
import NextProgress from 'next-progress';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useCallback } from 'react';

const MainLayout = dynamic(
  () => import('@/components/core/layouts/MainLayout'),
  { ssr: false },
);

import GlobalStyle from '@/styles/global';
import { theme } from '@/styles/themes';
import { ThemeProvider } from 'styled-components';
import { Web3Modal } from '@/context/Web3Modal';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { title } = pageProps;

  const getLayout = useCallback(() => {
    return MainLayout;
  }, [router.pathname]);

  const Layout = getLayout();

  return (
    <ThemeProvider theme={theme.default}>
      <GlobalStyle />
      <NextProgress
        options={{ showSpinner: false }}
        color={'#68d67c'}
        height="4px"
      />
      <Web3Modal>
        <MainLayout>
          <Layout title={title}>
            <Component {...pageProps} />
          </Layout>
        </MainLayout>
      </Web3Modal>
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);
