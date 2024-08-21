import Head from "next/head";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Urbantopia</title>
      </Head>
      <Header />

      <main className="flex-grow">{children}</main>

      <Footer />
    </div>
  );
}
