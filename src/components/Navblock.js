const Navblock = ({ children }) => {
  return (
    <div className="flex flex-col min-w-[130px] max-w-[200px] p-4  border-b border-gray-600">
      {children}
    </div>
  );
};

export default Navblock;
