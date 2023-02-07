import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";
import Layout from "../components/layout";

function MyApp({ Component, pageProps }) {
  return (
<Layout>
<Head>
  <title>Creative Minds</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Creative Minds" />
  <meta name="keywords" content="Creative Minds" />
  <meta name="author" content="Creative Minds" />
  <link rel="icon" href="/dz.png" />
</Head>
<Component {...pageProps} />
</Layout>
     

  );
}

export default MyApp;
