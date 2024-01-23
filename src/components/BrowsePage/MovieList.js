import { addShowMovieInfo } from "../../utils/movieSlice";
import MovieCard from "./MovieCard";
import { useDispatch } from "react-redux";

const MovieList = ({ title, movies }) => {
  const dispatch = useDispatch();
  //   console.log(movies);
  if (!title) return;

  const handleMovieClick = (movie) => {
    console.log("clicked movie: ", movie);
    dispatch(addShowMovieInfo(movie));
  };

  return (
    <div className="flex flex-col gap-3 z-50">
      <h1 className="font-bold text-sm md:text-xl lg:2xl text-white">
        {title}
      </h1>
      <div className="flex overflow-x-scroll">
        <div className="flex gap-4">
          {movies.map((movie) => (
            <MovieCard
              onClickFunction={() => handleMovieClick(movie)}
              key={movie.id}
              movie={movie}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
