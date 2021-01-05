import Head from "next/head";
import GoToHome from "../components/common/GoToHome";
import Navbar from "../components/common/Navbar";
import Footer from "../components/home/Footer";
import Link from "next/link";

const AboutMe = () => {
  return (
    <>
      <Head>
        <title>About Mihir</title>
      </Head>
      <div className="w-8/12 mx-auto mt-10">
        <Navbar />

        <section className=" space-y-16 my-24">
          <div className="flex justify-center w-full">
            <img src="/images/Me.png" className=" object-contain w-46" />
          </div>
          <p className="leading-normal text-4xl">
            Hi I am Mihir. Grown up in Ghaziabad UP. Find me on the map{" "}
            <Link href="https://goo.gl/maps/N67ZjYkhiN4Q9jaRA">
              <a target="_blank">
                <u>here</u>
              </a>
            </Link>
            . I studied Computer Science from a Design University. Find my
            university{" "}
            <Link href="https://www.avantikauniversity.edu.in/">
              <a target="_blank">
                <u>here</u>
              </a>
            </Link>
            . I am currently interning at Slang Labs. When not working, you can
            find me reading books, playing games with friends, working on some
            new idea, or sleeping 😴 .
            <br />
            <br />I love working with React. Not a fan of Class Based
            components. More like Functional Components + Hooks + Typescript.
          </p>
          <div className="flex justify-center w-full">
            <img
              src="/images/SpiritAnimal.png"
              className=" object-contain w-46"
            />
          </div>
          <p className="leading-normal text-4xl">
            Firstly because I love the movie Kung Fu Panda and I relate to Po so
            much. Just like him, I am determined to do whatever I decide to do
            and will persevere till the end while being lazy and a complete
            procastinator 😆. Now you know why you'll find a panda as a DP on my
            socials 🐼.
          </p>
        </section>

        <Footer />
      </div>

      {/* <GoToHome/> */}
    </>
  );
};

export default AboutMe;
