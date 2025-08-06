import { useEffect, useState } from "react";
import { FiBook, FiAward, FiCheckCircle, FiClock } from "react-icons/fi";
import eni from '../images/story/eni.png';
import lycee from '../images/story/lycee_2.jpg';
import college from '../images/story/cri_2.jpg';

const Story = () => {
    const story = [
        {
            name: "Ecole Nationale d'Informatique (ENI)",
            level: "Licence Professionnelle en Informatique Generale (IG)",
            desc: "Actuellement en Troisieme année.",
            statut: "en cours",
            year: "2022 - Présent",
            icon: <FiBook className="text-blue-500" />,
            image: eni
        },
        {
            name: "Lycée Raherivelo Ramamonjy",
            level: "Baccalauréat Scientifique",
            desc: "Obtention de diplôme d'ensegnement generale Option S",
            statut: "Obtenu",
            year: "2022",
            icon: <FiAward className="text-green-600" />,
            image: lycee
        },
        {
            name: "Collège de Référence Idanda",
            level: "Brevet d'Études du Premier Cycle(BEPC)",
            desc: "Parcours général avec excellente maîtrise des matières scientifiques.",
            statut: "Obtenu",
            year: "2019",
            icon: <FiCheckCircle className="text-purple-600" />,
            image: college
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [activeStory, setActiveStory] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex === story.length - 1 ? 0 : prevIndex + 1));
            setActiveStory(prevIndex => (prevIndex === story.length - 1 ? 0 : prevIndex + 1));
        }, 5000);

        return () => clearInterval(interval);
    }, [story.length]);

    const Statut = ({ status }) => {
        return (
            <div className="mt-4 flex justify-end">
                <div className={`badge gap-2 ${status === "en cours" ? "badge-info badge-outline" : "badge-success badge-outline"}`}>
                    {status === "en cours" ? <FiClock /> : <FiCheckCircle />}
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                </div>
            </div>
        );
    };

    return (
        <div className="">
            <h2 className="text-center text-3xl font-bold mb-6">Parcours Académique 🎓</h2>
            <div className="flex flex-col md:flex-row gap-8">

                {/* Image Slider Section */}
                <div className="md:w-1/2 flex flex-col items-center justify-center">
                    <div className="w-full h-64 md:h-96 relative overflow-hidden rounded-xl shadow-lg">
                        {story.map((item, index) => (
                            <img
                                key={index}
                                src={item.image}
                                alt={`photo ${index + 1}`}
                                className={`absolute w-full h-full object-cover transition-opacity duration-500 ${currentIndex === index ? 'opacity-100' : 'opacity-0'}`}
                            />
                        ))}
                    </div>

                    <div className="flex justify-center space-x-2 py-4">
                        {story.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setCurrentIndex(index);
                                    setActiveStory(index);
                                }}
                                className={`size-4 rounded-full transition-all ${index === currentIndex ? 'bg-indigo-700 w-8' : 'bg-gray-300'}`}
                                aria-label={`Aller à l'étape ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Timeline Section */}
                <div className="md:w-1/2 relative">

                    {story.map((item, index) => (
                        <div
                            key={index}
                            className={`relative mb-6 pl-5 transition-all duration-300 ${activeStory === index ? 'scale-100' : 'opacity-80'}`}
                            onClick={() => {
                                setCurrentIndex(index);
                                setActiveStory(index);
                            }}
                        >
                            <div className={`absolute left-0 w-6 h-6 rounded-full flex items-center justify-center ${activeStory === index ? 'bg-indigo-600 text-white' : 'bg-indigo-100 text-indigo-600'} transform -translate-x-1/2 z-10`}>
                                {item.icon}
                            </div>
                            <div className={`p-4 md:p-6 rounded-lg shadow-md ${activeStory === index ? 'bg-white border-l-4 border-indigo-600' : 'bg-gray-50'}`}>
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-lg font-bold text-indigo-800">{item.name}</h3>
                                    <span className="text-sm text-gray-500">{item.year}</span>
                                </div>
                                <p className="text-indigo-600 font-medium">{item.level}</p>
                                {item.desc && <p className="mt-2 text-gray-700">{item.desc}</p>}
                                <Statut status={item.statut} />
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </div>
    );
};

export default Story;