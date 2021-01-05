import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/common/Navbar";
import Footer from "../components/home/Footer";
import DownloadIcon from "../assets/icons/solid/download.svg";

const CV = () => {
  return (
    <>
      <Head>
        <title>Mihir's CV</title>
      </Head>
      <div className="w-8/12 mx-auto mt-10">
        <Navbar />

        <section className="flex flex-col space-y-10 items-start my-24">
          <Link href="/curriculum-vitae/MIHIR_SRIVASTAVA_CV_2021.pdf">
            <a
              target="_blank"
              className="transition duration-500 ease-in-out flex hover:bg-blueGray-700 bg-blueGray-900 rounded-lg p-5 font-normal italic"
            >
              <DownloadIcon className="w-6 mr-4" /> MIHIR_SRIVASTAVA_CV_2021.pdf
            </a>
          </Link>
          <img src="/curriculum-vitae/MIHIR_SRIVASTAVA_CV_2021.png" />
        </section>

        <Footer />
        {/* <GoToHome/> */}
      </div>
    </>
  );
};

export default CV;
