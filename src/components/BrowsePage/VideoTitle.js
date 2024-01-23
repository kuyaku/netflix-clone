import { Play, Info } from "react-feather";
const VideoTitle = ({ logo, overview }) => {
  if (!logo) return;
  return (
    <div className="font-3xl font-bold text-white w-fit mt-20">
      <img
        className="drop-shadow-2xl filter brightness-100 w-[400px] max-h-[90px] lg:max-h-[200px] lg:w-auto"
        src={"https://image.tmdb.org/t/p/w500/" + logo}
        alt="movieLogo"
      />
      <div className="w-[500px] lg:w-[700px] my-4">
        <p className="hidden xl:block text-xl lg:text-2xl drop-shadow-[0px_0px_10px_rgba(0,0,0,1)] text-pink-100 font-normal">
          {overview}
        </p>
      </div>
      <div className="flex gap-4">
        <button className="flex items-center py-3 lg:py-5 bg-red-600 text-white px-10 lg:px-16 text-2xl lg:text-3xl rounded-lg">
          <Play className="fill-white mr-2" />
          Trailer
        </button>
        <button className="flex items-center py-3 lg:py-5 bg-white text-black px-6 lg:px-10  text-2xl lg:text-3xl rounded-lg">
          <Info className="mr-2" /> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
