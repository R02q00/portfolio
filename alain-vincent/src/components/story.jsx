import { FiBook, FiAward, FiCheckCircle, FiClock } from "react-icons/fi";

const Story = () => {
    const story = [
        {
            name: "École Nationale d'Informatique ( ENI )",
            level: "Licence Professionnelle en en Informatique Generale (IG)",
            desc: "Actuellement en Troisieme année. Je suis dans le parcours Informatique Generale",
            statut: "en cours",
            year: "2022 - Présent",
            icon: <FiBook className="text-blue-500" />
        },
        {
            name: "Lycée Raherivelo Ramamonjy",
            level: "Baccalauréat Scientifique",
            desc: "Obtention de diplôme d'ensegnement generale Option S",
            statut: "Obtenu",
            year: "2019",
            icon: <FiAward className="text-green-600" />
        },
        {
            name: "Collège de Référence Idanda",
            level: "Brevet d'Études du Premier Cycle( BEPC )",
            desc: "Parcours général avec excellente maîtrise des matières scientifiques.",
            statut: "Obtenu",
            year: "2015",
            icon: <FiCheckCircle className="text-purple-600" />
        }
    ];

    return (
        <div className="space-y-8">
            <h2 className="text-2xl md:text-3xl text-center font-bold mb-2">Parcours Académique 🎓</h2>
            <div className="relative">
                {story.map((item, index) => (
                    <div key={index} className="relative pb-6 group">
                        <div className="card p-2 bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 border border-base-200">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-opacity-20 bg-base-300">
                                    {item.icon}
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start">
                                        <h3 className="text-lg font-semibold">
                                            {item.name}
                                        </h3>
                                        <span className="text-sm text-curent">
                                            {item.year}
                                        </span>
                                    </div>
                                    <p className="text-indigo-600 font-medium mt-1">
                                        {item.level}
                                    </p>
                                    {item.desc && (
                                        <p className="mt-2">
                                            {item.desc}
                                        </p>
                                    )}
                                </div>
                            </div>


                            <div className="mt-4 flex justify-end">
                                <div className={`badge ${item.statut === "en cours"
                                    ? "badge-info badge-outline"
                                    : "badge-success badge-outline"
                                    } gap-2`}>
                                    {item.statut === "en cours" ? (
                                        <FiClock />
                                    ) : (
                                        <FiCheckCircle />
                                    )}
                                    {item.statut.charAt(0).toUpperCase() + item.statut.slice(1)}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Story;

