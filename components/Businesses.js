import { businessList } from "<nig>/data/business";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Header from "./commons/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";


const BusinessesComp = () => {
    return (
        <div className='BusinessesComp'>
            <Header page="Our businesses" pageDescription="In various diverse industries" />

            {/* section one  */}

            <div className="section32 flex flex-wrap justify-center lg:justify-between gap-[40px] pad py-[40px] lg:py-[100px]">
                {businessList.map((items, index) => {

                    return (
                        <div key={index} className="mappedbusinesslist cursor-pointer bg-white  w-[85vw] lg:w-[24vw] flex flex-col items-center gap-[20px]">
                            <div className="topbusines relative h-[260px] overflow-hidden lg:h-[33vh] rr w-full bg-gray-300">
                                <Image className="h-full ease-in-out transition duration-200 hover:scale-[110%] w-full object-cover hover:" height={1000} width={1000} priority src={items.image} alt="" />
                                <div className="businessabsolute absolute shadow-xl bottom-[0px] w-[66%] left-[17%] bg-primary1 hover:bg-sec1 hover:bg-opacity-[80%]  bg-opacity-[80%] text-center py-[10px] rr text-[18px] font-semibold text-white">
                                    <p>{items.name}</p>
                                </div>

                            </div>
                            <div className="bottombusines flex flex-col pb-[20px] px-[10px] gap-[15px]">
                                <div className="text-[15px] text-stone-600"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit cum explicabo officia voluptatem ducimus sint aspernatur necessitatibus! Voluptas recusandae tenetur necessitatibus omnis cum. Ab est recusandae, rerum a rem eos?</p></div>
                                {/* <div className="border-b-[2px] border-gray-100"></div> */}
                                <div className="font-semibold cursor-pointer text-left hover:underline"><p>See more <FontAwesomeIcon className="text-orange-500" icon={faArrowRight} /></p></div>
                            </div>
                        </div>
                    )
                })}
            </div>


            <Footer />
            <Navbar />

        </div>
    )
}
export default BusinessesComp;