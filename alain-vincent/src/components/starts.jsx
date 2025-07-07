import { useEffect } from "react";

const Start = ({ name, level }) => {
    const fullStars = Math.floor(level);
    const emptyStars = 5 - fullStars;

    return (
        <div className="flex items-center gap-4 mt-4">
            <div className="font-semibold">{name}</div>
            <div className="flex text-yellow-400">
                {[...Array(fullStars)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 .587l3.668 7.57L24 9.75l-6 5.93L19.335 24 12 19.898 4.665 24 6 15.68 0 9.75l8.332-1.593z" />
                    </svg>
                ))}
                {[...Array(emptyStars)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-gray-300" viewBox="0 0 24 24">
                        <path d="M12 .587l3.668 7.57L24 9.75l-6 5.93L19.335 24 12 19.898 4.665 24 6 15.68 0 9.75l8.332-1.593z" />
                    </svg>
                ))}
            </div>
        </div>
    );
};

export default Start;