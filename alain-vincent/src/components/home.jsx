import React from "react";
import SvgComponent from "./svgComponent";
import CharacterCard from "./characterCard";

const Home = () => {
    return (
        <div className="w-full grid md:grid-cols-2 gap-2 mt-8">
            <div className="order-1 flex justify-center">
                
            </div>
            <div className="flex lg:flex-end order-2">
                <CharacterCard />
            </div>
        </div>
    );
};

export default Home;
