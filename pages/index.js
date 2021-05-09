import Head from "next/head";
import styles from "../styles/Home.module.css";
import Banner from "../components/Banner";
import Commitment from "../components/Commitment";
import Footer from "../components/Footer";
import Insights from "../components/Insights";
import MobileNav from "../components/MobileNav";
import Navbar from "../components/Navbar";
import Events from "../components/Events";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ACME Corporation</title>
      </Head>

      <Navbar />
      <MobileNav />
      <Banner />
      <Insights />
      <Commitment />
      <Events />
      <Footer />
    </div>
  );
}
