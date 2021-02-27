import Head from "next/head";
import type { AppProps } from "next/app";

import "../styles/globals.css";
import "../styles/index.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta property="og:title" content="Shortify | Free Link Shortner" />
        <meta
          property="og:description"
          content="Shortify your long links in a matter of seconds"
        />
        <meta
          property="og:image"
          content="http://euro-travel-example.com/thumbnail.jpg"
        />
        <meta
          property="og:url"
          content="http://euro-travel-example.com/index.htm"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
