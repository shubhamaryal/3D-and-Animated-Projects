import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useLocation } from "react-router-dom";

const Loading = ({ children }) => {
    const stairParentRef = useRef(null);
    const appRef = useRef(null);

    const path = useLocation().pathname;

    useGSAP(() => {
        const tl = gsap.timeline();

        tl.to(stairParentRef.current, {
            display: "block",
        });
        tl.from(".stairs", {
            height: 0,
            stagger: {
                amount: -0.2,
            },
        });
        tl.to(".stairs", {
            y: "100%",
            stagger: {
                amount: -0.2,
            },
        });
        tl.to(stairParentRef.current, {
            display: "none",
        });
        tl.to(".stairs", {
            y: "0%",
        });

        gsap.from(appRef.current, {
            opacity: 0,
            delay: 1.2,
        });
    }, [path]);

    return (
        <div>
            <div
                className="fixed top-0 left-0 w-full h-screen z-20"
                ref={stairParentRef}
            >
                <div className="flex h-full w-full">
                    <div className="stairs h-screen w-1/5 bg-black"></div>
                    <div className="stairs h-screen w-1/5 bg-black"></div>
                    <div className="stairs h-screen w-1/5 bg-black"></div>
                    <div className="stairs h-screen w-1/5 bg-black"></div>
                    <div className="stairs h-screen w-1/5 bg-black"></div>
                </div>
            </div>
            <div ref={appRef}>{children}</div>
        </div>
    );
};

export default Loading;
