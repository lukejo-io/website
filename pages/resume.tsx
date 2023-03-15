import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout";
import { PropsWithChildren, ReactNode } from "react";
import CompanyInfo from "../components/CompanyInfo";

type HeaderProps = {
  title: string;
};

function Header({ title }: HeaderProps) {
  return <h3 className="text-2xl md:text-3xl font-bold">{title}</h3>;
}

type SubheaderProps = {
  companyName: ReactNode;
  subheader: string;
};

function Subheader({ companyName, subheader }: SubheaderProps) {
  return (
    <span className={"flex flex-row"}>
      {companyName}
      <div className={"italic text-md"}>&nbsp;{subheader}</div>
    </span>
  );
}

type ListItemProps = {
  description: string;
};

function ListItem({ description }: ListItemProps) {
  return <li className={"text-lg ml-4"}>{description}</li>;
}

function DescriptionList({ children }: PropsWithChildren) {
  return <ul className="mt-3 text-lg md:text-2xl list-disc ">{children}</ul>;
}

const Resume: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Resume</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={"flex flex-col text-left gap-6 p-3 max-w-2xl"}>
        <div>
          <Header title={"Software Engineer"} />
          <Subheader
            companyName={
              <CompanyInfo
                name={"ConGenius"}
                description={
                  "ConGenius is software that helps home builders, remodelers, and construction pros master their sales process, create accurate estimates, and build proposals."
                }
              />
            }
            subheader={"Sep 2022 - March 2023"}
          />
          <DescriptionList>
            <ListItem
              description={
                "Develop core application functionality in the beginning stages of the startup"
              }
            />
            <ListItem
              description={
                "Build and consume REST endpoints in our application"
              }
            />
            <ListItem
              description={
                " Mentor younger developers and keep timelines in check"
              }
            />
            <ListItem
              description={
                "Ensure code quality across the team through code reviews"
              }
            />

            <ListItem
              description={
                "Technologies: React, Docker, Node.js, TypeScript, PostgreSQL"
              }
            />
          </DescriptionList>
        </div>
        <div>
          <Header title={"Software Engineer "} />
          <Subheader subheader={"DMP Jan 2019 - Sep 2022"} />
          <DescriptionList>
            <ListItem
              description={
                "Develop full-stack web applications from designing databases, building REST and GraphQL APIs, all the way to building the front-end applications using React."
              }
            />
            <ListItem
              description={
                "Design and manage features from development to testing and delivery."
              }
            />
            <ListItem
              description={
                "Advocate for user experience improvement for our apps which have 100,000+ users."
              }
            />
            <ListItem
              description={
                "Build GraphQL application using Apollo Server to standardize a diverse set of REST APIs."
              }
            />
            <ListItem
              description={
                "Technologies: React, GraphQL, Node.js, TypeScript, SQL Server"
              }
            />
          </DescriptionList>
        </div>
        <div>
          <Header title={"Software Developer"} />
          <Subheader subheader={"MSU March 2018 - Dec 2019"} />
          <DescriptionList>
            <ListItem
              description={
                "Update websites and web applications. Fix bugs, patch security vulnerabilities, developed new features, and up-date legacy web pages to modern standards."
              }
            />
            <ListItem
              description={
                "Build GraphQL application using Apollo Server to standardize a diverse set of REST APIs."
              }
            />
            <ListItem
              description={
                "Technologies: JavaScript, jQuery, Classic ASP, Microsoft SQL Server"
              }
            />
          </DescriptionList>
        </div>
        <div>
          <Header title={"Software Development Intern"} />
          <Subheader subheader={"O'Reilly - Sep 2017 - Jan 2018"} />
          <DescriptionList>
            <ListItem description={"Full-stack, waterfall environment"} />
            <ListItem
              description={
                "Develop application to centralize documents and manage progress of product development."
              }
            />
            <ListItem
              description={
                "Technologies: Java, Spring Framework, JavaScript, Bootstrap, Elasticsearch"
              }
            />
          </DescriptionList>
        </div>
      </div>
    </Layout>
  );
};

export default Resume;
