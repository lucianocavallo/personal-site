import { AppProps } from "next/app";
import Head from "next/head";
import { ContextProvider } from "context/context";

import { GlobalStyle } from "../styles/GlobalStyle";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Luciano Cavallo</title>
        <meta
          name="description"
          content="Personal site with information about my skills and projects"
        />
      </Head>
      <GlobalStyle />
      <ContextProvider>
        <Component {...pageProps} />
      </ContextProvider>
    </>
  );
}

export default MyApp;
