const BackVideo = ({ movieKey }) => {
  return (
    <iframe
      className="w-full h-full aspect-video filter brightness-30"
      src={
        "https://www.youtube.com/embed/" +
        movieKey +
        "?&start=10&autoplay=1&mute=1"
      }
      title="YouTube video player"
    ></iframe>
  );
};

export default BackVideo;
