import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCircle, faEnvelope, faLink, faLocationPin, faPhone, faX } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import { NavbarList } from "<nig>/data/navList";
import { socialLinks } from "<nig>/data/socialsLink";

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
                if (window.scrollY > 200) {
                    nav.classList.replace('absolute', 'fixed')
                    nav.classList.add('shadow-md', 'bg-black', 'bg-opacity-[80%]')

                    bignav.classList.replace('absolute', 'fixed',)
                    bignav.classList.replace('w-[98vw]', 'w-[100vw]',)
                    bignav.classList.add('shadow-md', 'bg-black', 'bg-opacity-[70%]')

                    navtop.classList.add('bg-blue-500')


                } else {
                    nav.classList.replace('fixed', 'absolute')
                    nav.classList.remove('shadow-md', 'bg-black', 'bg-opacity-[80%]')

                    bignav.classList.replace('fixed', 'absolute')
                    bignav.classList.replace('w-[100vw]', 'w-[98vw]',)
                    // bignav.classList.replace('w-[100vw]', 'w-[98vw]',)
                    bignav.classList.remove('shadow-md', 'bg-black', 'bg-opacity-[70%]')

                    navtop.classList.remove('bg-blue-500')


                }
            } catch { }
        }
    })
    const mySocialOrderList = [0,1,2,3,4];

    return (
        <div className='Navbar'>

            {/* the mobile nav  */}

            <div className="mobilenav lg:hidden pad flex justify-between fixed top-[0px] w-[100vw]  py-[20px]  z-10">
                <div className="logonav text-white font-bold text-[20px] h-[40px] w-[200px]">

                  <Link href="/">  <Image priority className="h-full w-full" height={500} alt="" width={500} src="/images/logo/logow.png" /> </Link>
                </div>
                <div onClick={menucl} className="barsnav text-white text-[23px]">
                    <div className="navbars"> <FontAwesomeIcon className="navbars" icon={faBars} /> </div>
                    <div className="navx hidden"> <FontAwesomeIcon className="navx hidden" icon={faX} /> </div>
                </div>

                <div className="absolute animate__fadeInDown animate__animated animate__faster transition ease-in-out duration-200 navbarcontent hidden w-[100vw] bg-tet1 top-[70px] py-[30px] pad left-[0px]">
                    <ul className="inline-flex flex-col gap-[20px] text-primary2 ">

                        {NavbarList.map((items, index) => {

                            return (
                                <Link href={items.link}>
                                    <li onClick={menucl} className="mappednavbarlist">
                                        {items.title}
                                    </li></Link>
                            )
                        })}
                        </ul>

                        <div className="soshomobile text-primary2 mt-[15px] flex justify-between w-[49vw] text-[20px]">
                           {mySocialOrderList.map((items,index)=>{

                            return(
                                <div className="mappedsocialsmobile">
                                   <a target='_blank' href={socialLinks[items].link}> <FontAwesomeIcon icon={socialLinks[items].icon}/> </a>
                                </div>
                            )
                           })}
                        </div>


                </div>
            </div>

            {/* the desktop nav  */}

            <div className="desktopnav hidden lg:block fixed top-[0px] w-[100vw]  text-white z-10">

              

                <div className="bottomnav flex flex-row-reverse justify-between items-center h-[67px] pad">
                    <div className="nvlinks w-[60%]">
                        <ul className="flex justify-between items-center text-white text-[17px] mt-[4px]">
                            {NavbarList.map((items, index) => {

                                return (
                                    <Link href={items.link}>
                                        <li className="relative group  " key={index}>
                                            {items.title}
                                            <span
                                                className="absolute inset-x-0 bottom-0 h-[2px] bg-orange-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"
                                            ></span>
                                        </li>
                                    </Link>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="h-[50px]">
                       <Link href="/"> <Image alt="" priority className="h-full w-full" height={500} width={500} src="/images/logo/logow.png" /> </Link>
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