import Globe from "react-globe.gl";
import Button from "../components/Button.jsx";
import {useState} from "react";


const About = () => {
    const [hasCopied, setHasCopied] = useState(false);


    const handleCopy = () => {
        navigator.clipboard.writeText('micky.companie@gmail.com')
        setHasCopied(true)
        setTimeout(() => {setHasCopied(false)}, 2000)
    }

    return (
        <section className="s-space my-20">
            <div className="grid xl:grid-cols-3 xl:grid-row-6 md:grid-cols-2 gap-5 h-full">

                {/*grid 1*/}
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img
                            src="/assets/grid1.png"
                            alt="grid 1"
                            className="w-full sm:h-[276px] h-fit object-contain"
                        />
                        <div>
                            <p className="grid-headtext">Hi I'm Micky</p>
                            <p className="grid-subtext">With 2 years of experience, I have honed my skills in development.</p>
                        </div>
                    </div>
                </div>

                {/*grid 2*/}
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid2.png" alt="w-full sm:w-[276px] h-fit object-contain" />
                        <p className="grid-headtext">Tech Stack</p>
                        <p className="grid-subtext">I specialise in javascript, is really interested in python and have used php</p>
                    </div>
                </div>

                {/*grid 3 */}
                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor="rgba(0, 0, 0, 0)"
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                // showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                            />
                        </div>
                        <div>
                            <p className="grid-headtext">I work remotely across most timezones</p>
                            <p className="grid-subtext">I m based in Belgium</p>
                            <Button name="Contact Me" isBeam containerClass="w-full mt-10"/>
                        </div>
                    </div>
                </div>

                {/*grid 4 */}
                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid3.png" alt="grid 3" className="w-full sm:h-[266px] h-fit object-contain" />
                        <div>
                            <p className="grid-headtext">My Passion For Coding</p>
                            <p className="grid-subtext">I Love Solving Problems And Building Things Through Code</p>
                        </div>
                    </div>
                </div>

                {/*grid 5*/}
                <div className="wl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img src="/assets/grid4.png" alt="grid 4" className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top" />
                        <div className="space-y-2">
                            <p className="grid-subtext text-center">Contact Me</p>
                            <div className="copy-container" onClick={handleCopy}>
                                <img src={hasCopied ? "/assets/tick.svg" : "/assets/copy.svg"} alt="" className="" />
                                <p className="lg:text-2xl md:text-xl font-medium text-gray-gradient text-white">micky.companie@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About
