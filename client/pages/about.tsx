import Navbar from "../components/common/Navbar";
import Link from "next/link";

const About = () => {
  return (
    <div className="w-8/12 mx-auto mt-6">
      <Navbar>
        <Link href="/">Home</Link>
        <Link href="/about">About Me 👨🏽</Link>
      </Navbar>
    </div>
  );
};

export default About;
