import { BrowserRouter, Routes, Route} from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import Three from "./components/block/Three/Three";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={ <LandingPage /> } />
              <Route path="/about" element={ <Three /> } />
          </Routes>
      </BrowserRouter>

  );
}

export default App;
