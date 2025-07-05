function CharacterCard() {
    return (
        <div className="sm:w-full md:w-[75%] lg:w-[90%] font-sans text-base-content">
            <h1 className="text-3xl">Alain Vincent</h1>
            <div className="flex mb-2">
                <span className="w-1 h-1 bg-gray-200"></span>
                <span className="w-5 h-1 bg-yellow-400 ml-1"></span>
                <span className="w-full border-b border-gray-400 mr-2"></span>
                <span className="w-1 h-1 bg-gray-200"></span>
            </div>
            <p className="text-sm mb-4 text-gray-400">Hello! I'm a computer science student currently looking for an internship to grow my skills and gain real-world experience.</p>
            <div className="flex mt-6 mb-2">
                <span className="w-1 h-1 bg-gray-200"></span>
                <span className="w-5 h-1 bg-yellow-400 ml-1"></span>
                <span className="w-full border-b border-gray-400 mr-2"></span>
                <span className="w-1 h-1 bg-gray-200"></span>
            </div>
            <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                    <span className="text-gray-400">Age</span>
                    <span>20</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-400">Birthday</span>
                    <span>20-09</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-400">Occupation</span>
                    <span>High School Student</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-400">Hobby</span>
                    <span>Video game</span>
                </div>
            </div>
            <div className="flex mt-4 mb-2">
                <span className="w-1 h-1 bg-gray-200"></span>
                <span className="w-5 h-1 bg-yellow-400 ml-1"></span>
                <span className="w-full border-b border-gray-400 mr-2"></span>
                <span className="w-1 h-1 bg-gray-200"></span>
            </div>
            <div className="mt-2 space-y-2">
                <h3>Quick start : </h3>
                <div className="flex justify-end items-center space-x-4">
                    <button className="border-1 border-indigo-400 btn px-3 py-2">View CV</button>
                    <button className="border-1 border-yellow-400 btn px-3 py-2">Contact</button>
                </div>
            </div>
        </div>
    );
}

export default CharacterCard;