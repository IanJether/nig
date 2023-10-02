import Footer from "./Footer";
import Navbar from "./Navbar";
import Header from "./commons/Header";
import pic from "../public/images/New/ceo1.jpg"
import ContactPrompt from "./commons/ContactPrompt";
import { newsList } from "<nig>/data/news";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


const NewsComp = () => {
    return (
        <div className='NewsComp bg-gray-100'>

            <Header image={pic} page="News" pageDescription="and articles" />

            {/* sectoin one hidden news and articles  */}

            <div className="sectiononeNews flex flex-col gap-[50px] lg:gap-[70px] pad py-[40px] lg:py-[100px] lg:pb-[130px]">
                <div className="51top flex flex-col lg:flex-row lg:justify-between gap-[20px]">
                    <div className="text-[28px] font-semibold"><h2>News and Stories <div className="und"></div></h2></div>
                    <div className="hidden lg:block"><button className="bg-orange-500 hover:bg-sec2 h-[50px] rr text-white font-semibold px-[15px]">Contact Us</button></div>
                </div>
                <div data-aos="fade-up" data-aos-duration="400" className="52bottom flex flex-wrap justify-between gap-[40px]">
                    {newsList.map((items, index) => {

                        return (
                            <div key={index} className="mappednews cursor-pointer bg-white rr shadow-xl hover:shadow-2xl lg:w-[24vw]">
                                <div className="h-[240px] lg:h-[30vh] overflow-hidden bg-gray-500">
                                    <Image priority className="h-full w-full object-cover" quality={70} height={1000} width={1000} src={items.image} />
                                </div>
                                <div className="p-[18px] flex flex-col gap-[10px]">
                                    <div className="text-[15px] font-bold text-stone-600"><p>29 Septmeber 2023</p></div>
                                    <div className="text-[16px] font-semibold text-primary1"><h3>Appointment of captain Al Majeed as CEO and President of NIG</h3></div>
                                    <div className="text-[15px]"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis dolorem sequi tenetur culpa vitae saepe non, dolore cum iure magnam modi corporis tempora possimus doloremque </p></div>
                                    <div><p className="text-[15px] font-semibold text-orange-500 hover:underline">Read More <span><FontAwesomeIcon icon={faArrowRight} /></span></p></div>
                                </div>
                            </div>
                        )
                    })}

                </div>
               
            </div>

            <ContactPrompt />
            <Footer />
            <Navbar />

        </div>
    )
}
export default NewsComp;