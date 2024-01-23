import SecondaryContainer from "./SecondaryContainer";
import MainContainer from "./MainContainer";
import { useSelector } from "react-redux";
import { getRandomIndex } from "../../utils/randomNumber";

const BrowsePageWrapper = () => {
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );
  if (!nowPlayingMovies) return;
  const randomMovie = nowPlayingMovies[getRandomIndex(nowPlayingMovies.length)];
  return (
    <>
      <MainContainer randomMovie={randomMovie} />
      <SecondaryContainer nowPlayingMovies={nowPlayingMovies} />
    </>
  );
};

export default BrowsePageWrapper;
