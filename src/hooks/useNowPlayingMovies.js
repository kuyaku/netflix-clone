import { TMDB_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";

const getSimiarMovies = async (movieId, page = 1) => {
  const data = await fetch(
    "https://api.themoviedb.org/3/movie/" + movieId + "/similar?page=" + page,
    TMDB_OPTIONS
  );
  const json = await data.json();
  //   console.log("similar: ", json);
  return json.results;
};

const getMovieImages = async (movieId) => {
  const data = await fetch(
    "https://api.themoviedb.org/3/movie/" + movieId + "/images",
    TMDB_OPTIONS
  );
  const json = await data.json();
  //   console.log("images: ", json);
  return json.logos;
};

const getMovieVideos = async (movieId) => {
  const data = await fetch(
    "https://api.themoviedb.org/3/movie/" + movieId + "/videos",
    TMDB_OPTIONS
  );
  const json = await data.json();
  //   console.log("videos: ", json);
  return json.results.filter(
    (video) => video.type === "Trailer" || video.type === "Teasure"
  );
};

const getMovieCredits = async (movieId) => {
  const data = await fetch("" + movieId, TMDB_OPTIONS);
  const json = await data.json();
};

export const useNowPlayingMovies = async (page = 1) => {
  const dispatch = useDispatch();
  const data = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?page=" + page,
    TMDB_OPTIONS
  );
  const json = await data.json();
  // json.results
  const movieList = json.results.map(async (movie) => {
    const { id, title, overview, backdrop_path, poster_path } = movie;
    const similarMovies = await getSimiarMovies(id);
    const movieLogos = await getMovieImages(id);
    const movieVideos = await getMovieVideos(id);
    return {
      id: id,
      title: title,
      overview: overview,
      backdrop_path: backdrop_path,
      poster_path: poster_path,
      movieImages: movieLogos,
      movieVideos: movieVideos,
      similarMovies: similarMovies,
    };
  });
  //   console.log(movieList);
  const moviesData = await Promise.all(movieList);
  //   console.log(moviesData);
  dispatch(addNowPlayingMovies(moviesData));
  console.log("called");
};
