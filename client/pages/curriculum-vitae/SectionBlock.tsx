import shortid from "shortid";
import EducationCard from "./EducationCard";
import SkillCard from "./SkillCard";

const SectionBlock = ({ title, listData, sectionSlug }: any) => {
  const prepareBlock = (listData: any[], sectionSlug: string) => {
    let blockList: any[] = [];
    console.log(listData);
    console.log(sectionSlug);
    if (sectionSlug === "education") {
      blockList = listData.map((educationItem: object) => (
        <EducationCard key={shortid()} />
      ));
    }
    console.log(blockList);
    return blockList;
  };

  return (
    <div>
      <h1 className="text-3xl font-bold">{title}</h1>
      <div className="flex flex-col">{prepareBlock(listData, sectionSlug)}</div>
    </div>
  );
};

export default SectionBlock;
