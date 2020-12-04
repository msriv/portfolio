import Navbar from "../components/common/Navbar";
import Hero from "../components/home/Hero";
import UpdateList from "../components/home/UpdateList";
import UpdateItem from "../components/home/UpdateItem";
import ProjectList from "../components/home/ProjectList";
import ProjectCard from "../components/home/ProjectCard";
import { Updates, Projects } from "../components/Portfolio.data";
import { ProjectInterface, UpdateInterface } from "../components/Interfaces";
import ShortId from "shortid";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mihir Srivastava</title>
      </Head>
      <div className="w-8/12 mx-auto mt-6">
        <Navbar>
          <Link href="/">Home</Link>
          <Link href="#projects">Work</Link>
        </Navbar>
        <Hero>
          <span className="text-base font-bold uppercase">
            Welcome to my portfolio 🚀
          </span>
          <h2 className="text-xl mt-4">
            Mihir Srivastava here. Glad you're checking out my work. 😊
          </h2>
        </Hero>
        <UpdateList>
          {Updates.map((update: UpdateInterface) => {
            return (
              <UpdateItem
                key={ShortId.generate()}
                title={update.title}
                date={update.dateCreated}
                link={update.link}
              />
            );
          })}
        </UpdateList>
        <ProjectList>
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
              />
            );
          })}
        </ProjectList>
      </div>
    </>
  );
}
