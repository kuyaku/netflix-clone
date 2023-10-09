const Navbar = ({ children, shift }) => {
  return (
    <div
      className={`${shift} flex flex-col w-fit bg-black absolute top-[100%] right-0  rounded-br-sm`}
    >
      {children}
    </div>
  );
};

export default Navbar;
