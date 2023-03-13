import type { NextPage } from "next";
import Head from "next/head";
import LinkButton from "../components/LinkButton";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-6xl font-bold">About</h1>

      <p className="mt-3 text-2xl">
        About{" "}
        <code className="rounded-md bg-gray-100 p-3 font-mono text-lg">
          pages/index.tsx
        </code>
      </p>

      <div className="mt-6 flex max-w-4xl flex-col items-center justify-around sm:w-full">
        <LinkButton link={"https://nextjs.org/learn"} text={"About"} />
      </div>
    </Layout>
  );
};

export default Home;
