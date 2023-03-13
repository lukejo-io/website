import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout";

const Resume: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Resume</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={"flex flex-col text-left gap-6"}>
        <div>
          <h3 className="text-3xl font-bold">Software Engineer - ConGenius</h3>
          <ul className="mt-3 text-2xl">
            <li>
              Develop core application functionality in the beginning stages of
              the startup
            </li>
            <li>Build and consume REST endpoints in our application</li>
            <li>Mentor younger developers and keep timelines in check</li>
            <li>Ensure code quality across the team through code reviews</li>
            <li>
              Technologies: React, Docker, Node.js, TypeScript, PostgreSQL
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-3xl font-bold">
            Software Engineer - Digital Monitoring Products
          </h3>
          <ul className="mt-3 text-2xl">
            <li>
              Develop full-stack web applications from designing databases,
              building REST and GraphQL APIs, all the way to building the
              front-end applications using React.
            </li>
            <li>
              Design and manage features from development to testing and
              delivery.
            </li>
            <li>
              Advocate for user experience improvement for our apps which have
              100,000+ users.
            </li>
            <li>
              Build GraphQL application using Apollo Server to standardize a
              diverse set of REST APIs.
            </li>
            <li>
              Technologies: React, GraphQL, Node.js, TypeScript, SQL Server
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-3xl font-bold">
            Web Developer - Missouri State Office of Web Strategy and
            Development
          </h3>
          <ul className="mt-3 text-2xl">
            <li>Full-stack, waterfall environment</li>
            <li>
              Update websites and web applications. Fix bugs, patch security
              vulnerabilities, developed new features, and up-date legacy web
              pages to modern standards.
            </li>
            <li>
              Technologies: JavaScript, jQuery, Classic ASP, Microsoft SQL
              Server
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-3xl font-bold">
            Software Development Intern - O'Reilly Auto Parts, Inc.
          </h3>
          <ul className="mt-3 text-2xl">
            <li>Full-stack, waterfall environment</li>
            <li>
              Develop application to centralize documents and manage progress of
              product development.
            </li>
            <li>
              Technologies: Java, Spring Framework, JavaScript, Bootstrap,
              Elasticsearch
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Resume;
