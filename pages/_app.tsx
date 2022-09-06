import type { AppProps } from "next/app";
import { Layout } from "../components";
import { GlobalStyle, Normalize, Reset } from "../styles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Normalize />
      <Reset />
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
