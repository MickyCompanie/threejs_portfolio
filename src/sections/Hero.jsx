import {Canvas} from "@react-three/fiber";
import {PerspectiveCamera} from "@react-three/drei";
import {Suspense} from "react";
import CanvasLoader from "../components/CanvasLoader.jsx";
import OldComputers from "../components/OldComputers.jsx";
import {useMediaQuery} from "react-responsive";
import {title, catchPhrase ,calculateSizes} from "../constants/index.js";
import HeroCamera from "../components/HeroCamera.jsx";

const Hero = () => {
    const isSmall = useMediaQuery({maxWidth: 440})
    const isMobile = useMediaQuery({maxWidth: 768})
    const isTablet = useMediaQuery({minWidth: 769, maxWidth: 1024})
    const sizes = calculateSizes(isSmall, isMobile, isTablet)

    return (
        <section className="min-h-screen w-full flex flex-col relative">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p
                    className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans"
                >
                    {title} <span className="waving-hand">👋</span>
                </p>
                <p className="hero_tag text-gray_gradient"> {catchPhrase} </p>
            </div>

            <div className="w-full h-full absolute inset-0">
                <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader/>}>
                        <PerspectiveCamera
                            makeDefault
                            position={[0, 0, 30]}
                        />
                        <HeroCamera isMobile={isMobile}>
                            <OldComputers
                                scale={sizes.computersScale}
                                position={sizes.computersPosition}
                                rotation={sizes.computersRotation}
                            />
                        </HeroCamera>
                        <ambientLight
                            intensity={0.3}
                            position={[0, 0, 0]}
                            color={"#F5E2D8FF"}
                        />
                        <directionalLight
                            position={[10, 10, 10]}
                            rotation={[0, 0, 33]}
                            intensity={2}
                            color={"#15ABFF"}
                        />
                    </Suspense>
                </Canvas>
            </div>
        </section>
    )
}
export default Hero
