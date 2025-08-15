import { useState, useEffect } from "react";
import './../styles/header.css'

function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const showNavigation = () => {
    setNavOpen(!navOpen);
  }
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'education', 'projets', 'competences', 'contact'];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menu = [
    { name: "Home", link: '#home', id: 'home' },
    { name: "Education", link: '#education', id: 'education' },
    { name: "Projets", link: '#projets', id: 'projets' },
    { name: "Competences", link: '#competences', id: 'competences' },
    { name: "Contact", link: '#contact', id: 'contact' },
  ]

  return (
    <nav className="sticky top-0 z-50 h-15 lg:h-20 flex justify-between bg-base-100 px-4 shadow-lg">
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
        <div className={navOpen ? "navlinks-container open" : "navlinks-container hidden"} onClick={() => setNavOpen(false)}>
          <div className="w-[50%] md:w-full flex flex-col md:flex-row gap-3 bg-base-100 p-4 md:p-0">
            {
              menu.map((items, index) => (
                <a
                  key={index}
                  className={`cursor-pointer px-2 ${activeSection === items.id ? 'text-primary font-bold' : ''}`}
                  href={`${items.link}`}
                  onClick={() => setNavOpen(false)}
                >
                  {items.name}
                </a>

              ))
            }
          </div>


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