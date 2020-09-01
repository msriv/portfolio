import DownloadIcon from "../../assets/icons/outline/document-download.svg";

const TopSection = () => {
  return (
    <div className="container mt-12 mx-auto ">
      <div className="flex items-center justify-between">
        <div className="flex lg:flex-row flex-col items-center">
          <h1 className="text-5xl font-bold">Mihir Srivastava</h1>
          <span className="rounded ml-3 p-3 font-bold text-base bg-gray-800">
            Computer Science Engineer
          </span>
        </div>
        <div>
          <DownloadIcon className="w-8 h-8" />
        </div>
      </div>
      <div>
        <span className="text-xl">mihir.srivastava@avantika.edu.in</span>
      </div>
      <div className="flex items-center mt-1">
        <img src="/images/icons8-github-48.png" className="lg:w-7 mr-1" />
        <img src="/images/icons8-twitter-48.png" className="lg:w-7 mx-1" />
        <img src="/images/icons8-linkedin-48.png" className="lg:w-7 ml-1" />
      </div>
    </div>
  );
};

export default TopSection;
