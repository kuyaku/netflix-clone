import Header2 from "./Header2";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Browser = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!auth.currentUser) {
      navigate("/");
    }
  }, []);
  return (
    <div className="">
      <Header2 />
      <div className="w-[120px] h-[120px] flex bg-yellow-200 sm:bg-green-200 md:bg-red-200 lg:bg-blue-200"></div>
    </div>
  );
};

export default Browser;
