import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import d_home from '../images/device-flow-home.png'
import d_loan from '../images/device-flow-loan-list.png'
import d_list from '../images/device-flow-list.png'
import s_home from '../images/securite-web.png'
import n_login from '../images/nero-login.png'
import { useState } from 'react';



const Project = () => {
    const projectList = [
        {
            photo: [n_login],
            title: "Nero",
            desc: "Un models IA utilisant ollama",
            stack: ["Next.js", "PostgreSQL", "Django", "Tailwindcss"],
            link: "https://github.com/R02q00/nero.git",
        },
        {
            photo: [d_home],
            title: "Device-Flow",
            desc: "Une applications de gestion de materiels informatiques",
            stack: ["React.js", "PostgreSQL", "Node.js", "Tailwindcss"],
            link: "https://github.com/R02q00/device-flow.git",
        },
        {
            photo: [s_home],
            title: "Securité Web",
            desc: "",
            stack: ["Nginx", "OpenSSL", "html, css, js"],
            link: "https://github.com/R02q00/security-web.git"
        },
        {
            photo: [],
            title: "Webcam Switch",
            desc: "Une application de visualisation entre differents camera",
            stack: ["Python", "OpenCV", "tkinter"],
            link: "https://github.com/R02q00/webcam-switch.git"
        }
    ];
    const [currentIndex, setCurrentIndex] = useState(0)
    return (
        <div>
            <h2 className="text-2xl md:text-3xl font-bold text-center">Mes Projets</h2>
            <p className='text-md'>Je vous fait part des project sur lequels j'ai participé</p>
            <div className="grid lg:grid-cols-2 gap-6 py-2">
                {projectList.map((project, index) => (
                    <div
                        key={index}
                        className="bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 border border-base-200 hover:border-primary/20"
                    >

                        {project.photo.map((img, index) => (
                            <div key={index} className='flex overflow-hidden rounded-lg'>
                                <img src={img} alt={`photo ${index + 1}`} className="h-full sm:max-w-sm object-contain" />
                            </div>
                        ))}

                        <div className="card-body p-6 pt-4">
                            <h3 className="card-title text-2xl">{project.title}</h3>
                            <p className="text-base-content/70">{project.desc}</p>

                            <div className="mt-4">
                                <div className="flex flex-wrap gap-2">
                                    {project.stack.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="badge badge-outline badge-sm badge-primary"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="card-actions mt-4">
                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-ghost btn-sm gap-2"
                                    >
                                        <FaGithub /> Code
                                    </a>
                                )}
                                {project.demo && (
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-primary btn-sm gap-2"
                                    >
                                        <FaExternalLinkAlt /> Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Project;