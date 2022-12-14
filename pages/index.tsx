import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import FeatureContainer from "../components/FeatureContainer";
import Footer from "../components/Footer";
import ImageContainer from "../components/ImageContainer";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Image-Editor</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Roboto+Slab:wght@100;300;500;700;900&family=Roboto:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <h3 style={{ paddingBottom: "20px" }}>Image Editor</h3>

      <main className={styles.imageContainer}>
        <FeatureContainer />
        <ImageContainer />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
