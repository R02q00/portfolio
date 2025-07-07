import Start from "./starts";
import { useEffect, useState } from "react"
function CharacterCard() {
    const personalInfo = [
        {
            name: "Alain Vincent",
            desc: "Hello! I'm a computer science student currently looking for an internship to grow my skills and gain real-world experience.",
            age: (2025 - 2005),
            birthday: "20-09-2005",
            occupation: "High School Student",

        },
    ];
    const InfoRow = ({ label, value }) => (
        <div className="flex justify-between items-center">
            <span className="text-gray-400">{label}</span>
            <span className="">{value}</span>
        </div>
    );
    const Button = ({ children, variant = 'indigo' }) => {
        const variants = {
            indigo: 'border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-white',
            yellow: 'border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-white'
        };

        return (
            <button className={`border px-4 py-2 rounded-md transition-colors duration-300 ${variants[variant]}`}>
                {children}
            </button>
        )
    };

    const [animatedElements, setAnimatedElements] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setAnimatedElements(prev => Math.min(prev + 1, 7)); // 7 éléments à animer
        }, 200);

        return () => clearInterval(timer);
    }, []);

    const shouldAnimate = (index) => animatedElements > index;

    return (
        <div className="min-h-screen flex justify-end">
            {
                personalInfo.map((value, index) => (
                    <div key={index} className="w-full lg:w-[85%] text-base-content">

                        <h1 className={`text-2xl transition-all duration-500 ${shouldAnimate(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                            {value.name}
                        </h1>

                        <div className={`flex mb-2 transition-all duration-500 ${shouldAnimate(1) ? 'opacity-100' : 'opacity-0'}`}>
                            <span className="w-1 h-1 bg-gray-200 rounded-full"></span>
                            <span className="w-5 h-1 bg-yellow-400 ml-1 rounded-full"></span>
                            <span className="w-full border-b border-gray-400 mr-2"></span>
                            <span className="w-1 h-1 bg-gray-200 rounded-full"></span>
                        </div>

                        <p className={` md:text-xl mb-2 text-gray-400 transition-all duration-500 ${shouldAnimate(2) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                            {value.desc}
                        </p>

                        <div className={`flex mb-2 transition-all duration-500 ${shouldAnimate(3) ? 'opacity-100' : 'opacity-0'}`}>
                            <span className="w-1 h-1 bg-gray-200 rounded-full"></span>
                            <span className="w-5 h-1 bg-yellow-400 ml-1 rounded-full"></span>
                            <span className="w-full border-b border-gray-400 mr-2"></span>
                            <span className="w-1 h-1 bg-gray-200 rounded-full"></span>
                        </div>

                        <div className={`space-y-3 mb-2 transition-all duration-500 ${shouldAnimate(4) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                            <InfoRow label={"Age"} value={value.age} />
                            <InfoRow label={"Birthday"} value={value.birthday} />
                            <InfoRow label={"Occupation"} value={value.occupation} />
                        </div>

                        <div className={`flex mb-2 transition-all duration-500 ${shouldAnimate(5) ? 'opacity-100' : 'opacity-0'}`}>
                            <span className="w-1 h-1 bg-gray-200 rounded-full"></span>
                            <span className="w-5 h-1 bg-yellow-400 ml-1 rounded-full"></span>
                            <span className="w-full border-b border-gray-400 mr-2"></span>
                            <span className="w-1 h-1 bg-gray-200 rounded-full"></span>
                        </div>

                        <div className={`transition-all duration-500 ${shouldAnimate(6) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                            <h3 className="text-lg">Quick start</h3>
                            <div className="flex gap-4 justify-end">
                                <Button children="Download CV" variant="indigo" />
                                <Button children="Contact" variant="yellow" />
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default CharacterCard;