import React, { useState } from "react";
import Home from "../components/home.jsx";
import './../styles/header.css'
import Story from "../components/story.jsx";

function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const menu = document.querySelector(".humberger");
  const showNavigation = () => {
    setNavOpen(!navOpen);
  }

  return (
    <div className="text-base-content">
      <div className="relative h-15 flex justify-between bg-base-100 px-4 py-2 shadow-sm">
        <div className="flex items-center">
          <h3 className="text-bold">R02q00</h3>
        </div>
        <div className="w-full flex justify-end md:justify-between items-center gap-5">
          <button
            className={navOpen ? "humberger open" : "humberger"}
            type="button"
            onClick={showNavigation}
          >
            <span className="bg-base-content"></span>
            <span className="bg-base-content"></span>
            <span className="bg-base-content"></span>
          </button>

          <div className={navOpen ? "navlinks-container open bg-base-100 w-[50%]" : "navlinks-container hidden"}>
            <a className="cursor-pointer" onClick={() => { setNavOpen(false) }}>Home</a>
            <span className="cursor-pointer" onClick={() => { setNavOpen(false) }}>Experience</span>
            <span className="cursor-pointer" onClick={() => { setNavOpen(false) }}>Realisations</span>
            <span className="cursor-pointer" onClick={() => { setNavOpen(false) }}>Competences</span>
          </div>

          <div className="flex items-center">
            <label className="toggle text-base-content">
              <input type="checkbox" value="dark" className="theme-controller" />

              <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></g></svg>

              <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></g></svg>

            </label>
          </div>
        </div>

      </div>
      <div className="mt-2 px-3">
        <Home />
      </div>
    </div>
  );
}

export default Header;