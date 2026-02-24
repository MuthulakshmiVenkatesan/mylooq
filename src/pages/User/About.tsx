import { Link } from "react-router-dom";
import { ViewAllIcon } from "../../components/customfile/icons";

function About() {
    return (
        <div className="mx-auto w-full bg-[#fff] mt-[70px] max-w-[1230px] max-sm:mt-[50px]">
            <div className="px-5 lg:px-[75px] py-[80px] common_p_80 max-sm:py-[20px] max-sm:mb-[20px]">
                <div className="flex items-center justify-between border-b border-[rgba(0,0,0,0.1)] pb-[20px] mb-[20px]">
                    <h4 className="text-[24px] font-[Bold] text-[#000] text30px">About Us</h4>
                    <div>
                        <Link to="/user/home">
                            <button className="flex items-center gap-[4px] cursor-pointer">
                                <ViewAllIcon className="w-[16px] h-[16px] rotate-180" />
                                <p className="text-[14px] font-[Bold] text-[#000]">Back</p>
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col gap-[20px]">
                    <p className="text-[14px] font-[Regular] text-[#000] leading-[26px]">MyLooQTM is your go-to destination for modern, on-demand beauty and wellness. From flawless makeup and precision hairstyling to soothing spa and massage sessions, we make it easy to book talented beauty pros who come straight to your door—on your time, in your space.</p>
                    <p className="text-[14px] font-[Regular] text-[#000] leading-[26px]">Our mission is to make it effortless to look good, feel good, and vibe confidently—wherever you are. With just a few taps, clients can explore categories, view LooQer profiles, and connect with professionals for personalized glam and self-care experiences.</p>
                    <p className="text-[14px] font-[Regular] text-[#000] leading-[26px]">Whether you're getting ready for a night out, prepping for a photoshoot, or need a moment of wellness, MyLooQTM brings beauty and calm directly to you—on demand.</p>
                    <div>
                        <p className="text-[14px] font-[Regular] text-[#000] leading-[26px] mb-[10px]">For independent beauty artists, stylists, and wellness pros, MyLooQTM offers a platform to showcase your talent, reach new<br />clients, and grow your income—all in one app.</p>
                        <ul className="flex flex-col gap-[6px]">
                            <li className="text-[14px] font-[Regular] text-[#000] leading-[26px]">Beauty, Wellness, Convenience</li>
                            <li className="text-[14px] font-[Regular] text-[#000] leading-[26px]">Glow Up, Vibe Up, Cash Up.</li>
                            <li className="text-[14px] font-[Regular] text-[#000] leading-[26px]">That’s the MyLooQTM way.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;