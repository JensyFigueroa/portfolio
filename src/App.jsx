
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/page/header/Header.jsx'
import Main from './components/page/main/Main'
import Footer from './components/page/footer/Footer'
import './index.css'
import { useEffect } from 'react'
import ReactGA from 'react-ga'

const TRACKING_ID = 'G-FY3CZ12DNC';
ReactGA.initialize(TRACKING_ID);

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollUp = document.getElementById("scrollUp");

      if (window.scrollY >= 350) {
        scrollUp.classList.add("showScroll");
      } else {
        scrollUp.classList.remove("showScroll");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
      <Footer />

      <a href="#home" className="scrollUp" id="scrollUp">
        <i className="fa-solid fa-arrow-up"></i>
      </a>
    </>
  )
}

export default App
