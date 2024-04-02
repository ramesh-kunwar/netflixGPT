import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUpcomingMovies } from "../store/movieSlice";
import { API_OPTIONS } from "../utils/constants";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const getUpcomingMovies = () => {
    fetch("https://api.themoviedb.org/3/movie/upcoming?&page=1", API_OPTIONS)
      .then((response) => response.json())
      .then((response) => {
        return dispatch(addUpcomingMovies(response?.results));
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);
};
export default useUpcomingMovies;
