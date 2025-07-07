import Start from "./starts";

function CharacterCard() {
    const personalInfo = [
        {
            name: "Alain Vincent",
            desc: "Hello! I'm a computer science student currently looking for an internship to grow my skills and gain real-world experience.",
            age: (2025 - 2005),
            occupation: "High School Student",

        },
    ];
    return (
        <div className="min-h-screen flex justify-end">
            {
                personalInfo.map((value, index) => (
                    <div key={index} className="w-full lg:w-[85%] text-base-content">
                        <h1 className="text-2xl showContent duration-500">{value.name}</h1>
                        <div className="flex mb-2">
                            <span className="w-1 h-1 bg-gray-200"></span>
                            <span className="w-5 h-1 bg-yellow-400 ml-1"></span>
                            <span className="w-full border-b border-gray-400 mr-2"></span>
                            <span className="w-1 h-1 bg-gray-200"></span>
                        </div>
                        <p className="sm:text-xl md:text-lg mb-4 text-gray-400">{value.desc}</p>
                        <div className="flex mt-6 mb-2">
                            <span className="w-1 h-1 bg-gray-200"></span>
                            <span className="w-5 h-1 bg-yellow-400 ml-1"></span>
                            <span className="w-full border-b border-gray-400 mr-2"></span>
                            <span className="w-1 h-1 bg-gray-200"></span>
                        </div>
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                                <span className="text-gray-400">Age</span>
                                <span>{value.age}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-400">Birthday</span>
                                <span>20-09</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-400">Occupation</span>
                                <span>{value.occupation}</span>
                            </div>
                        </div>
                        <div className="flex mt-4 mb-2">
                            <span className="w-1 h-1 bg-gray-200"></span>
                            <span className="w-5 h-1 bg-yellow-400 ml-1"></span>
                            <span className="w-full border-b border-gray-400 mr-2"></span>
                            <span className="w-1 h-1 bg-gray-200"></span>
                        </div>
                        <div className="mt-2 space-y-2">
                            <h3>Quick start</h3>
                            <div className="flex justify-end items-center space-x-4">
                                <button className="border-1 border-indigo-400 px-3 py-2 cursor-pointer">View CV</button>
                                <button className="border-1 border-yellow-400 px-3 py-2 cursor-pointer">Contact</button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default CharacterCard;