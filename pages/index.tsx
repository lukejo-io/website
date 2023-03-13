import type { NextPage } from "next";
import Head from "next/head";
import LinkButton from "../components/LinkButton";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <head className="flex h-24 w-screen items-center justify-center border-b">
        <h1 className="text-6xl font-bold">Luke Johnson</h1>
      </head>
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center bg-off-white">
        <div className="mt-6 flex max-w-4xl flex-col items-center justify-around sm:w-full">
          <LinkButton.Purple link={"/about"} text={"About"} />
          <LinkButton.Pink link={"/resume"} text={"Resume"} />
          <LinkButton.Purple
            link={"https://nextjs.org/learn"}
            text={"Contact"}
          />
          <LinkButton.Purple link={"/resume"} text={"Writing"} />
          <LinkButton.Purple link={"aesthetics"} text={"Aesthetics"} />
        </div>
      </main>

      <footer className="flex h-24 w-screen items-center justify-center border-t">
        2023 Luke Johnson
      </footer>
    </div>
  );
};

export default Home;
