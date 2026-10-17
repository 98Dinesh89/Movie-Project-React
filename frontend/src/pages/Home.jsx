import MovieCard from "../components/MovieCard";

const Home = () => {
  const movies = [
    { id: 1, title: "Dinesh Movie", release_date: 2024 },
    { id: 2, title: "Ankit Movie", release_date: 2023 },
    { id: 3, title: "Mayank Movie", release_date: 2021 },
    { id: 4, title: "Mangesh Movie", release_date: 2022 },
  ];

  return (
    <div className="homw">
      <div className="movies-grid">
        {movies.map((movie) => {
          return <MovieCard movie={movie} key={movie.id} />;
        })}
      </div>
    </div>
  );
};

export default Home;
