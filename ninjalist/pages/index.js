import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          expedita iusto omnis id consequatur itaque dolorem, fugit veniam
          eveniet suscipit necessitatibus impedit adipisci. Officia cumque in
          incidunt, voluptas vero accusamus!
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          expedita iusto omnis id consequatur itaque dolorem, fugit veniam
          eveniet suscipit necessitatibus impedit adipisci. Officia cumque in
          incidunt, voluptas vero accusamus!
        </p>
        <Link href="/ninjas" className={styles.btn}>
          See Ninja Listing
        </Link>
      </div>
    </>
  );
}
