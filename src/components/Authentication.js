import Header1 from "./Header1";
import Footer1 from "./Footer1";
import LoginSignup from "./LoginSignup";

const Authentication = () => {
  return (
    <div className="bg-black bg-fixed bg-cover min-h-fit md:bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/893a42ad-6a39-43c2-bbc1-a951ec64ed6d/1d86e0ac-428c-4dfa-9810-5251dbf446f8/IN-en-20231002-popsignuptwoweeks-perspective_alpha_website_large.jpg')]">
      <div className="flex justify-between flex-col w-full  bg-black bg-opacity-50">
        <div className="min-h-[92vh]">
          <Header1 />
          <LoginSignup />
        </div>
        <div className="">
          <Footer1 />
        </div>
      </div>
    </div>
  );
};

export default Authentication;
