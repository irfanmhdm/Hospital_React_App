import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import RegPatient from "./components/RegPatient";
import Search from "./components/Search";
import Delete from "./components/Delete";
import View from "./components/View";

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/register" element={<RegPatient />} />
        <Route path="/search" element={<Search />} />
        <Route path="/delete" element={<Delete />} />
        <Route path="/view" element={<View />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
      
     