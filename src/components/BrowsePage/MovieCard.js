const MovieCard = ({ movie, onClickFunction }) => {
  return (
    <div
      onClick={() => onClickFunction()}
      className="w-[100px] md:w-[150px] lg:w-[200px] "
    >
      <img
        className="rounded-xl"
        src={"https://image.tmdb.org/t/p/w780/" + movie.poster_path}
        alt={movie.title}
      />
    </div>
  );
};

export default MovieCard;
