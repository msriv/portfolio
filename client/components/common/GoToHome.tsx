import Link from "next/link";
import HomeIcon from "../../assets/icons/solid/home.svg";

const GoToHome = () => {
  return (
    <div className="fixed right-6 bottom-6">
      <Link href="/">
        <div className="cursor-pointer transition duration-500 ease-in-out bg-blueGray-900 rounded-full border-2 border-blueGray-900 hover:border-amber-500 p-5">
          <HomeIcon className="w-6 h-6" />
        </div>
      </Link>
    </div>
  );
};

export default GoToHome;
