const Footer1 = () => {
  return (
    <div className="flex justify-center align-middle text-gray-400 bg-black bg-opacity-70 w-full flex-1 border-t border-gray-500 md:border-none">
      <div className="flex flex-col gap-6 w-full lg:w-[800px] p-6">
        <div>
          <p className="text-lg text-gray-500">
            Questions? Call 000-XXX-000-XXX
          </p>
        </div>
        <div className="flex gap-5 flex-wrap">
          <p className="text-gray-500 text-sm w-[40%] md:w-[20%]">FAQ</p>
          <p className="text-gray-500 text-sm w-[40%] md:w-[20%]">
            Help Centre
          </p>
          <p className="text-gray-500 text-sm w-[40%] md:w-[20%]">
            Terms of Use
          </p>
          <p className="text-gray-500 text-sm w-[40%] md:w-[20%]">Privacy</p>
          <p className="text-gray-500 text-sm w-[40%] md:w-[20%]">
            Cookie Preference
          </p>
          <p className="text-gray-500 text-sm w-[40%] md:w-[20%]">
            Corporate Information
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer1;
