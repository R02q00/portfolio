import React, { useState } from "react";
import Home from "../components/home.jsx";
import Story from "../components/story.jsx";
import Skills from "../components/skills.jsx";
import Project from "../components/projetct.jsx";
import './../styles/header.css'
import Contact from "../components/contact.jsx";


function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const showNavigation = () => {
    setNavOpen(!navOpen);
  }
  const menu = [
    { name: "Home", link: '#home' },
    { name: "Education", link: '#education' },
    { name: "Experience", link: '#experience' },
    { name: "Projets", link: '#projet' },
    { name: "Competences", link: '#competences' },
    { name: "Contact", link: '#contact' },

  ]
  const content = [
    { id: "#home", element: <Home /> },
    { id: "#education", element: <Story /> },
    { id: "#projets", element: <Project /> },
    { id: "#competences", element: <Skills /> },
    { id: "#contact", element: <Contact /> }


  ]
  return (
    <div className="">
      <div className="relative h-15 flex justify-between bg-base-100 px-4 py-2 shadow-sm">
        <div className="flex items-center justify-center">
          <a href="" className="bg-yellow-400text-xl font-bold">AV</a>
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
            {
              menu.map((items, i) => (
                <a
                  key={i}
                  className="cursor-pointer px-2"
                  href={`${items.link}`}
                  onClick={() => { setNavOpen(false) }}>{items.name}</a>

              ))
            }

          </div>

          <div className="flex items-center">
            <label className="toggle text-base-content">
              <input type="checkbox" value="light" className="theme-controller" />
              <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></g></svg>
              <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></g></svg>
            </label>
          </div>
        </div>

      </div>
      {
        content.map((value, i)=>(
          <div
            key={i}
            className="px-3 mt-2"
          >
            {value.element}
          </div>
        ))
      }
    </div>
  );
}

export default Header;