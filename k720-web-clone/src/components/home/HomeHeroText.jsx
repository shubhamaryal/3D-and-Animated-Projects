import React from "react";
import Video from "./Video";

const HomeHeroText = () => {
    return (
        <div className="font-[font1] p-2 text-center">
            <div className="text-[9.5vw] uppercase leading-33 flex items-center justify-center">
                L'étincelle
            </div>
            <div className="text-[9.5vw] uppercase leading-33 flex items-center justify-center">
                qui{" "}
                <div className="h-[7vw] w-[15vw] rounded-[70px] overflow-hidden -mt-7">
                    <Video />
                </div>{" "}
                génère
            </div>
            <div className="text-[9.5vw] uppercase leading-33 flex items-center justify-center">
                la créativité
            </div>
        </div>
    );
};

export default HomeHeroText;
