import { X } from "react-feather";
import { useDispatch } from "react-redux";
import { addShowMovieInfo } from "../../utils/movieSlice";

const MovieMoreInfo = ({ showMovieInfo }) => {
  const dispatch = useDispatch();
  const handleCloseClick = () => {
    dispatch(addShowMovieInfo(null));
  };
  console.log("info ", showMovieInfo);

  return (
    <div className="relative w-full md:w-10/12 lg:w-[800px] bg-black rounded-md overflow-hidden">
      <div className="absolute right-0 top-0 m-2 h-[25px] w-[25px] lg:h-[40px] lg:w-[40px] z-50">
        <X
          onClick={handleCloseClick}
          className="cursor-pointer h-full w-full"
        />
      </div>
      <div className="relative bg-red-300 w-full aspect-video">
        <div className="absolute h-full w-full bg-black bg-opacity-50 flex items-end pl-12 py-12">
          <img
            className="max-h-full"
            src={
              "https://image.tmdb.org/t/p/w342/" +
              showMovieInfo?.movieImages[0]?.file_path
            }
            alt={showMovieInfo.title}
          />
        </div>
        <img
          src={
            "https://image.tmdb.org/t/p/w1280/" + showMovieInfo.backdrop_path
          }
          alt={showMovieInfo.title}
        />
      </div>
    </div>
  );
};

export default MovieMoreInfo;
