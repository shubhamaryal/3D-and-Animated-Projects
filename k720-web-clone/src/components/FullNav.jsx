const Items = ({ mainText, insideText, src1, src2 }) => {
    return (
        <div className="w-full border-y border-white/50 text-center pt-8">
            <h1 className="text-[146px] leading-27 tracking-tight">
                {mainText}
            </h1>
            <div className="text-[146px] leading-27 tracking-tight">
                <h2>{insideText}</h2>
                <div className="w-76 h-28 rounded-full overflow-hidden">
                    <img className="" src={src1} alt="" />
                </div>
                <h2>{insideText}</h2>
                <div className="w-76 h-30 rounded-full overflow-hidden">
                    <img className="" src={src2} alt="" />
                </div>
            </div>
        </div>
    );
};

const FullNav = () => {
    return (
        <div className="bg-amber-900 h-screen w-full absolute top-0 text-white font-[font2]">
            <div className="flex flex-col">
                <div className="flex justify-between p-3">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="103"
                        height="44"
                        viewBox="0 0 103 44"
                    >
                        <path
                            fill="white" // color for the svg
                            fillRule="evenodd"
                            d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
                        ></path>
                    </svg>

                    {/* ya euta X ko lagi div aaucha */}
                </div>

                <div className="w-full flex flex-col items-center uppercase mt-30">
                    <Items
                        mainText={"Projets"}
                        insideText={"Pour tout voir"}
                        src1={"/lists/1.png"}
                        src2={"/lists/2.png"}
                    />
                    <Items
                        mainText={"Agence"}
                        insideText={"Pour tout savoir"}
                        src1={"/lists/3.png"}
                        src2={"/lists/4.png"}
                    />
                    <Items
                        mainText={"Contact"}
                        insideText={"Pour envoyer un fax"}
                        // src={"/lists/2.png"}
                        // src={"/lists/2.png"}
                    />
                    <Items
                        mainText={"Blogue"}
                        insideText={"Lire les articles"}
                        src1={"/lists/5.png"}
                        src2={"/lists/6.png"}
                    />
                </div>
            </div>
        </div>
    );
};

export default FullNav;
