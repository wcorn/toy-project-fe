// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import HomePage from "./pages/HomePage";
import TimePage from "./pages/TimePage";
import NotesPage from "./pages/NotesPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/time" element={<TimePage />} />
        <Route path="/notes" element={<NotesPage />} />
      </Routes>
    </Router>
  );
}
