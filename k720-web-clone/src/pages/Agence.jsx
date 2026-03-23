import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Agence = () => {
    const imageArray = [
        "/peoples/1.jpg",
        "/peoples/2.jpg",
        "/peoples/3.jpg",
        "/peoples/4.jpg",
        "/peoples/5.jpg",
        "/peoples/6.jpg",
        "/peoples/7.jpg",
        "/peoples/8.jpg",
    ];

    const imageDivRef = useRef(null);
    const imageRef = useRef(null);
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        gsap.to(imageDivRef.current, {
            scrollTrigger: {
                trigger: imageDivRef.current,
                // markers: true,
                start: "top 25%",
                end: "top -102%",
                scrub: true,
                pin: true,
                onUpdate: (e) => {
                    const nextIndex = Math.min(
                        imageArray.length - 1,
                        Math.max(0, Math.floor(e.progress * imageArray.length)),
                    );

                    if (imageRef.current) {
                        imageRef.current.src = imageArray[nextIndex];
                    }
                },
            },
        });
    });

    return (
        <>
            <div className="text-black bg-white ">
                <div
                    ref={imageDivRef}
                    className="h-110 w-70 absolute top-60 left-144"
                >
                    <img
                        ref={imageRef}
                        className=" rounded-2xl"
                        src={imageArray[0]}
                        alt=""
                    />
                </div>

                <div className="mt-130 relative">
                    <h1 className="text-[380px] text-center font-[font2] leading-84 uppercase">
                        Soixan7e <br /> Douze
                    </h1>
                    <p className="font-[font1] text-6xl mt-1 l-0 w-[58.5%] absolute right-0">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Notre curiosité nourrit notre créativité. On reste
                        humbles et on dit non aux gros egos, même le vôtre. Une
                        marque est vivante. Elle a des valeurs, une
                        personnalité, une histoire. Si on oublie ça, on peut
                        faire de bons chiffres à court terme, mais on la tue à
                        long terme. C’est pour ça qu’on s’engage à donner de la
                        perspective, pour bâtir des marques influentes.
                    </p>
                </div>
            </div>

            <div className="h-screen"></div>
            <div className="h-screen"></div>
            <div className="h-screen"></div>
            <div className="h-screen"></div>
        </>
    );
};

export default Agence;
