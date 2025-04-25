import { BrowserRouter as Router , Routes,Route } from "react-router-dom";
import Planets from "./pages/Planets";
import './styles/global.scss'
import PlanetDetail from "./pages/PlanetDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/planets-app-one" element={<Planets />} />
        <Route path="/detailPlanet/:planetId" element={<PlanetDetail/>}/>
      </Routes>
    </Router>
  );
}

export default App;
