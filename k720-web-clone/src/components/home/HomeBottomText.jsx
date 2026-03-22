import React from "react";
import { Link } from "react-router-dom";

const HomeBottomText = () => {
    return (
        <div className="font-[font2] flex justify-center gap-5 text-8xl uppercase p-2">
            <Link
                to={"/projects"}
                className="rounded-[78px] px-8 pt-4 leading-20 tracking-tight border-2 border-white hover:text-[#D2FD50] hover:border-[#D2FD50]"
            >
                Projects
            </Link>
            <Link
                to={"/agence"}
                className="rounded-[78px] px-8 pt-4 leading-20 tracking-tight border-2 border-white hover:text-[#D2FD50] hover:border-[#D2FD50]"
            >
                Agence
            </Link>
        </div>
    );
};

export default HomeBottomText;
