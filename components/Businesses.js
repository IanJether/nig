import { businessList } from "<nig>/data/business";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Header from "./commons/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { industries } from "<nig>/data/industries";
import ContactPrompt from "./commons/ContactPrompt";
import pic from "../public/images/New/glass.jpg"


const BusinessesComp = () => {
    return (
        <div className='BusinessesComp bg-gray-100'>
            <Header image={pic} page="Our businesses" pageDescription="across diverse industries" />

            {/* section one  */}

            <div className="flex ">

                <div className="section32 lg:w-[75%] py-[40px] lg:py-[100px] px-[5%] lg:pl-[10%] lg:pr-[3%] flex flex-wrap justify-center lg:justify-between gap-[35px] lg:gap-[20px]">
                    {businessList.map((items, index) => {

                        return (
                            <div key={index} className="mappedbusinesslist rr shadow-xl cursor-pointer bg-white w-[85vw] lg:w-[19vw] flex flex-col items-center gap-[30px]">
                                <div className="topbusines relative h-[260px] overflow-hidden lg:h-[33vh] rr w-full bg-gray-300">
                                    <Image className="h-full ease-in-out transition duration-200 hover:scale-[110%] w-full object-cover hover:" height={1000} width={1000} priority src={items.image} alt="" />
                                    <div className="businessabsolute absolute shadow-xl bottom-[0px] w-[66%] left-[17%] bg-primary1 hover:bg-sec1 hover:bg-opacity-[80%]  bg-opacity-[80%] text-center py-[10px] rr text-[18px] font-semibold text-white">
                                        <p>{items.name}</p>
                                    </div>

                                </div>
                                <div className="bottombusines bg-white flex flex-col pb-[30px] px-[10px] gap-[15px]">
                                    <div className="text-[15px] lg:text-[14px] text-stone-600"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit cum explicabo officia voluptatem ducimus sint aspernatur necessitatibus! Voluptas recusandae tenetur necessitatibus omnis cum. Ab est recusandae, rerum a rem eos?</p></div>
                                    {/* <div className="border-b-[2px] border-gray-100"></div> */}
                                    <div className="font-semibold cursor-pointer text-left hover:underline"><p>See more <FontAwesomeIcon className="text-orange-500" icon={faArrowRight} /></p></div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className="hidden lg:flex flex-col gap-[30px] lg:w-[25%] py-[100px] px-[20px]">
                    <div className="text-[28px] font-semibold"><h3>Industries <div className="und"></div></h3></div>

                    <div className="flex flex-col gap-[1px]">
                        {industries.map((items, index) => {

                            return (
                                <div key={index} className="mappedindustries h-[60px] w-[80%] bg-gray-200 flex items-center px-[6%] font-semibold text-neutral-700 hover:border-l-4 hover:border-orange-500 cursor-pointer transition duration-200 ease-in-out">
                                    <h4>{items.name}</h4>
                                </div>
                            )
                        })}
                    </div>

                </div>

            </div>


            {/* section three  */}

            <ContactPrompt/>



            <Footer />
            <Navbar />

        </div>
    )
}
export default BusinessesComp;