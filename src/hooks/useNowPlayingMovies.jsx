import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addNowPlayingMovies } from "../store/movieSlice";
import { API_OPTIONS } from "../utils/constants";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = () => {
    fetch("https://api.themoviedb.org/3/movie/now_playing?&page=1", API_OPTIONS)
      .then((response) => response.json())
      .then((response) => {
        console.log(response?.results);
        return dispatch(addNowPlayingMovies(response?.results));
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
  return <div>useNowPlayingMovies</div>;
};
export default useNowPlayingMovies;
