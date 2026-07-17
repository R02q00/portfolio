import { useState, useEffect } from "react";
import { GoHome as Home, GoProject as Project, GoGlobe } from "react-icons/go";
import { IoSchoolOutline as Education } from "react-icons/io5";
import { LuContact as Contact } from "react-icons/lu";
import { AiOutlineCode as Competences } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../constants"
import "./../styles/header.css";

function Header() {
  const { t, i18n } = useTranslation();
  const [navOpen, setNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const showNavigation = () => {
    setNavOpen(prev => !prev);
  };

  const handleScroll = () => {
    const sections = ["home", "education", "projets", "competences", "contact"];
    const middle = window.innerHeight / 2;
    for (const section of sections) {
      const element = document.getElementById(section);
      if (!element) continue;
      const rect = element.getBoundingClientRect();
      if (rect.top <= middle && rect.bottom >= middle) {
        setActiveSection(section);
        break;
      }
    }
  };

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    document.activeElement?.blur();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const menus = [
    { icon: <Home size={20} />, key: "nav.home", link: "#home", id: "home" },
    { icon: <Education size={20} />, key: "nav.education", link: "#education", id: "education" },
    { icon: <Project size={20} />, key: "nav.projects", link: "#projets", id: "projets" },
    { icon: <Competences size={20} />, key: "nav.skills", link: "#competences", id: "competences" },
    { icon: <Contact size={20} />, key: "nav.contact", link: "#contact", id: "contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 h-15 md:h-20 flex justify-between bg-base-100 px-4 shadow-lg">

      <div className="flex items-center">
        <a href="#home" className="text-xl font-bold">
          {t("title")}
        </a>
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

        <div className={`navlinks-container ${navOpen ? "open" : "hidden"}`}>

          <div className="w-[50%] md:w-full flex flex-col md:flex-row gap-4 md:gap-6 bg-base-100 p-4 md:p-0">

            {menus.map((item) => (
              <a
                key={item.id}
                className={`cursor-pointer flex items-center gap-2 ${activeSection === item.id ? "text-primary" : ""}`}
                href={item.link}
                onClick={() => setNavOpen(false)}
              >
                {item.icon}
                <h2>{t(item.key)}</h2>
              </a>
            ))}

          </div>
        </div>

        {/* Language Switcher */}
        <div className="flex items-center gap-3 ">

          <div className="hidden md:block dropdown dropdown-center">
            <div tabIndex={0} role="button" className="btn btn-xs btn-circle bg-transparent border-base-content">
              <GoGlobe />
            </div>
            <ul className="dropdown-content menu bg-base-100 rounded-box w-40 p-2 shadow-sm">
              {LANGUAGES.map((lang, index) => (
                <li key={index} className="p-1 cursor-pointer">
                  <button
                    className=""
                    onClick={() => { handleChangeLanguage(lang.code) }}
                  >
                    {lang.label}
                  </button>
                </li>
              ))}
            </ul>

          </div>

          <label className="toggle text-base-content">
            <input type="checkbox" value="dark" className="theme-controller" />
            <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></g></svg>
            <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></g></svg>
          </label>

        </div>
      </div>
    </nav>
  );
}

export default Header;