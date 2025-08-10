import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import d_home from '../images/device-flow-home.png'
import d_loan from '../images/device-flow-loan-list.png'
import d_list from '../images/device-flow-list.png'
import s_home from '../images/securite-web.png'
import n_login from '../images/nero-login.png'
import w_switch from '../images/webcam_switch.png'
import { useState } from 'react';



const Project = () => {
    const projectList = [
        {
            photo: [n_login],
            title: "Nero",
            desc: "Une application simple utilisant un modèle d'intelligence artificielle.",
            stack: ["Next.js", "PostgreSQL", "Django", "Tailwind CSS"],
            link: "https://github.com/R02q00/nero.git",
        },
        {
            photo: [d_home],
            title: "Device-Flow",
            desc: "Une application de gestion du matériel informatique.",
            stack: ["React.js", "PostgreSQL", "Node.js", "JWT", "Tailwind CSS"],
            link: "https://github.com/R02q00/device-flow.git",
        },
        {
            photo: [s_home],
            title: "Sécurité Web",
            desc: "Hébergement sécurisé d'une page web avec intégration de certificats SSL.",
            stack: ["Nginx", "OpenSSL"],
            link: "https://github.com/R02q00/securite-web.git",
        },
        {
            photo: [w_switch],
            title: "Webcam Switch",
            desc: "Application permettant de basculer entre différentes caméras.",
            stack: ["Python", "OpenCV", "Tkinter"],
            link: "https://github.com/R02q00/webcam-switch.git",
        }
    ];

    return (
        <div>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Mes Projets</h2>
            <div className="grid md:grid-cols-2 gap-6 py-2">
                {projectList.map((project, index) => (
                    <div
                        key={index}
                        className="card bg-base-100 p-3 shadow-lg hover:shadow-xl transition-all duration-300 border border-base-200 hover:border-primary/20"
                    >

                        <div className='overflow-hidden'>
                            {project.photo.map((img, index) => (
                                <img key={index} src={img} alt={`photo ${index + 1}`} className="h-full sm:max-w-sm rounded-lg object-contain" />
                            ))}
                        </div>

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