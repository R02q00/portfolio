import React, { useState } from "react";
import './../styles/header.css'

function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const showNavigation = () => {
    setNavOpen(!navOpen);
  }
  const menu = [
    { name: "Home", link: '#home' },
    { name: "Education", link: '#education' },
    { name: "Projets", link: '#projets' },
    { name: "Competences", link: '#competences' },
    { name: "Contact", link: '#contact' },
  ]

  return (
    <nav className="relative h-15 lg:h-20 flex justify-between bg-base-100 px-4 shadow-lg">
      <div className="flex items-center justify-center">
        <a href="#home" className="text-xl font-bold">AV</a>
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
            menu.map((items, index) => (
              <a
                key={index}
                className="cursor-pointer px-2"
                href={`${items.link}`}
                onClick={() => { setNavOpen(false) }}
              >
                {items.name}
              </a>

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

    </nav>
  );
}

export default Header;