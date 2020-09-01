import { Fragment } from "react";
import Navbar from "../../components/Navbar";
import TopSection from "./TopSection";
import SectionBlock from "./SectionBlock";
import cvConfig from "./cvConfig";

const CV = () => {
  return (
    <Fragment>
      <Navbar page={"cv"} />
      <TopSection />
      <div className="grid grid-cols-2 gap-1 container mx-auto mt-5">
        <div className="m-2">
          <SectionBlock
            title="Education"
            listData={cvConfig.education}
            sectionSlug="education"
          />
        </div>
        <div className="m-2">
          <SectionBlock
            title="Skills"
            listData={cvConfig.skills}
            sectionSlug="skills"
          />
        </div>
      </div>
    </Fragment>
  );
};

export default CV;
