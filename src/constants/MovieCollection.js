const API_KEY = "c31b4140473f6005b73dc66dc8420e87";

const MovieCollection = [
  {
    id: "1",
    title: "Trending",
    fetchUrl: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  {
    id: "2",
    title: "Top Rated",
    fetchUrl: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  },
  {
    id: "3",
    title: "Action Movies",
    fetchUrl: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  },
  {
    id: "4",
    title: "Comedy Movies",
    fetchUrl: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  },
  {
    id: "5",
    title: "Horror Movies",
    fetchUrl: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  },
  {
    id: "6",
    title: "Romance Movies",
    fetchUrl: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  },
];

export default MovieCollection;
