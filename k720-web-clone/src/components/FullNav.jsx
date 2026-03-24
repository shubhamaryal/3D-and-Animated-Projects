import { useRef, useEffect, useContext } from "react";
import gsap from "gsap";
import { NavContext } from "../context/NavContext";

const Items = ({ mainText, insideText, src1, src2, svg }) => {
    const overlayRef = useRef(null);
    const marqueeRef = useRef(null);
    const tweenRef = useRef(null);

    useEffect(() => {
        gsap.set(overlayRef.current, { yPercent: -100 });

        tweenRef.current = gsap.to(marqueeRef.current, {
            x: "-50%",
            duration: 9,
            ease: "none",
            repeat: -1,
            paused: true,
        });

        return () => tweenRef.current.kill();
    }, []);

    const handleMouseEnter = () => {
        gsap.to(overlayRef.current, {
            yPercent: 0,
            duration: 0.3,
            ease: "power2.inOut",
        });
        tweenRef.current.resume();
    };

    const handleMouseLeave = () => {
        gsap.to(overlayRef.current, {
            yPercent: -100,
            duration: 0.3,
            ease: "power2.inOut",
        });
        tweenRef.current.pause();
    };

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="w-full border-y border-white/50 text-center pt-8 relative overflow-hidden cursor-pointer"
        >
            <h1 className="text-[146px] leading-27 tracking-tight">
                {mainText}
            </h1>

            <div
                ref={overlayRef}
                className="absolute inset-0 bg-[#D2FD50] text-black overflow-hidden"
            >
                <div className="absolute inset-0 flex items-center">
                    <div
                        ref={marqueeRef}
                        className="flex whitespace-nowrap items-center text-[146px] leading-27 tracking-tight uppercase"
                        style={{ width: "max-content" }}
                    >
                        <h2 className="shrink-0 pt-8">{insideText}</h2>
                        {svg ? (
                            <svg
                                className="mx-8 -mt-2"
                                width="140"
                                height="140"
                                viewBox="0 0 100 100"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M50 85L15 50L25 25L50 40L75 25L85 50L50 85Z"
                                    fill="black"
                                />
                            </svg>
                        ) : (
                            <img
                                className="shrink-0 w-76 h-26 rounded-full mx-8 object-cover"
                                src={src1}
                                alt=""
                            />
                        )}
                        <h2 className="shrink-0 pt-8">{insideText}</h2>
                        {svg ? (
                            <svg
                                className="mx-8"
                                width="100"
                                height="100"
                                viewBox="0 0 100 100"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M50 85L15 50L25 25L50 40L75 25L85 50L50 85Z"
                                    fill="black"
                                />
                            </svg>
                        ) : (
                            <img
                                className="shrink-0 w-76 h-26 rounded-full mx-8 object-cover"
                                src={src2}
                                alt=""
                            />
                        )}
                        <h2 className="shrink-0 mr-8 pt-8">{insideText}</h2>
                        {svg ? (
                            <svg
                                className="mx-8"
                                width="100"
                                height="100"
                                viewBox="0 0 100 100"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M50 85L15 50L25 25L50 40L75 25L85 50L50 85Z"
                                    fill="black"
                                />
                            </svg>
                        ) : (
                            <img
                                className="shrink-0 w-76 h-26 rounded-full mx-8 object-cover"
                                src={src1}
                                alt=""
                            />
                        )}
                        <h2 className="shrink-0 pt-8">{insideText}</h2>
                        {svg ? (
                            <svg
                                className="mx-8"
                                width="100"
                                height="100"
                                viewBox="0 0 100 100"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M50 85L15 50L25 25L50 40L75 25L85 50L50 85Z"
                                    fill="black"
                                />
                            </svg>
                        ) : (
                            <img
                                className="shrink-0 w-76 h-26 rounded-full mx-8 object-cover"
                                src={src2}
                                alt=""
                            />
                        )}
                        <h2 className="shrink-0 pt-8">{insideText}</h2>
                        {svg ? (
                            <svg
                                className="mx-8"
                                width="100"
                                height="100"
                                viewBox="0 0 100 100"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M50 85L15 50L25 25L50 40L75 25L85 50L50 85Z"
                                    fill="black"
                                />
                            </svg>
                        ) : (
                            <img
                                className="shrink-0 w-76 h-26 rounded-full mx-8 object-cover"
                                src={src1}
                                alt=""
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

const FullNav = () => {
    const [navOpen, setNavOpen] = useContext(NavContext);
    const stairParentRef = useRef(null);
    const crossRef = useRef(null);
    const fullNavRef = useRef(null);
    const contentRef = useRef(null);
    const tlRef = useRef(null);

    // Build timeline once on mount
    // Build timeline once on mount
    useEffect(() => {
        const stairs = gsap.utils.toArray(".nav-stairs");

        gsap.set(stairs, { yPercent: -100 });
        gsap.set(contentRef.current, { opacity: 0 });
        gsap.set(crossRef.current, { opacity: 0, x: 60 });

        tlRef.current = gsap
            .timeline({ paused: true })
            .set(stairParentRef.current, { display: "flex" })
            .to(stairs, {
                yPercent: 0,
                duration: 0.5,
                ease: "power4.inOut",
                stagger: { amount: 0.2, from: "start" },
            })
            .to(stairs, {
                yPercent: 100,
                duration: 0.5,
                ease: "power4.inOut",
                stagger: { amount: 0.2, from: "start" },
            })
            .set(stairParentRef.current, {
                display: "none",
                pointerEvents: "none",
            })
            // content, cross, and items all appear together instantly when stairs leave
            .set(contentRef.current, { opacity: 1 })
            .to(
                crossRef.current,
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.4,
                    ease: "power4.out",
                },
                "<",
            )
            .from(
                ".nav-item",
                {
                    opacity: 0,
                    y: 30,
                    duration: 0.4,
                    ease: "power3.out",
                    stagger: { amount: 0.2 },
                },
                "<",
            );

        return () => tlRef.current?.kill();
    }, []);

    // Play or reverse based on navOpen
    useEffect(() => {
        if (!tlRef.current) return;

        if (navOpen) {
            gsap.set(contentRef.current, { opacity: 0 });
            gsap.set(stairParentRef.current, { display: "none" });
            fullNavRef.current.style.display = "block";
            tlRef.current.restart();
        } else {
            gsap.to(contentRef.current, { opacity: 0, duration: 0.2 });
            tlRef.current.reverse();
            tlRef.current.eventCallback("onReverseComplete", () => {
                fullNavRef.current.style.display = "none";
            });
        }
    }, [navOpen]);

    return (
        <div ref={fullNavRef} style={{ display: "none" }}>
            {/* Stairs overlay */}
            <div
                ref={stairParentRef}
                className="fixed top-0 left-0 w-full h-screen z-50"
                style={{ display: "none" }}
            >
                <div className="flex h-full w-full">
                    <div className="nav-stairs h-screen w-1/5 bg-black"></div>
                    <div className="nav-stairs h-screen w-1/5 bg-black"></div>
                    <div className="nav-stairs h-screen w-1/5 bg-black"></div>
                    <div className="nav-stairs h-screen w-1/5 bg-black"></div>
                    <div className="nav-stairs h-screen w-1/5 bg-black"></div>
                </div>
            </div>

            {/* Nav content */}
            <div
                ref={contentRef}
                className="bg-black h-screen w-full fixed top-0 z-30 text-white font-[font2]"
            >
                <div className="flex flex-col">
                    <div className="flex justify-between p-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="103"
                            height="44"
                            viewBox="0 0 103 44"
                        >
                            <path
                                fill="white"
                                fillRule="evenodd"
                                d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
                            ></path>
                        </svg>
                        <div className="overflow-hidden">
                            <div
                                onClick={() => setNavOpen(false)}
                                ref={crossRef}
                                className="w-40 h-40 relative cursor-pointer group"
                            >
                                <div className="top-15 -right-5 absolute w-full h-[2.5px] bg-white -translate-y-1/2 rotate-45 group-hover:bg-[#D2FD50] transition-all duration-200"></div>
                                <div className="top-15 -right-5 absolute w-full h-[2.5px] bg-white -translate-y-1/2 -rotate-45 group-hover:bg-[#D2FD50] transition-all duration-200"></div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex flex-col items-center uppercase mt-6">
                        <Items
                            mainText={"Projets"}
                            insideText={"Pour tout voir"}
                            src1={"/lists/1.png"}
                            src2={"/lists/2.jpg"}
                            svg={false}
                        />
                        <Items
                            mainText={"Agence"}
                            insideText={"Pour tout savoir"}
                            src1={"/lists/3.jpg"}
                            src2={"/lists/4.jpg"}
                            svg={false}
                        />
                        <Items
                            mainText={"Contact"}
                            insideText={"Pour envoyer un fax"}
                            svg={true}
                        />
                        <Items
                            mainText={"Blogue"}
                            insideText={"Lire les articles"}
                            src1={"/lists/5.jpg"}
                            src2={"/lists/6.png"}
                            svg={false}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FullNav;
