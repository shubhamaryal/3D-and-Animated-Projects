import { Link } from "react-router-dom";

import Video from "../components/home/Video";
import Navbar from "../components/home/Navbar";

const Home = () => {
    return (
        <div className="text-white">
            <Navbar />
            <div className="h-screen w-full fixed">
                <Video />
            </div>

            <div className="h-screen w-full relative flex flex-col justify-between">
                <div className="font-[font1] p-3 text-center">
                    <div className="text-[200px] uppercase leading-45 flex items-center justify-center">
                        L'étincelle
                    </div>
                    <div className="text-[200px] uppercase leading-45 flex items-center justify-center">
                        qui{" "}
                        <div className="h-34 w-82 rounded-[70px] overflow-hidden -mt-10 ">
                            <div className="h-full w-full">
                                {" "}
                                <Video />
                            </div>
                        </div>{" "}
                        génère
                    </div>
                    <div className="text-[200px] uppercase leading-45 flex items-center justify-center">
                        la créativité
                    </div>
                </div>
                <div className="font-[font2] flex justify-center gap-5 text-9xl uppercase p-2">
                    <Link
                        to={"/projets"}
                        className="rounded-[78px] px-10 pt-6 leading-24 tracking-tight border-3 border-white hover:text-[#D2FD50] hover:border-[#D2FD50]"
                    >
                        Projets
                    </Link>
                    <Link
                        to={"/agence"}
                        className="rounded-[78px] px-10 pt-6 leading-24 tracking-tight border-3 border-white hover:text-[#D2FD50] hover:border-[#D2FD50]"
                    >
                        Agence
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
