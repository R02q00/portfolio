import { useEffect, useState } from 'react';
import { FaCode, FaServer, FaDatabase, FaTools, FaProjectDiagram, FaLaptopCode } from 'react-icons/fa';
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci"
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
            categories: "Outils",
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
    const [logo, setLogo] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [activeTech, setActiveTech] = useState(0);
    useEffect(() => {
        fetch('/data/logo.json')
            .then(response => response.json())
            .then(data => {
                setLogo(data)
            });
    }, [])

    const prevLogo = () => {
        setActiveTech(prevIndex => prevIndex === 0 ? logo.length - 1 : prevIndex - 1);
        setCurrentIndex(prevIndex => prevIndex === 0 ? logo.length - 1: prevIndex - 1);
    };

    const nextLogo = () => {
        setActiveTech(prevIndex => prevIndex === logo.length - 1 ? 0 : prevIndex + 1)
        setCurrentIndex(prevIndex => prevIndex === logo.length - 1 ? 0 : prevIndex + 1)
    };

    return (
        <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Mes Compétences</h2>

            <div className="grid lg:grid-cols-2 gap-6 mb-4">
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

            <div className='relative max-w-xl mx-auto flex flex-col justify-center items-center'>

                <div className='overfolw-hidden flex justify-center items-center'>
                    {/*
                        logo.map((tech, index) => (
                            <div key={index} className={`bg-gray-100 p-2 rounded-full`}>
                                <img
                                    src={tech.src}
                                    alt={tech.name}
                                    className='object-contain transition-opacity duration-300' />
                            </div>
                        ))
                    */}
                </div>


                <CiCircleChevLeft
                    onClick={() => { prevLogo() }}
                    className='absolute left-2 top-1/2 -translate-y-1/2 text-yellow-400 size-8 rounded-full text-center active:border'
                />

                <CiCircleChevRight
                    onClick={() => { nextLogo() }}
                    className='absolute right-2 top-1/2 -translate-y-1/2 text-yellow-400 font-bold size-8 rounded-full active:border'
                />


                <div className='flex justify-center mt-4 space-x-3'>
                    {
                        logo.map((_, index) => (
                            <button
                                key={index}
                                className={`size-3 rounded-full ${currentIndex === index ? 'bg-yellow-400' : 'bg-gray-300'}`}
                                onClick={() => {setCurrentIndex(index); setActiveTech(index)}}
                            >
                            </button>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Skills;