import Link from "next/link";

const Footer = () => {
  return (
    <div className="my-16">
      <span className="text-lg font-bold">Follow me @</span>
      <div className="flex items-center space-x-5 mb-8">
        <Link href="https://www.linkedin.com/in/mihir-srivastava/">
          <a target="_blank">
            {" "}
            <img
              src="/images/icons8-linkedin-96.png"
              className="w-12 h-12"
            />{" "}
          </a>
        </Link>
        <Link href="https://twitter.com/msrivastava574">
          <a target="_blank">
            {" "}
            <img
              src="/images/icons8-twitter-96.png"
              className="w-12 h-12"
            />{" "}
          </a>
        </Link>
        <Link href="http://github.com/msriv">
          <a target="_blank">
            {" "}
            <img src="/images/icons8-github.svg" className="w-12 h-12" />{" "}
          </a>
        </Link>
      </div>
      <div className="flex items-center font-bold text-lg">
        Made by me 🚀 using{" "}
        <img className="w-8 h-8 mx-2" src={"/images/icons8-typescript.svg"} />{" "}
        in <img className="w-12 mx-2" src={"/images/Nextjs-logo.svg"} />
      </div>
    </div>
  );
};

export default Footer;
