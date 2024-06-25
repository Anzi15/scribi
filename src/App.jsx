//utils
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import "./App.css";

//pages
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LogInPage from "./pages/LogInPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/log-in" element={<LogInPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
