import "../public/css/style.css";
import "../public/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Heart Of The Nile - A Sudanese Restaurant</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
