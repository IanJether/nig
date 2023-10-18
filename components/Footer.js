import { businessList } from "<nig>/data/business";
import { getLink } from "<nig>/data/getLink";
import { NavbarList } from "<nig>/data/navList";
import { socialLinks } from "<nig>/data/socialsLink";
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocation, faLocationPin, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";


const Footer = () => {
    return (
        <div className='Footer flex flex-col gap-[10px] pt-[40px] lg:pt-[100px] bg-neutral-800 text-white'>
            <div className="footertop pad flex flex-col lg:flex-row gap-[30px] pb-[30px] lg:pb-[80px]">

                <div className="footer1 overflow-hidden cursor-pointer flex flex-col gap-[10px] lg:gap-[15px] lg:w-[30%]">
                    <div className="div mb-[15px] lg:mb-[5px] bg-teal-5 font-semibold text-orange-500">
                        <Image alt="" className="h-[60px] w-[250px]" height={500} width={500} src="/images/logo/logoc.png" />
                    </div>
                    {socialLinks.filter((items,index)=>index<3).map((items, index) => {

                        return (
                            <div className="mappedsociallinks flex gap-[10px]">
                                <div className="w-[20px] text-orange-500"><FontAwesomeIcon icon={items.icon} /></div>
                                <div className="hover:text-primary1 hover:underline"><p>{items.text}</p></div>
                            </div>
                        )
                    })}
                    {/* <div className="flex gap-[10px] ">
                        <div className="w-[20px] text-orange-500"><FontAwesomeIcon icon={faPhone} /></div>
                        <div className="hover:text-primary1 hover:underline"><p>+252-911-201-722</p></div>
                    </div>
                    <div className="flex gap-[10px]">
                        <div className="w-[20px] text-orange-500"><FontAwesomeIcon icon={faEnvelope} /></div>
                        <div className="hover:text-primary1 hover:underline"><p>info@nationalinvestmentgoup. com</p></div>
                    </div>
                    <div className="flex gap-[10px]">
                        <div className="w-[24px] text-orange-500"><FontAwesomeIcon icon={faLocationPin} /></div>
                        <div className="hover:text-primary1 hover:underline"><p>Addis Ababa, Ethiopia ,Megnagna POSSEA Building 3rd floor</p></div>
                    </div> */}
                </div>

                <div className="footer2 flex flex-col gap-[20px] lg:w-[20%]">
                    <div className="text-[20px] font-semibold"><h3>Other Pages</h3></div>
                    <div>
                        <ul className="inline-flex flex-col gap-[5px] lg:gap-[15px] text-stone-200">
                            {NavbarList.map((items, index) => {

                                return (
                                    
                                       <Link key={index} href={items.link}> <li>{items.title}</li> </Link>
                                
                                )
                            })}
                        </ul>
                    </div>

                </div>

                <div className="footer3 flex flex-col gap-[20px] lg:w-[30%]">
                    <div className="text-[20px] font-semibold"><h3>Our Portfolio</h3></div>
                    <div>
                        <ul className="inline-flex flex-col gap-[10px] lg:gap-[15px] text-stone-200">
                            {businessList.map((items, index) => {

                                const address = "/businesses/" + getLink(items.name)

                                return (
                                   
                                       <Link key={index} href={address}> <li>{items.name}</li> </Link>
                                 
                                )
                            })}
                        </ul>
                    </div>

                </div>

                <div className="footer4 flex flex-col gap-[10px] lg:w-[20%]">
                    <div className="text-[20px] font-semibold"><h3>Get The Latest News</h3></div>
                    <div className="flex soshobox gap-[20px] lg:gap-[30px] text-[25px] text-orange-500">
                        <div><FontAwesomeIcon icon={faEnvelope} /></div>
                        <div><FontAwesomeIcon icon={faInstagram} /></div>
                        <div><FontAwesomeIcon icon={faTwitter} /></div>
                        <div><FontAwesomeIcon icon={faLinkedin} /></div>
                    </div>
                </div>

            </div>
            {/* <div className="linefooter border-b-[1px] border-gray-400"></div> */}
            <div className="footerbottom text-center text-[14px] py-[40px] bg-neutral-900 flex flex-col lg:flex-row lg:justify-between pad gap-[5px]">
                <div>Copyright &copy; 2023 National Investment Group</div>
                <div>Engineered by <a target="_blank" href="https://www.fineteklabs.com/"><span className="text-blue-500 hover:text-blue-600 hover:underline"> Fineteklabs </span></a></div>
            </div>

        </div>
    )
}
export default Footer;