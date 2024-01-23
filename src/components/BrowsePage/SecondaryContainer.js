import MovieList from "./MovieList";

const SecondaryContainer = ({ nowPlayingMovies }) => {
  return (
    <div className="z-30 bg-black mt-16 md:mt-0">
      <div className="px-2 md:px-6 lg:px-8 py-4 md:-mt-24 bg-black">
        <MovieList title={"Now Playing Movies"} movies={nowPlayingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
