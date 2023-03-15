import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Image
        src="/dmp.jpeg"
        alt="Picture of the author"
        width={500}
        height={500}
      />
      <div className={"border border-4 border-black"}>
        <Image
          src="/dmp.jpeg"
          alt="Picture of the author"
          width={500}
          height={500}
        />
      </div>
      <Image
        src="/dmp.jpeg"
        alt="Picture of the author"
        width={500}
        height={500}
      />
      <Image
        src="/dmp.jpeg"
        alt="Picture of the author"
        width={500}
        height={500}
      />
    </Layout>
  );
};

export default Home;
