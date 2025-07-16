import { FaCode, FaServer, FaDatabase, FaTools, FaProjectDiagram, FaLaptopCode } from 'react-icons/fa';

const Skills = () => {
    const skillsData = [
        {
            categories: "Langages",
            icon: <FaCode className="text-primary" />,
            list: [
                "JavaScript",
                "TypeScript",
                "Python",
                "Java"
            ]
        },
        {
            categories: "Frontend",
            icon: <FaCode className="text-secondary" />,
            list: [
                "HTML5",
                "CSS3",
                "React.js",
                "Next.js",
                "Tailwind CSS",
            ]
        },
        {
            categories: "Mobile",
            icon: <FaCode className="text-accent" />,
            list: [
                "React Native",
                "Expo"
            ]
        },
        {
            categories: "Backend",
            icon: <FaServer className="text-info" />,
            list: [
                "Node.js",
                "Express",
                "Django",
                "Spring Boot",
            ]
        },
        {
            categories: "Bases de données",
            icon: <FaDatabase className="text-success" />,
            list: [
                "PostgreSQL",
                "MySQL",
                "SQL"
            ]
        },
        {
            categories: "DevOps & Outils",
            icon: <FaTools className="text-warning" />,
            list: [
                "Git & GitHub",
                "Docker",
                "Vercel/Netlify",
            ]
        },
        {
            categories: "Conception",
            icon: <FaProjectDiagram className="text-error" />,
            list: [
                "UML",
                "Merise",
            ]
        },
    ];

    return (
        <div className="mt-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Mes Compétences</h2>
            <div className="grid lg:grid-cols-2 gap-6">
                {skillsData.map((category, index) => (
                    <div
                        key={index}
                        className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 border border-base-200"
                    >
                        <div className="card-body p-6">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 rounded-lg bg-opacity-20 bg-base-300">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-semibold">
                                    {category.categories}
                                </h3>
                            </div>

                            <ul className="space-y-2">
                                {category.list.map((skill, i) => (
                                    <li
                                        key={i}
                                        className="flex items-center gap-3 transition-colors hover:text-primary"
                                    >
                                        <span className="w-2 h-2 rounded-full bg-current"></span>
                                        <span>{skill}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;