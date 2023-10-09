import {
  Bell,
  ChevronDown,
  ChevronUp,
  Edit2,
  HelpCircle,
  Menu,
  Search,
  Truck,
  User,
} from "react-feather";
import { useState } from "react";
import Navbar from "./Navbar";
import Navblock from "./Navblock";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { useSelector } from "react-redux";

const Header2 = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  // const [showSearch, setShowSearch] = useState(false);
  const [showUserInfo, setUserInfo] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  console.log(user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // navigate to sign in as sign out is successful and remove the user
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        // catch error here
      });
  };

  return (
    <div className="w-full px-4 flex justify-between relative bg-black">
      <div className="border border-black flex gap-2 flex-1 h-12 sm:h-14">
        <Menu
          onClick={() => setShowSidebar(!showSidebar)}
          className="text-white w-8 h-full my-auto sm:hidden"
        />
        <img
          className="h-full"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
        <div className="hidden lg:flex gap-4 items-center ml-4">
          <p className="text-gray-300 text-sm">Home</p>
          <p className="text-gray-300 text-sm whitespace-nowrap">TV Shows</p>
          <p className="text-gray-300 text-sm whitespace-nowrap">Movies</p>
          <p className="text-gray-300 text-sm whitespace-nowrap">
            New & Popular
          </p>
          <p className="text-gray-300 text-sm whitespace-nowrap">My List</p>
          <p className="text-gray-300 text-sm whitespace-nowrap">
            Browse by Languages
          </p>
        </div>
      </div>
      <div className="flex items-center gap-1 w-[100px] sm:w-[300px] lg:w-fit mr-2">
        <input
          className="bg-inherit my-auto border border-gray-500 w-full h-7 p-2 rounded-sm lg:hidden"
          type="text"
          placeholder="Search..."
        />
        <Search className="hidden md:block text-white w-8" />
      </div>
      <div className="hidden sm:flex items-center gap-2 p-2 relative">
        <Bell className="text-white w-8" />
        <img
          className="rounded h-full"
          src="https://occ-0-6246-2186.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e"
          alt="user-img"
        />
        {!showUserInfo ? (
          <ChevronDown
            onClick={() => setUserInfo(!showUserInfo)}
            className="text-white w-8 cursor-pointer"
          />
        ) : (
          <ChevronUp
            onClick={() => setUserInfo(!showUserInfo)}
            className="text-white w-8 cursor-pointer"
          />
        )}
        {showUserInfo && (
          <Navbar shift={"right-0"}>
            <Navblock>
              <div className="flex flex-col gap-2">
                <p className="text-gray-300 flex whitespace-nowrap cursor-pointer">
                  <Edit2 className="mr-2" /> Manage Profiles
                </p>
                <p className="text-gray-300 flex whitespace-nowrap cursor-pointer">
                  <Truck className="mr-2" /> Transfer Profiles
                </p>
                <p className="text-gray-300 flex whitespace-nowrap cursor-pointer">
                  <User className="mr-2" /> Account
                </p>
                <p className="text-gray-300 flex whitespace-nowrap cursor-pointer">
                  <HelpCircle className="mr-2" /> Help Center
                </p>
              </div>
            </Navblock>
            <Navblock>
              <p
                onClick={handleSignOut}
                className="text-gray-400 text-center whitespace-nowrap cursor-pointer"
              >
                Sign out of Netflix
              </p>
            </Navblock>
          </Navbar>
        )}
      </div>
      {/* show navbar on click with */}
      {showSidebar && (
        <Navbar shift={"left-0"}>
          <Navblock>
            <div className="flex flex-col gap-2">
              <div className="flex gap-x-2">
                <img
                  className="rounded"
                  src="https://occ-0-6246-2186.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e"
                  alt="user-img"
                />
                <div>
                  <h3 className="text-gray-300 font-bold">
                    {user?.displayName}
                  </h3>
                </div>
              </div>

              <p className="font-bold text-gray-400 text-sm">Account</p>
              <p className="font-bold text-gray-400 text-sm">Help Center</p>
              <p
                onClick={handleSignOut}
                className="font-bold text-gray-400 text-sm cursor-pointer"
              >
                Sign out of Netflix
              </p>
            </div>
          </Navblock>
          <Navblock>
            <div className="flex flex-col gap-2">
              <h3 className="font-bold font-md text-gray-300">Home</h3>
              <p className="font-bold font-sm text-gray-400">My List</p>
              <p className="font-bold font-sm text-gray-400">Thrillers</p>
              <p className="font-bold font-sm text-gray-400">
                Hindi Movies & TV
              </p>
              <p className="font-bold font-sm text-gray-400">
                Malyalam-Language Movies
              </p>
            </div>
          </Navblock>
        </Navbar>
      )}
    </div>
  );
};

export default Header2;
