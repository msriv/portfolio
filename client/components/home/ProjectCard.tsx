import ShortId from "shortid";
import CodeIcon from "../../assets/icons/solid/code.svg";
import { Tools } from "../Portfolio.data";
import { ToolInterface } from "../Interfaces";
import stc from "string-to-color";

const ProjectCard = ({ title, slug, brief, tools, tags, link }) => {
  const getIcon = (iconName: String) => {
    let icon = Tools.filter((tool: ToolInterface) => {
      return tool.name === iconName;
    });
    return icon[0].icon;
  };

  return (
    <div className="flex flex-col max-w-sm mx-auto bg-gray-800 shadow-lg rounded-lg overflow-hidden pb-4 w-11/12">
      <div className="flex-grow pt-6 px-6">
        <div className="inline-flex justify-between w-full">
          <h1 className="text-lg font-semibold ">{title}</h1>
        </div>
        <p className="pt-2 text-base ">{brief}</p>
      </div>
      <div className="pt-4 px-6 flex flex-row justify-between">
        <div className="flex items-center mt-4 text-gray-700">
          <CodeIcon className="w-6 h-6 text-purple-600" />
          <h1 className="px-2 text-sm flex space-x-2">
            {tools
              ? tools.map((tool: String) => {
                  return (
                    <img
                      key={ShortId.generate()}
                      src={getIcon(tool)}
                      className="w-6 h-6"
                    />
                  );
                })
              : null}
          </h1>
        </div>
        <div className="flex items-center mt-4 text-gray-700">
          <h1 className="px-2 text-sm">
            {tags
              ? tags.map((tag: String) => {
                  return (
                    <span
                      key={ShortId.generate()}
                      className="px-2 py-1 rounded-xl text-white"
                      style={{ background: stc(tag) }}
                    >
                      {tag}
                    </span>
                  );
                })
              : null}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;