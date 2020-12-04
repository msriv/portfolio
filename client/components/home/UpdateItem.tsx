import Link from "next/link";
const UpdateItem = ({ title, date, link }: any) => {
  return (
    <div className="mt-2">
      <hr className="border-dashed" />
      <h1 className="text-base font-medium mt-2">{title}</h1>
      <div className="flex justify-between mt-2">
        <span className="text-sm text-gray-400">{date}</span>
        <span className="text-sm">
          <Link href={link}>Read More</Link>
        </span>
      </div>
    </div>
  );
};

export default UpdateItem;
