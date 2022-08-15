import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Hashtag from "./components/Hashtag/Hashtag";
import Profile from "./components/Profile/Profile";
import Home from "./pages";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/hashtag' element={<Hashtag />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
