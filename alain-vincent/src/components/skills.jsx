import { FaCode, FaServer, FaDatabase, FaTools, FaProjectDiagram, FaLaptopCode } from 'react-icons/fa';

const Skills = () => {
    const skillsData = [
        {
            categories: "Web Development",
            icon: <FaCode className="text-blue-500" />,
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
            icon: <FaServer className="text-green-500" />,
            list: [
                "Node.js",
                "Django",
                "Spring boot"
            ]
        },
        {
            categories: "Databases",
            icon: <FaDatabase className="text-purple-500" />,
            list: [
                "PostgreSQL",
                "MySQL",
                "SQL"
            ]
        },
        {
            categories: "Tools & Deployment",
            icon: <FaTools className="text-yellow-500" />,
            list: [
                "Git & GitHub",
                "Vercel / Netlify",
                "Docker(basic)"
            ]
        },
        {
            categories: "Modélisation et Conception",
            icon: <FaProjectDiagram className="text-red-500" />,
            list: [
                "MERISE",
                "UML"
            ]
        },
        {
            categories: "Other",
            icon: <FaLaptopCode className="text-indigo-500" />,
            list: [
                "Figma",
                "Inkscape",
                "Linux"
            ]
        }
    ];

    return (
        <div className='mt-4 text-base-content'>
            <h1 className="text-2xl font-bold text-gray-700 dark:text-white">Skills</h1>
            <div className="grid md:grid-cols-2 gap-6">
                {skillsData.map((category, index) => (
                    <div 
                        key={index} 
                        className="bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-5 border border-gray-100 dark:border-gray-700"
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <div className="p-2 rounded-lg bg-opacity-20 bg-blue-100 dark:bg-blue-900/30">
                                {category.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                                {category.categories}
                            </h3>
                        </div>
                        
                        <ul className="space-y-2 pl-1">
                            {category.list.map((skill, i) => (
                                <li key={i} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;