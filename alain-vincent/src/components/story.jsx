import { useState } from "react";
import { FiBook, FiAward, FiCheckCircle, FiClock } from "react-icons/fi";
import eni from '../images/story/eni.png'
import lycee from '../images/story/lycee_1.jpg'
import college from '../images/story/cri_1.jpg'


const Story = () => {
    const story = [
        {
            name: "Ecole Nationale d'Informatique (ENI)",
            level: "Licence Professionnelle en Informatique Generale (IG)",
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
    const Statut = ({ status }) => {
        return (
            <div className="mt-4 flex justify-end">
                <div className={`badge gap-2 ${status === "en cours" ? "badge-info badge-outline" : "badge-success badge-outline"}`}>
                    {status === "en cours" ? (<FiClock />) : (<FiCheckCircle />)}
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                </div>
            </div>
        )
    }
    const [activeStory, setActiveStory] = useState(0);

    const [count, setCount] = useState(0)

    return (
        <div>
            <h2 className="text-center text-2xl font-bold mb-2">Parcours Académique 🎓</h2>

            <div className="grid md:grid-cols-2">

                <div className="space-y-4">
                    <div className="relative overflow-hidden h-64">
                        {[eni, lycee, college].map((img, index) => (
                            <div key={index} className={`absolute inset-0 transition-opacity duration-300 flex justify-center ${count === index ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                                <img src={img} alt={`photo ${index + 1}`} className="h-full sm:max-w-sm rounded-lg object-contain" />
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center space-x-3 mb-2">
                        {[0, 1, 2].map((dot) => (
                            <button
                                key={dot}
                                className={`size-4 rounded-full cursor-pointer transition-all ${count === dot ? 'bg-indigo-600' : 'bg-gray-300'}`}
                                onClick={() => {setCount(dot); setActiveStory(dot)}}
                            />
                        ))}
                    </div>
                </div>

                <div>
                    {story.map((item, index) => (
                        <div key={index} className={`relative group ${activeStory === index ? 'opacity-100' : 'hidden'}`}>
                            <div className="card p-2">
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
                                        {item.desc && (<p className="mt-2">{item.desc}</p>)}
                                        <Statut status={item.statut} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

        </div>
    );
};

export default Story;

