import Header2 from "./Header2";
import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies";
import BrowsePageWrapper from "./BrowsePage/BrowsePageWrapper";
import { useSelector } from "react-redux";
import MovieMoreInfo from "./BrowsePage/MovieMoreInfo";

const Browser = () => {
  useNowPlayingMovies();
  const showMovieInfo = useSelector((store) => store.movies.showMovieInfo);
  console.log(showMovieInfo);
  return (
    <div className="flex flex-col bg-black">
      {showMovieInfo && (
        <div className="text-white flex justify-center absolute top-0 w-full h-full bg-black bg-opacity-60 z-50 p-10 pt-14">
          <MovieMoreInfo showMovieInfo={showMovieInfo} />
        </div>
      )}
      <Header2 />
      <BrowsePageWrapper />
    </div>
  );
};

export default Browser;
