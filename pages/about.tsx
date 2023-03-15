import type { NextPage } from "next";
import Head from "next/head";
import LinkButton from "../components/LinkButton";
import Layout from "../components/Layout";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={"flex flex-col text-left gap-6 p-3 max-w-2xl"}>
        <p>
          Although my dad and two older brothers either taught or wrote software
          for a living, I wanted to be a teacher and cross country coach. I
          started college majoring in physical education but quickly realized
          that was not what I wanted to do for a living. The summer following my
          freshman year I decided to enroll in my first programming course.
        </p>
        <p>
          I learned programming that summer writing C# and decided to change my
          major to computer science. Following two internships, a part-time gig
          at MSU, and graduating college, I began working at DMP. It was there
          that I began to daily write and consume APIs and build out client-side
          applications. Then I was presented with an opportunity to work at a
          local startup.
        </p>
        <p>
          After a six-month stint at the startup I decided to go into
          contracting. It's my mission to work with companies to build robust,
          maintainable web applications so they can quickly provide value for
          their customers. If you think we would make a good fit, please reach
          out through my{" "}
          <Link href={"/contact"} className={"text-purple"}>
            contact
          </Link>{" "}
          page
        </p>
      </div>
    </Layout>
  );
};

export default Home;
