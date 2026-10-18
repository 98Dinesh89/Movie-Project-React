import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Favorite from "./pages/Favorite.jsx";
import NavBar from "./components/NavBar.jsx";
import "./css/App.css";
import { MovieProvider } from "./contexts/MovieContext.jsx";

const App = () => {
  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorite />} />
        </Routes>
      </main>
    </MovieProvider>
  );
};

export default App;
