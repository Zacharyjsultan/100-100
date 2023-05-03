import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Landing from "./components/Landing";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Landing" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
