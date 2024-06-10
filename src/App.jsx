//utils
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import "./App.css";

//pages
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;