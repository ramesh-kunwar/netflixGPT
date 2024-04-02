import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addPopularMovies } from "../store/movieSlice";
import { API_OPTIONS } from "../utils/constants";

const usePopularMovies = () => {
  console.log("pop");
  const dispatch = useDispatch();

  const getPopularMovies = () => {
    fetch("https://api.themoviedb.org/3/movie/popular?&page=1", API_OPTIONS)
      .then((response) => response.json())
      .then((response) => {
        console.log(response?.results, "popular movies");
        return dispatch(addPopularMovies(response?.results));
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
  return <div>usePopularMovies</div>;
};
export default usePopularMovies;
