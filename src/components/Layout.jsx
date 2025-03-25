// src/components/Layout.jsx
import React from "react";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">My App</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <Navigation />
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="container mt-4">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3 mt-4">
        © {new Date().getFullYear()} My App. All rights reserved.
      </footer>
    </div>
  );
}
