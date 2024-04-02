import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../store/movieSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  //   const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  const getMovieVideos = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos`,
        API_OPTIONS
      );
      const data = await response.json();

      const filtereData = data.results.filter(
        (video) => video.type === "Trailer"
      )[0];
      const trailer = filtereData.length ? filtereData[0] : filtereData;

      dispatch(addTrailerVideo(trailer.key));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
  return <div>useMovieTrailer</div>;
};
export default useMovieTrailer;
