import React, { useEffect, useState } from "react";
import axios from "../../axios";
import { useSelector } from "react-redux";
import Header from "../../components/Header";
import { truncateText } from "../../components/TruncateText";

const base_url = "https://image.tmdb.org/t/p/original";

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const movie_id = useSelector((state) => state.movie.movie_id);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(
    () => {
      const getData = async () => {
        if (movie_id) {
          try {
            const response = await axios.get(
              `/movie/${movie_id}?api_key=${process.env.REACT_APP_API_KEY}`
            );
            setMovie(response.data);
            setLoading(false);
          } catch (error) {
            console.error(
              "Error fetching data:",
              error.response.data.status_message
            );
            setError(error.response.data.status_message);
            setLoading(false);
          }
        }
      };
      getData();
    }, // eslint-disable-next-line
    [movie_id]
  );

  return (
    <>
      <Header />
      {loading ? (
        <div className="w-full h-[calc(100vh-5rem)] min-h-full flex justify-center items-center">
          <h2 className="w-full h-full flex justify-center items-center text-2xl font-semibold">
            Loading...
          </h2>
        </div>
      ) : (
        <div className=" text-white h-[calc(100vh-5rem)] min-h-full bg-blue-400">
          {error === "" ? (
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-10  h-full items-center justify-center py-10 sm:py-2">
              <div className=" w-[250px] sm:w-[330px] h-[350px] sm:h-[480px] rounded-xl">
                <img
                  src={`${base_url}${movie.poster_path}`}
                  alt={movie.name}
                  loading="lazy"
                  className=" w-full h-full rounded-2xl object-contain"
                />
              </div>
              <div className=" w-80 sm:w-[900px]">
                <div className="inline">
                  <h2 className="inline text-4xl font-bold w-[800px]">
                    {movie?.title || movie?.name}
                  </h2>
                  <p className="inline text-3xl">
                    ({movie.release_date.toString().slice(0, 4)})
                  </p>
                </div>
                <p className="mb-2 font-semibold text-lg">
                  {movie.vote_average} / 10
                </p>
                <p className=" text-gray-200 italic font-semibold text-lg mb-3">
                  {movie.tagline}
                </p>
                <span className=" font-semibold text-xl">Overview</span>
                <p>{movie.overview}</p>
              </div>
            </div>
          ) : (
            <div className="w-full h-full flex justify-center items-center text-2xl font-semibold">
              <h2>{error}</h2>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default MovieDetails;
