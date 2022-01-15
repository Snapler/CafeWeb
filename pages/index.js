import Head from "next/head";
import Image from "next/image";
import Featured from "../components/Featured";
import ServicesList from "../components/ServicestList";
import styles from "../styles/Home.module.css";
import Product from "../components/Product";
import Whyus from "../components/Whyus";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sermind Cafe</title>
        <meta name="description" content="One of the Sermind Services" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <Whyus />
      <ServicesList />
      <Product />
    </div>
  );
}
