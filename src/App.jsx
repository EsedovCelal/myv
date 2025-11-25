import Home from "./Component/home";
import Navbar_Result from "./Component/Navbar_Result/Navbar_Result";
import Log_in from "./Component/Log_in";
import Sign_up from "./Component/Sign_up";
import Character_for_id from "./Component/id/Character_for_id";
import Company_for_id from "./Component/id/Company_for_id";
import Concept_for_id from "./Component/id/Concept_for_id";
import Franchise_for_id from "./Component/id/Franchise_for_id";
import Game_for_id from "./Component/id/Game_for_id";
import Location_for_id from "./Component/id/Location_for_id";
import Object_for_id from "./Component/id/Object_for_id";
import Person_for_id from "./Component/id/Person_for_id";
import Video_for_id from "./Component/id/Video_for_id";
import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Navbar_Result />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/log_in" element={<Log_in />} />
          <Route path="/Sign_up" element={<Sign_up />} />
          <Route path="/Character/:id" element={<Character_for_id />} />
          <Route path="/company/:id" element={<Company_for_id />} />
          <Route path="/Concept/:id" element={<Concept_for_id />} />
          <Route path="/Franchise/:id" element={<Franchise_for_id />} />
          <Route path="/Game/:id" element={<Game_for_id />} />
          <Route path="/location/:id" element={<Location_for_id />} />
          <Route path="/object/:id" element={<Object_for_id />} />
          <Route path="/person/:id" element={<Person_for_id />} />
          <Route path="/video/:id" element={<Video_for_id />} />
        </Routes>
      </div>
    </div>
  );
};
export default App;
