const ProjectList = ({ children }: any) => {
  return (
    <div className="mt-12">
      <h2 className="text-xl font-bold">Projects 👾</h2>
      <div className="mx-auto my-4 grid grid-cols-1 sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center w-full">
        {children}
      </div>
    </div>
  );
};

export default ProjectList;
