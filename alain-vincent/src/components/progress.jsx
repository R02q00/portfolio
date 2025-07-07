const Progress = ({ name, percent }) => {
    return (
        <div className="mb-4">
            <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium">{name}</span>
                <span className="text-sm text-gray-200">{percent}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700">
                <div
                    className="bg-indigo-500 h-3 rounded-full"
                    style={{ width: `${percent}%` }}
                ></div>
            </div>
        </div>
    );
};

export default Progress;