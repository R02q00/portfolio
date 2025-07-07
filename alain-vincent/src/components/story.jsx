import { FiBook, FiAward, FiCheckCircle, FiClock } from "react-icons/fi";

const Story = () => {
    const story = [
        {
            name: "École Nationale d'Informatique ( ENI )",
            level: "Licence Professionnelle en en Informatique Generale(IG)",
            desc: "Parcours en Génie Logiciel et Administration Systme et Reseaux.",
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
            icon: <FiAward className="text-green-500" />
        },
        {
            name: "Collège de Référence Idanda",
            level: "Brevet d'Études du Premier Cycle( BEPC )",
            desc: "Parcours général avec excellente maîtrise des matières scientifiques.",
            statut: "Obtenu",
            year: "2015",
            icon: <FiCheckCircle className="text-purple-500" />
        }
    ];

    return (
        <div className="space-y-8">
            <h2 className="text-2xl text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                <FiBook className="text-blue-500" />
                <span>Parcours Académique</span>
            </h2>

            <div className="relative">
                {/* Ligne de timeline */}
                <div className="absolute left-2 top-0 h-full w-0.5 bg-gray-200 dark:bg-gray-700 transform -translate-x-1/2"></div>

                {story.map((item, index) => (
                    <div key={index} className="relative pl-5 lg:pl-10 pb-6 group">
                        {/* dot */}
                        <div className="absolute left-2 top-1 w-3 h-3 rounded-full bg-blue-500 border-4 border-white dark:border-gray-800 transform -translate-x-1/2 z-10"></div>

                        {/* card */}
                        <div className="bg-white dark:bg-gray-800 px-2 py-1 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
                            <div className="flex items-start gap-4">
                                <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                                    {item.icon}
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start">
                                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                                            {item.name}
                                        </h3>
                                        <span className="text-sm text-gray-500 dark:text-gray-400">
                                            {item.year}
                                        </span>
                                    </div>
                                    <p className="text-blue-600 dark:text-blue-400 font-medium mt-1">
                                        {item.level}
                                    </p>
                                    {item.desc && (
                                        <p className="text-gray-600 dark:text-gray-300 mt-2">
                                            {item.desc}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* badge */}
                            <div className="mt-4 flex justify-end">
                                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${item.statut === "en cours"
                                        ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                                        : "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                                    }`}>
                                    {item.statut === "en cours" ? (
                                        <>
                                            <FiClock className="mr-1" />
                                            En cours
                                        </>
                                    ) : (
                                        <>
                                            <FiCheckCircle className="mr-1" />
                                            Diplômé
                                        </>
                                    )}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Story;