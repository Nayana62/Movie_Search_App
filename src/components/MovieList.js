import React, { useEffect, useState } from "react";
import axios from "../axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setMovieId } from "../redux/actions/movieActions";

const base_url = "https://image.tmdb.org/t/p/original";

const MovieList = ({ title, fetchUrl }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleClick = (id) => {
    dispatch(setMovieId(id));
    navigate(`/movie/${id}`);
  };

  useEffect(() => {
    const getMoviesData = async () => {
      try {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
        setLoading(false);
      } catch (error) {
        console.log("Error while fetching data", error.message);
        setLoading(false);
      }
    };

    getMoviesData();
  }, [fetchUrl]);

  return (
    <div className=" px:5 sm:px-10 py-4 sm:py-8">
      <h2 className="font-semibold text-xl ml-12">{title}</h2>
      {loading ? (
        <div></div>
      ) : (
        <div className="scroll-bar-x flex overflow-y-hidden p-5 overflow-x-scroll">
          {movies.map((movie) => {
            return (
              <img
                key={movie.id}
                onClick={() => handleClick(movie.id)}
                src={`${base_url}${movie.poster_path}`}
                alt={movie.name}
                loading="lazy"
                className="w-[150px] h-[225px] rounded-xl mx-2 object-contain cursor-pointer hover:scale-110 transition-all"
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MovieList;
