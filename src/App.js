import "./App.css";
import Home from "./pages/Home/Home.js";
import SearchResults from "./pages/SearchResults/SearchResults";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import { Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/Error/ErrorPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
