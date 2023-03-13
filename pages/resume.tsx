import type { NextPage } from "next";
import Head from "next/head";
import LinkButton from "../components/LinkButton";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center bg-off-white">
        <h1 className="text-6xl font-bold">Resume</h1>

        <p className="mt-3 text-2xl">
          About{" "}
          <code className="rounded-md bg-gray-100 p-3 font-mono text-lg">
            pages/index.tsx
          </code>
        </p>

        <div className="mt-6 flex max-w-4xl flex-col items-center justify-around sm:w-full">
          <LinkButton link={"https://nextjs.org/learn"} text={"About"} />
        </div>
      </main>
    </div>
  );
};

export default Home;
