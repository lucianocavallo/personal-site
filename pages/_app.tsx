import { AppProps } from 'next/app';
import Head from 'next/head';

import { GlobalStyle } from '../styles/GlobalStyle';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>luciano cavallo</title>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
