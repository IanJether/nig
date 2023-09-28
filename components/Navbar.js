import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCircle, faEnvelope, faLink, faLocationPin, faPhone, faX } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

const Navbar = () => {


    const [menu, setMenu] = useState("true")

    const menucl = () => {
        if (menu == "true") {
            document.querySelector(".navbars").classList.add('hidden');
            document.querySelector(".navx").classList.remove('hidden');
            document.querySelector(".navx").classList.add('mr-[4px]');
            document.querySelector(".navbarcontent").classList.remove('hidden');
            setMenu("false");
        } else {
            document.querySelector(".navbars").classList.remove('hidden');
            document.querySelector(".navx").classList.add('hidden');
            document.querySelector(".navx").classList.remove('mr-[4px]');
            document.querySelector(".navbarcontent").classList.add('hidden');
            setMenu("true");
        }
    }

    useEffect(() => {


        const nav = document.querySelector(".mobilenav")

        const bignav = document.querySelector(".desktopnav")

        const navtop = document.querySelector(".topnav")

        // const navbottom = document.querySelector(".bottomnav")




        window.onscroll = function () {
            try {
                if (window.scrollY > 400) {
                    nav.classList.replace('absolute', 'fixed')
                    nav.classList.add('shadow-md', 'bg-black', 'bg-opacity-[80%]')

                    bignav.classList.replace('absolute', 'fixed',)
                    bignav.classList.replace('w-[98vw]', 'w-[100vw]',)
                    bignav.classList.add('shadow-md', 'bg-black', 'bg-opacity-[50%]')

                    navtop.classList.add('bg-blue-500')
                   

                } else {
                    nav.classList.replace('fixed', 'absolute')
                    nav.classList.remove('shadow-md', 'bg-black', 'bg-opacity-[80%]')

                    bignav.classList.replace('fixed', 'absolute')
                    bignav.classList.replace('w-[100vw]', 'w-[98vw]',)
                    // bignav.classList.replace('w-[100vw]', 'w-[98vw]',)
                    bignav.classList.remove('shadow-md', 'bg-black', 'bg-opacity-[50%]')

                    navtop.classList.remove('bg-blue-500')
                 

                }
            } catch { }
        }
    })

    return (
        <div className='Navbar'>

            {/* the mobile nav  */}

            <div className="mobilenav lg:hidden pad flex justify-between fixed top-[0px] w-[100vw] bg-black bg-opacity-[30%] py-[20px]">
                <div className="logonav text-white font-bold text-[20px]">
                
<h2>LOGO</h2>
                </div>
                <div onClick={menucl} className="barsnav text-white text-[23px]">
                   <div className="navbars"> <FontAwesomeIcon className="navbars" icon={faBars} /> </div>
                   <div className="navx hidden"> <FontAwesomeIcon className="navx hidden" icon={faX} /> </div>
                </div>

                <div className="absolute navbarcontent hidden w-[100vw] bg-gray-200 bg-opacity-[90%] top-[70px] py-[30px] pad left-[0px]">
                    <ul className="inline-flex flex-col gap-[20px] text-black font-semibold">

                        <li>Retailers</li>
                        <li>Advertisers</li>
                        <li>Resources</li>
                        <li>Off-site</li>
                        <Link href="/about"> <li>About</li> </Link>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>

            {/* the desktop nav  */}

            <div className="desktopnav hidden lg:block fixed top-[0px] w-[100vw]  text-white">

                <div className="topnav hidden flex justify-between py-[14px] bg-opacity-[85%] pad">
                    <div className="nvlogo">
                        <h2>LOGO</h2>
                    </div>
                    <div className="nvcontact flex gap-[40px] text-[14px] font-semibold">
                        <div className="nvloc flex gap-[10px]">
                            <div className="text-orange-500"><FontAwesomeIcon icon={faLocationPin} /></div>
                            <div><p>Addis Ababa, Ethiopia ,Megnagna POSSEA Building 3rd floor</p></div>
                        </div>
                        <div className="nvmail flex gap-[10px]">
                            <div className="text-orange-500"><FontAwesomeIcon icon={faEnvelope} /></div>
                            <div><p>info@niginternational.com</p></div>
                        </div>
                        <div className="nvphone flex gap-[10px] ">
                            <div className="text-orange-500"><FontAwesomeIcon icon={faPhone} /></div>
                            <div><p>+254-7-123-456-789</p></div>
                        </div>
                    </div>

                </div>

                <div className="bottomnav flex flex-row-reverse justify-between items-center bg-black bg-opacity-[40%] h-[67px] pad">
                    <div className="nvlinks w-[60%]">
                        <ul className="inline-flex justify-between w-full font-semibold">
                            <li>HOME</li>
                            <li>ABOUT US</li>
                            <li>PORTFOLIO</li>
                            <li>CAREERS</li>
                            <li>NEWS</li>
                            <li>RESOURCES</li>
                        </ul>
                    </div>
                    <div className="h-[63px]">
                        <Image className="h-full w-full" height={500} width={500} src="/images/logo/logo.png"/>
                    </div>
                    {/* <div className="nvsocial flex gap-[20px] text-[18px]">
                        <div><FontAwesomeIcon icon={faFacebook}/></div>
                        <div><FontAwesomeIcon icon={faTwitter}/></div>
                        <div><FontAwesomeIcon icon={faInstagram}/></div>
                        <div><FontAwesomeIcon icon={faLinkedin}/></div>

                    </div> */}

                </div>

            </div>





        </div>
    )
}
export default Navbar;