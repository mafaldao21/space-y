import './App.css';
import React from "react";
import Navbar from './components/NavBar';
import LandingPage from './views/LandingPage';
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from './components/Footer';

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundColor: "black"
      }}
    >
      <Navbar />
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App
