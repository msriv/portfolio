import Navbar from "../components/common/Navbar";
import Hero from "../components/home/Hero";
import ListView from "../components/common/ListView";
import UpdateItem from "../components/home/UpdateItem";
import GridView from "../components/common/GridView";
import ProjectCard from "../components/home/ProjectCard";
import PublicationItem from "../components/home/PublicationItem";
import { Updates, Projects, Publications } from "../components/Portfolio.data";
import {
  ProjectInterface,
  UpdateInterface,
  PublicationInterface,
} from "../components/Interfaces";
import ShortId from "shortid";
import Link from "next/link";
import Head from "next/head";
import _ from "lodash";
import Footer from "../components/home/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mihir Srivastava</title>
      </Head>
      <div className="w-8/12 mx-auto mt-6">
        <Navbar>
          <Link href="/">Home</Link>
          <Link href="/about">About Me 👨🏽</Link>
        </Navbar>
        <Hero>
          <span className="text-base font-bold uppercase">
            Welcome to my portfolio 🚀
          </span>
          <h2 className="text-xl mt-4">
            Mihir Srivastava here. Glad you're checking out my work. 😊
          </h2>
        </Hero>
        <ListView title="Latest Updates 💡">
          {_.sortBy(Updates, ["dateCreated"]).map((update: UpdateInterface) => {
            return (
              <UpdateItem
                key={ShortId.generate()}
                title={update.title}
                date={update.dateCreated}
                link={update.link}
                body={update.body}
              />
            );
          })}
        </ListView>
        <GridView title="Projects 👾">
          {Projects.map((project: ProjectInterface) => {
            return (
              <ProjectCard
                key={ShortId.generate()}
                link={project.link}
                title={project.title}
                slug={project.slug}
                tags={project.tags}
                tools={project.tools}
                brief={project.brief}
                body={project.body}
              />
            );
          })}
        </GridView>
        <ListView title="IEEE Publications 📃">
          {Publications.map((publication: PublicationInterface) => {
            return (
              <PublicationItem
                key={ShortId.generate()}
                title={publication.title}
                conference={publication.conference}
                conferenceLink={publication.conferenceLink}
                paperLink={publication.paperLink}
                downloadLink={publication.downloadLink}
                datePublished={publication.datePublished}
              />
            );
          })}
        </ListView>
        <Footer />
      </div>
    </>
  );
}
