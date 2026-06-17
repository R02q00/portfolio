import { useEffect, useState } from "react";
import { FiBook, FiAward, FiCheckCircle, FiClock } from "react-icons/fi";
import eni from '../images/story/eni.png';
import lycee from '../images/story/lycee_2.jpg';
import college from '../images/story/cri_2.jpg';
import { useTranslation } from "react-i18next";

const Story = () => {
    const { t } = useTranslation();

    const story = [
        {
            name: t("story.items.0.name"),
            level: t("story.items.0.level"),
            desc: t("story.items.0.desc"),
            year: t("story.items.0.year"),
            statut: "ongoing",
            icon: <FiBook className="text-blue-500" />,
            image: eni
        },
        {
            name: t("story.items.1.name"),
            level: t("story.items.1.level"),
            desc: t("story.items.1.desc"),
            year: t("story.items.1.year"),
            statut: "completed",
            icon: <FiAward className="text-green-600" />,
            image: lycee
        },
        {
            name: t("story.items.2.name"),
            level: t("story.items.2.level"),
            desc: t("story.items.2.desc"),
            year: t("story.items.2.year"),
            statut: "completed",
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
                <div
                    className={`badge gap-2 ${status === "ongoing"
                            ? "badge-info badge-outline"
                            : "badge-success badge-outline"
                        }`}
                >
                    {status === "ongoing" ? <FiClock /> : <FiCheckCircle />}
                    {t(`story.status.${status}`)}
                </div>
            </div>
        );
    };

    return (
        <div className="">
            <h2 className="text-center text-3xl font-bold mb-6">{t('story.title')}</h2>
            <div className="grid md:grid-cols-2">

                {/* Image Slider Section */}
                <div className="md:w-2/3 flex flex-col items-center justify-center">
                    <div className="w-full h-64 md:h-96 relative overflow-hidden rounded-xl shadow-lg">
                        {story.map((story, index) => (
                            <img
                                key={index}
                                src={story.image}
                                alt={t("story.photoAlt", { index: index + 1 })}
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
                                aria-label={t("story.goToStep", { step: index + 1 })}
                            />
                        ))}
                    </div>
                </div>

                {/* Timeline Section */}
                <div className="relative">

                    {story.map((story, index) => (
                        <div
                            key={index}
                            className={`relative mb-6 pl-5 transition-all duration-300 ${activeStory === index ? 'scale-100' : 'opacity-80'}`}
                            onClick={() => {
                                setCurrentIndex(index);
                                setActiveStory(index);
                            }}
                        >
                            <div className={`absolute left-0 w-6 h-6 rounded-full flex items-center justify-center ${activeStory === index ? 'bg-indigo-600' : 'bg-indigo-100'} transform -translate-x-1/2 z-10`}>

                            </div>
                            <div className={`p-4 md:p-6 rounded-lg shadow-md ${activeStory === index ? 'bg-white border-l-4 border-indigo-600' : 'bg-gray-50'}`}>
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-lg font-bold text-indigo-800">{story.name}</h3>
                                </div>
                                <span className="text-sm text-gray-500">{story.year}</span>

                                <p className="text-indigo-600 font-medium">{story.level}</p>
                                {story.desc && <p className="mt-2 text-gray-700">{story.desc}</p>}
                                <Statut status={story.statut} />
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Story;