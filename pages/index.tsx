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

      <div className={"flex flex-col gap-3 w-full h-full md:w-96 p-3"}>
        <LinkButton.Purple link={"/about"} text={"About"} />
        <LinkButton.Pink link={"/resume"} text={"Resume"} />
        <LinkButton.Purple link={"/contact"} text={"Contact"} />
        <LinkButton.Purple
          link={"https://github.com/lukejo-io"}
          text={"GitHub"}
        />
        {/*<LinkButton.Purple link={"/aesthetics"} text={"Photos"} />*/}
      </div>
    </Layout>
  );
};

export default Home;
