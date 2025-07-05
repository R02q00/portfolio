import React from "react";
import SvgComponent from "./svgComponent";
import CharacterCard from "./characterCard";

const Home = (story) => {
    return (
        <div className="w-full grid md:grid-cols-2 py-4">
            <div className="order-1 flex justify-center">
                
            </div>
            <div className="order-2 flex md:justify-end items-center">
                <CharacterCard />
            </div>
        </div>
    );
};

export default Home;
