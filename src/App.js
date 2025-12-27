import {BrowserRouter,Routes,Route } from "react-router-dom";
import WelcomeCard from "./components/WelcomeCard";
import HobbyCard from "./components/HobbyCard";
import FavFood from "./components/FavFood";
import Room from "./components/Room";
import LightSwitch from "./components/LightSwitch";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomeCard />} />
        <Route path="/hobbies" element={<HobbyCard />} />
        <Route path="/foods" element={<FavFood />} />
        <Route path="/room" element={<Room/>}/>
        <Route path="/light" element={<LightSwitch/>}/>
      </Routes>
    </BrowserRouter>
  );
} 

export default App;