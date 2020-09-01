import Navbar from "../../components/Navbar";
import ProjectGrid from "./ProjectGrid";
import { Fragment } from "react";

const Projects = () => {
  return (
    <Fragment>
      <Navbar page={"projects"} />
      <div className="container mx-auto">
        <ProjectGrid />
      </div>
    </Fragment>
  );
};

export default Projects;
