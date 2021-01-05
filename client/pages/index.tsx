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
  const DayList = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="w-8/12 mx-auto mt-10">
        <Navbar />
        <Hero>
          <span className="text-2xl">
            Hey! Welcome to my portfolio. How’s your{" "}
            {DayList[new Date().getDay().toLocaleString("en-IN")]} going?
          </span>
        </Hero>
        <GridView>
          {/* About Me */}
          <Link href="/about">
            <div className="cursor-pointer transition duration-500 ease-in-out hover:shadow-lg hover:text-amber-500 bg-blueGray-900 rounded-lg flex flex-col space-y-10 items-center p-6">
              <img src="/images/hey.svg" className=" object-contain h-56" />
              <span className="font-bold text-xl">About Me</span>
            </div>
          </Link>
          {/* Projects
          <Link href="/projects">
          <div className="cursor-pointer transition duration-500 ease-in-out hover:shadow-lg hover:text-amber-500 bg-blueGray-900 rounded-lg flex flex-col space-y-10 items-center p-6" >
            <img src="/images/projects.svg" className=" object-contain h-56"/>
            <span className="font-bold text-xl">Projects</span>
          </div>
          </Link> */}
          {/* Curriculum Vitae */}
          <Link href="/curriculum-vitae" as="/curriculum-vitae">
            <div className="transition duration-500 ease-in-out hover:shadow-lg hover:text-amber-500 cursor-pointer bg-blueGray-900 rounded-lg flex flex-col space-y-10 items-center p-6">
              <img src="/images/cv.svg" className=" object-contain h-56" />
              <span className="font-bold text-xl">Curriculum Vitae</span>
            </div>
          </Link>
          {/* Research
          <Link href="/curriculum-vitae" as="/curriculum-vitae">
          <div className="transition duration-500 ease-in-out hover:shadow-lg hover:text-amber-500 cursor-pointer bg-blueGray-900 rounded-lg flex flex-col space-y-10 items-center p-6" >
            <img src="/images/research.svg" className=" object-contain h-56"/>
            <span className="font-bold text-xl">Research Papers</span>
          </div>
          </Link>
          ADS.COM
          <Link href="/curriculum-vitae" as="/curriculum-vitae">
          <div className="transition duration-500 ease-in-out hover:shadow-lg hover:text-amber-500 cursor-pointer bg-blueGray-900 rounded-lg flex flex-col space-y-10 items-center p-6" >
            <img src="/images/adscom.png" className=" object-contain h-56"/>
            <span className="font-bold text-xl">ADS.COM</span>
          </div>
          </Link> */}
          {/* Books
          <Link href="/curriculum-vitae" as="/curriculum-vitae">
          <div className="transition duration-500 ease-in-out hover:shadow-lg hover:text-amber-500 cursor-pointer bg-blueGray-900 rounded-lg flex flex-col space-y-10 items-center p-6" >
            <img src="/images/books.svg" className=" object-contain h-56"/>
            <span className="font-bold text-xl">Books</span>
          </div>
          </Link>
           Shows 
          <Link href="/curriculum-vitae" as="/curriculum-vitae">
          <div className="transition duration-500 ease-in-out hover:shadow-lg hover:text-amber-500 cursor-pointer bg-blueGray-900 rounded-lg flex flex-col space-y-10 items-center p-6" >
            <img src="/images/shows.svg" className=" object-contain h-56"/>
            <span className="font-bold text-xl">Shows</span>
          </div> 
          </Link>*/}
          {/* Collaboration */}
          <Link href="/collaborate">
            <div className="transition duration-500 ease-in-out hover:shadow-lg hover:text-amber-500 cursor-pointer bg-blueGray-900 rounded-lg flex flex-col space-y-10 items-center p-6">
              <img src="/images/collab.svg" className=" object-contain h-56" />
              <span className="font-bold text-xl">Collab with me</span>
            </div>
          </Link>
        </GridView>
        <Footer />
      </div>
    </>
  );
}
