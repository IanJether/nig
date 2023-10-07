import Image from "next/image";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { businessList } from "<nig>/data/business";
import { getLink } from "<nig>/data/getLink";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faFile } from "@fortawesome/free-solid-svg-icons";
// import ContactComp from "./Contact";
import ContactPrompt from "./commons/ContactPrompt";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { useRouter } from "next/router";



const Businessdetails = ({ name }) => {



    // console.log(name) 
    // return ""
    const businessDetails = businessList.find((items, index) => getLink(items.name) == name)

    const router = useRouter()

    console.log(router.pathname)

    if(!name){
        return <div>Loading...</div>
    }

    return (
        <div className='Businessdetails'>

            {businessDetails ?

                <div>

                    {/* section one  */}

                    <div className="sectioneonedetails h-[600px] lg:h-screen relative w-full">
                        <Image className="h-full w-full object-cover filter brightness-[43%]" height={2000} alt="kim" width={2000} src={businessDetails.image[0].image} />

                        <div className="detailsabsolute absolute h-full w-full top-[0px] flex flex-col lg:flex-row pad items-center justify-center gap-[20px]">

                            <div className="lg:h-[8vw] lg:w-[8vw] absolute bottom-[0px] right-[0px] h-[160px] w-[160px]  rr overflow-hidden">
                                <Image className="h-full w-full object-contain opacity-[70%]" height={1500} width={1500} alt="kim" src={businessDetails.logo} />
                            </div>

                            <div className="text-white flex text-center flex-col gap-[15px] lg:w-[36vw]">
                                <div className="text-[43px] lg:text-[60px] font-light leading-[43px] lg:leading-[50px]"><h1>{businessDetails.name}</h1></div>
                                <div className="text-[20px]"><p>"{businessDetails.description}"</p></div>
                            </div>

                        </div>


                    </div>



                    <div className="sectiontwo flex flex-col gap-[25px] py-[40px] lg:py-[50px] lg:pb-[40px] ">


                        <div className="sectionone pad text-[14px] text-neutral-700 font-semibold flex flex-wrap gap-[10px] lg:gap-[10px]">
                            <div className="hover:text-primary1 hover:underline">
                                <Link href="/">Home</Link>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faAngleRight} />
                            </div>
                            <div className="hidden lg:block hover:text-primary1 hover:underline">
                                <Link href="/businesses">Our Businesses</Link>
                            </div>
                            <div className="hidden lg:block">
                                <FontAwesomeIcon icon={faAngleRight} />
                            </div>
                            <div className="hover:text-primary1 hover:underline">
                                <Link href="/">{businessDetails.name}</Link>
                            </div>
                        </div>


                        <div className="sectiontwodetails pad flex flex-col  lg:flex-row gap-[40px] lg:gap-[30px]">

                            <div className="detailstext lg:w-[68%] flex flex-col gap-[20px] text-[15px] lg:text-[17px] text-neutral-900">

                                {businessDetails.text.map((itemss, index) => {

                                    return (
                                        <div key={index} className="mappedtextDetails">
                                            <p>{itemss.text}</p>
                                        </div>
                                    )
                                })}

                            </div>

                            <div className="sidebardetails lg:mt-[-60px] flex flex-col gap-[20px] lg:w-[32%] ">



                                <div className="h-[70px] w-full bg-servback text-gray-800 px-[10px] flex items-center font-semibold rr hover:border-l-4 hover:border-orange-500 cursor-pointer">
                                    <p>{businessDetails.industry}</p>
                                </div>
                                <div className="h-[70px] hover:bg-sec1 w-full bg-orange-500 text-white px-[10px] flex items-center font-semibold rr  cursor-pointer">
                                    <p> <FontAwesomeIcon className="mr-[5px] text-[19px]" icon={faFile} /> Company Profile</p>
                                </div>

                            </div>

                        </div>

                    </div>


                    {/* section three  */}

                    <div className="sectionthree flex flex-col gap-[40px] pad pb-[40px] lg:pb-[100px]">


                        <div className="text-[28px] font-semibold lg:w-[60%]">
                            <h2>Gallery <div className="und"></div></h2>
                        </div>

                        <div className="flex flex-wrap gap-[10px] lg:hidden">

                            <Swiper
                                modules={[Autoplay]}
                                slidesPerView={2}
                                spaceBetween={10}
                                autoplay={{
                                    delay: 1200,
                                    disableOnInteraction: false,
                                }}
                                loop
                                className="swiper h-full w-full z-0"
                            >


                                {businessDetails.image.map((items, index) => {

                                    return (
                                        <SwiperSlide key={index}>
                                            <div key={index} className="mappedgallery h-[190px] lg:h-[12vw] bg-gray-200">
                                                <Image alt="kim" className="h-full w-full object-cover " height={2000} width={2000} src={items.image} />
                                            </div>
                                        </SwiperSlide>
                                    )
                                })}
                            </Swiper>

                        </div>

                        <div className="flex flex-wrap gap-[10px] lg:flex hidden ">

                            <Swiper
                                modules={[Autoplay, Pagination]}
                                slidesPerView={3}
                                autoplay={{
                                    delay: 1200,
                                    disableOnInteraction: false,
                                }}

                                loop
                                className="swiper h-full w-full z-0"
                            >


                                {businessDetails.image.map((items, index) => {

                                    return (
                                        <SwiperSlide key={index}>
                                            <div key={index} className="mappedgallery h-[60vh] w-[25vw] bg-gray-200">
                                            <Image alt="kim" className="h-full w-full object-cover " height={2000} width={2000} src={items.image} />
                                            </div>
                                        </SwiperSlide>
                                    )
                                })}
                            </Swiper>

                        </div>

                    </div>







                </div>

                :

                <div className="flex items-center justify-center text-[30px] h-screen w-full font-semibold text-primary1">
                    <h2>Loading .....</h2>
                </div>

            }








            <ContactPrompt />

            <Footer />
            <Navbar />


        </div>
    )
}
export default Businessdetails;