import type { NextPage } from "next";
import Head from "next/head";
import LinkButton from "../components/LinkButton";
import Layout from "../components/Layout";
import { useEffect } from "react";

const Home: NextPage = () => {
  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js"
    );
    head?.appendChild(script);
  });
  return (
    <Layout>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/lej212/30min?hide_event_type_details=1&hide_gdpr_banner=1"
        style={{ minWidth: "320px", height: "630px" }}
      ></div>
    </Layout>
  );
};

export default Home;
