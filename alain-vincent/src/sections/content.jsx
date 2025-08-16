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
            <section id="home" className="min-h-screen pt-10 flex items-center justify-center">
                <Home />
            </section>
            {
                content.map((value, i) => (
                    <section
                        key={i}
                        id={`${value.id}`}
                        className="pt-20 px-3 md:mx-auto"
                    >
                        {value.element}
                    </section>
                ))
            }
        </>
    );
}