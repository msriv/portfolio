const UpdateList = ({ children, title }: any) => {
  return (
    <div className="mt-12">
      <h2 className="text-xl font-bold">{title}</h2>
      {children}
    </div>
  );
};

export default UpdateList;
