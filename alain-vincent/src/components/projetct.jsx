import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Project = () => {
    const projectList = [
        {
            photo: "/placeholder-project.jpg",
            title: "Device-Flow",
            desc: "Système de gestion de flux d'appareils IoT avec tableau de bord temps réel",
            stack: ["React JS", "PostgreSQL", "JWT", "Tailwindcss"],
            link: "https://github.com/R02q00/device-flow",
        },
        {
            photo: "/placeholder-project.jpg",
            title: "Security Web",
            desc: "Application de monitoring de sécurité pour sites web avec détection de vulnérabilités",
            stack: ["Python", "Django", "PostgreSQL", "Celery"],
            link: "https://github.com/R02q00/security-web"
        },
        {
            photo: "/placeholder-project.jpg",
            title: "Webcam Switch",
            desc: "Application pour contrôler et switcher entre multiples webcams avec effets en direct",
            stack: ["Python", "OpenCV"],
            link: "https://github.com/R02q00/webcam-switch"
        }
    ];

    return (
        <div className="mt-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Mes Projets</h2>
            <div className="grid lg:grid-cols-2 gap-6">
                {projectList.map((project, index) => (
                    <div 
                        key={index}
                        className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 border border-base-200 hover:border-primary/20"
                    >
                        <figure className="px-6 pt-6">
                            <img 
                                src={project.photo} 
                                alt={project.title} 
                                className="rounded-xl h-48 w-full object-cover"
                            />
                        </figure>
                        <div className="card-body p-6 pt-4">
                            <h3 className="card-title text-2xl">{project.title}</h3>
                            <p className="text-base-content/70">{project.desc}</p>
                            
                            <div className="mt-4">
                                <div className="flex flex-wrap gap-2">
                                    {project.stack.map((tech, i) => (
                                        <span 
                                            key={i} 
                                            className="badge badge-outline badge-sm hover:badge-primary transition-colors"
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