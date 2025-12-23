import {BrowserRouter,Routes,Route } from "react-router-dom";
import WelcomeCard from "./components/WelcomeCard";
import HobbyCard from "./components/HobbyCard";
import FavFood from "./components/FavFood";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomeCard />} />
        <Route path="/hobbies" element={<HobbyCard />} />
        <Route path="/foods" element={<FavFood />} />
      </Routes>
    </BrowserRouter>
  );
} 

export default App;