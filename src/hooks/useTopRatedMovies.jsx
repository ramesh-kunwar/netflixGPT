import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addTopRatedMovies } from "../store/movieSlice";
import { API_OPTIONS } from "../utils/constants";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const getTopRatedMovies = () => {
    fetch("https://api.themoviedb.org/3/movie/top_rated?&page=1", API_OPTIONS)
      .then((response) => response.json())
      .then((response) => {
        return dispatch(addTopRatedMovies(response?.results));
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};
export default useTopRatedMovies;
