import Head from "next/head";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Urbantopia</title>
      </Head>
      <Header />

      {children}

      <Footer />
    </div>
  );
}
