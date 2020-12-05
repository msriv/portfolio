const Navbar = ({ children }: any) => {
  return (
    <>
      <div className="flex justify-between items-center">
        <img className="w-8 h-8" src={`./apple-touch-icon.png`} />
        <div className="flex w-48 justify-between">{children}</div>
      </div>
    </>
  );
};

export default Navbar;
