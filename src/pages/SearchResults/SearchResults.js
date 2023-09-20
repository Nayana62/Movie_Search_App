import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { setMovieId } from "../../redux/actions/movieActions";
import { useNavigate } from "react-router-dom";
import axios from "../../axios";
import { truncateText } from "../../components/TruncateText";
import default_img from "../../assets/default_image_01.png";

const base_url = "https://image.tmdb.org/t/p/original";

const SearchResults = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const searchInput = useSelector((state) => state.search.searchInput);

  const handleClick = (id) => {
    dispatch(setMovieId(id));
    navigate(`/movie/${id}`);
  };

  useEffect(
    () => {
      const handleSearch = async () => {
        const formattedQuery = searchInput.replace(/\s+/g, "+");

        try {
          const response = await axios.get(
            `search/movie?query=${formattedQuery}&api_key=${process.env.REACT_APP_API_KEY}`
          );
          setSearchResults(response.data.results);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching data:", error);
          setLoading(false);
        }
      };
      handleSearch();
    }, // eslint-disable-next-line
    [searchInput]
  );

  return (
    <div>
      <Header />
      {loading ? (
        <div className="w-full h-[calc(100vh-5rem)] flex justify-center items-center">
          <h2 className="w-full h-full flex justify-center items-center text-2xl font-semibold">
            Loading...
          </h2>
        </div>
      ) : (
        <div>
          {searchResults.length === 0 ? (
            <div className="flex justify-center items-center mt-60">
              There are no movies that matched your query.
            </div>
          ) : (
            <div>
              {searchResults.map((movie) => {
                return (
                  <div
                    key={movie.id}
                    onClick={() => handleClick(movie.id)}
                    className="h-[150px] border border-gray-300 cursor-pointer flex my-5 mx-16 shadow-md rounded-xl gap-5 items-center"
                  >
                    <img
                      src={`${base_url}${movie.poster_path}`}
                      alt={movie.title || movie.name}
                      loading="lazy"
                      className="w-[100px] h-[150px] rounded-xl object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = default_img;
                      }}
                    />
                    <div>
                      <h2 className=" text-lg font-semibold">
                        {movie.title || movie.name}
                      </h2>
                      <p className=" text-gray-600">{movie.release_date}</p>
                      <p className=" text-sm mt-3 ">
                        {truncateText(movie.overview, 390)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
