
const Skills = () => {
    const skillsData = [
        {
            categories: "Web Development",
            list: [
                "HTML5",
                "CSS3",
                "JavaScript",
                "React js",
                "Tailwind CSS"
            ]
        },
        {
            categories: "Backend & API",
            list: [
                "Node.js",
                "Django",
                "Spring boot"
            ]
        },
        {
            categories: "Databases",
            list: [
                "PostgreSQL",
                "MySQL",
                "SQL"
            ]
        },
        {
            categories: "Tools & Deployement",
            list: [
                "Git & GitHub",
                "Vercel / Netlify",
                "Docker(basic)"
            ]
        },
        {
            categories: "Modelisation et Conception",
            list: [
                "MERISE",
                "UML"
            ]
        },
        {
            categories: "Other",
            list: [
                "Figma",
                "Inkscape",
                "Linux"
            ]
        }

    ]
    return (
        <div>
            <h1 className="text-xl font-semibold">Skills</h1>
            <div className="grid md:grid-cols-2 gap-4">
                {
                    skillsData.map((value, index) => (
                        <div key={index} className="px-2 py-4 shadow-md">
                            <h3 className="text-lg font-medium mb-1">{value.categories}</h3>
                            {
                                value.list.map((list, i) => (
                                    <ul className="" key={i}>
                                        <li>{list}</li>
                                    </ul>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
export default Skills;