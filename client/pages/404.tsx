import Head from "next/head";
import GoToHome from "../components/common/GoToHome";
import Navbar from "../components/common/Navbar";
import Footer from "../components/home/Footer";
import HomeIcon from "../assets/icons/solid/home.svg";

const Collaborate = () => {
  return (
    <>
      <Head>
        <title>Wait for it!</title>
      </Head>
      <div className="w-8/12 mx-auto mt-10">
        <Navbar />

        <section className="flex flex-col justify-center items-center my-56">
          <span className="text-6xl font-bold leading-normal">
            Working on this page 😅
          </span>
          <div className="flex items-center text-base">
            Checkout other sections till then by clicking the{" "}
            <div className=" bg-blueGray-900 rounded-full p-5 mx-4">
              <HomeIcon className="w-4 h-4" />
            </div>{" "}
            on the right-bottom corner. Thanks!
          </div>
        </section>

        <Footer />
        <GoToHome />
      </div>
    </>
  );
};

export default Collaborate;
