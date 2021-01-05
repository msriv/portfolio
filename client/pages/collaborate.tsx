import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/common/Navbar";
import Footer from "../components/home/Footer";

const Collaborate = () => {
  return (
    <>
      <Head>
        <title>Collaborate With Mihir</title>
      </Head>
      <div className="w-8/12 mx-auto mt-10">
        <Navbar />

        <section className="flex space-x-10 items-center my-48">
          <span className="text-5xl font-semibold leading-normal">
            Let me know what you want to collaborate on here
          </span>
          <img src="/images/path48.png" className="object-contain w-32" />
          <Link href="mailto:mihir@slanglabs.in">
            <span className=" cursor-pointer text-5xl">mihir@slanglabs.in</span>
          </Link>
        </section>

        <Footer />
        {/* <GoToHome/> */}
      </div>
    </>
  );
};

export default Collaborate;
