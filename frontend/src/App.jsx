import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Favorite from "./pages/Favorite.jsx";
import NavBar from "./components/NavBar.jsx";

const App = () => {
  return (
    <div>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorite />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
