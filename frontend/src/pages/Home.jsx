import { useState } from "react";
import MovieCard from "../components/MovieCard";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    { id: 1, title: "Dinesh Movie", release_date: 2024 },
    { id: 2, title: "Ankit Movie", release_date: 2023 },
    { id: 3, title: "Mayank Movie", release_date: 2021 },
    { id: 4, title: "Mangesh Movie", release_date: 2022 },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery("");
  };

  return (
    <div className="home">
      <form onSubmit={(e) => handleSearch(e)} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
