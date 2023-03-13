import type { NextPage } from "next";
import Head from "next/head";
import LinkButton from "../components/LinkButton";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mt-6 flex max-w-4xl flex-col items-center justify-around sm:w-full">
        <LinkButton.Purple link={"/about"} text={"About"} />
        <LinkButton.Pink link={"/resume"} text={"Resume"} />
        <LinkButton.Purple link={"/contact"} text={"Contact"} />
        <LinkButton.Purple link={"/writing"} text={"Writing"} />
        <LinkButton.Purple link={"/aesthetics"} text={"Photos"} />
      </div>
    </Layout>
  );
};

export default Home;
