import React from "react";
import SvgComponent from "./svgComponent.jsx";
import Logo from "./logo.jsx";
import CharacterCard from "./characterCard.jsx";

const Home = () => {
    return (
        <div className="w-full min-h-screen grid md:grid-cols-2 gap-2 mt-8">
            <div className="order-1 overflow-hidden">
                <Logo />
            </div>
            <div className="flex lg:flex-end order-2">
                <CharacterCard />
            </div>
        </div>
    );
};

export default Home;
