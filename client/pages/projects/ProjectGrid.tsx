import ProjectCard from "./ProjectCard";

const ProjectGrid = () => {
  return (
    <div className="flex flex-wrap mx-auto">
      <div className="w-1/4 m-2 bg-gray-500">
        <ProjectCard />
      </div>
      <div className="w-1/4 m-2 bg-gray-400">
        <ProjectCard />
      </div>
      <div className="w-1/4 m-2 bg-gray-500">
        <ProjectCard />
      </div>
      <div className="w-1/4 m-2 bg-gray-400">
        <ProjectCard />
      </div>
      <div className="w-1/4 m-2 bg-gray-500">
        <ProjectCard />
      </div>
      <div className="w-1/4 m-2 bg-gray-400">
        <ProjectCard />
      </div>
    </div>
  );
};

export default ProjectGrid;
