import Link from "next/link";
import DownloadIcon from "../../assets/icons/solid/document-download.svg";
import LinkIcon from "../../assets/icons/solid/external-link.svg";
// id: 1,
// title: 'Modeling the Impact of a Non-Ohmic Contact on the Delay of Complementary OTFT Inverters',
// conference: 'ICDCS',
// conferenceLink: 'https://www.karunya.edu/dece/icdcs20/',
// paperLink: 'https://ieeexplore.ieee.org/abstract/document/9075743',
// downloadLink: '/cheralathan2020.pdf'
const PublicationItem = ({
  title,
  conference,
  conferenceLink,
  paperLink,
  downloadLink,
  datePublished,
}: any) => {
  return (
    <div className="mt-2">
      <hr className="border-dashed" />
      <div className="flex items-center justify-between mt-2">
        <h1 className="text-xl font-medium">{title}</h1>
        <span className="text-sm">
          <a target="_blank" href={downloadLink}>
            <DownloadIcon className="w-6 h-6 cursor-pointer" />
          </a>
        </span>
      </div>
      <h3 className="flex items-center ">
        Conference:{" "}
        <span className="text-base uppercase font-bold ml-2">{conference}</span>{" "}
        <a target="_blank" href={`${conferenceLink}`}>
          <LinkIcon className="w-4 h-4 ml-2 " />
        </a>
      </h3>
      <span className="text-sm text-gray-400">{datePublished}</span>
    </div>
  );
};

export default PublicationItem;
