import {socials} from "../constants/index.js";

const Footer = () => {
    return (
        <section className="c-space pt-7 pb-3 border-t border-black-300 flex justify-center items-center w-full flew-wrap gap-5">
            <div className="text-white-500 flex gap-2">
                <p>Terms & Conditions</p>
                <p>|</p>
                <p>Privacy Policy</p>
            </div>
            <div className="flex gap-3">
                {socials.map(({src, name}) => (
                    <div className="social-icon">
                        <img src={src} alt={name} className="w-1/2 h-1/2"/>
                    </div>
                ))}
            </div>

            <p className="text-white-500">© 2024 Companie Micky. All rights reserved</p>
        </section>
    )
}
export default Footer
