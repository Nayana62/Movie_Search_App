import React from "react";
import Header from "../../components/Header";
import MovieCollection from "../../constants/MovieCollection";
import MovieList from "../../components/MovieList";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="overflow-x-hidden">
        {MovieCollection.map((movies) => {
          return (
            <MovieList
              key={movies.id}
              title={movies.title}
              fetchUrl={movies.fetchUrl}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
