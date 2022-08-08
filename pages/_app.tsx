import type { AppProps } from "next/app";
import Head from "next/head";
import { Navbar } from "../components";
import "../styles/index.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="wrapper">
      <Head>
        <title>StrapiBlog</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="NoerGitKat" />
        <meta name="description" content="A simple Strapi-powered Markdown blog." />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
