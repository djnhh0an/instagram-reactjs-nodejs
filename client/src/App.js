import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import Home from "./pages";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
