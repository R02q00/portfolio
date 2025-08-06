import Home from "../components/home.jsx";
import Story from "../components/story.jsx";
import Skills from "../components/skills.jsx";
import Project from "../components/projetct.jsx";
import Contact from "../components/contact.jsx";

export default function Content() {
    const content = [
        { id: "education", element: <Story /> },
        { id: "projets", element: <Project /> },
        { id: "competences", element: <Skills /> },
        { id: "contact", element: <Contact /> }
    ]
    return (
        <>
            <div id="home" className="mt-10 lg:mt-0 mb-8">
                <Home />
            </div>
            {
                content.map((value, i) => (
                    <div
                        key={i}
                        id={`${value.id}`}
                        className="px-3 md:mx-auto mb-6"
                    >
                        {value.element}
                    </div>
                ))
            }
        </>
    );
}