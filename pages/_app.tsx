import "../styles/globals.css";
import "../styles/swiper.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import { RecoilRoot } from "recoil";
import { CookiesProvider } from "react-cookie";
import PdpaRoot from "../components/pdpa-root";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <CookiesProvider>
        <Layout>
          <PdpaRoot />
          <Component {...pageProps} />
          <ToastContainer theme="colored" />
        </Layout>
      </CookiesProvider>
    </RecoilRoot>
  );
}

export default MyApp;
