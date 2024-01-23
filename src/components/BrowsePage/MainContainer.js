import { useEffect, useState } from "react";
import BackVideo from "./BackVideo";
import VideoTitle from "./VideoTitle";
import { getRandomIndex } from "../../utils/randomNumber";

const MainContainer = ({ randomMovie }) => {
  const [showYoutube, setShowYoutube] = useState(true);
  // console.log(randomMovie.backdrop_path);

  const randomVideo =
    randomMovie.movieVideos[getRandomIndex(randomMovie.movieVideos.length)];

  const movieLogo = randomMovie.movieImages.filter(
    (image) => image["iso_639_1"] === "en"
  );
  const randomMovieLogo = movieLogo[getRandomIndex(movieLogo.length)];
  // console.log(randomMovieLogo);

  useEffect(() => {
    const timer = setInterval(() => setShowYoutube(!showYoutube), 30000);
    return () => clearInterval(timer);
  }, [showYoutube]);
  return (
    <div className="hidden relative md:flex  items-center w-full aspect-video max-h-screen bg-black bg-opacity-30">
      <div className="flex items-center overflow-hidden absolute top-0 w-full h-full bg-green-400 bg-opacity-10 z-10">
        {showYoutube ? (
          <div className="h-full w-full flex items-center overflow-hidden">
            <BackVideo movieKey={randomVideo.key} />
          </div>
        ) : (
          <div className="h-full w-full">
            <img
              className="object-cover h-full w-full"
              src={
                "https://image.tmdb.org/t/p/w1280/" + randomMovie.backdrop_path
              }
              alt={randomMovie.title}
            />
          </div>
        )}
      </div>

      <div className="flex items-center absolute h-[93%] top-0 z-30 w-fit pl-20 bg-blue-800 bg-opacity-5 mb-20">
        <VideoTitle
          logo={randomMovieLogo.file_path}
          overview={randomMovie.overview}
        />
      </div>
    </div>
  );
};

export default MainContainer;
