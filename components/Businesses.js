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
import Link from "next/link";
import { getLink } from "<nig>/data/getLink";
import Head from "next/head";


const BusinessesComp = () => {



console.log(businessList.map((items)=>items.name))

    return (
        <div className='BusinessesComp bg-gray-100'>

<Head>
        <title>Our Businesses</title>
        <meta name="description" content="NIG" />
        <meta name="description" content="NATIONAL INVESTMENT GROUP" />
        <meta name="description" content="NIG EHTOPIA" />
        <meta name="description" content="INVESTMENT AFRICA" />
        <meta name="description" content="AFRICA COOPERATE" />
        <meta name="description" content="ETHIOPIA COOPERATE" />
        <meta name="description" content="SAFRAICOM ETHIOPIA" />
        <meta name="description" content="BUSINESS ETHIOPIA" />
        <meta
          property="og:title"
          content="Our Businesses - NATIONAL INVESTMENT GROUP "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>


            <Header image={pic} page="Our businesses" pageDescription="across diverse industries" />

            {/* section one  */}


            {businessList.map((items, index) => {

                const address = "/businesses/" + getLink(items.name)


                const isOddIndex = index % 2 !== 0;
                const lgFlexClass = isOddIndex ? "lg:flex-row-reverse" : "lg:flex-row";

                return (
                    <div data-aos="fade-up" data-aos-duration="400" className={`section2 pad flex flex-col ${lgFlexClass} gap-[40px] py-[40px] lg:py-[100px]`}>

                        <div className="section11 h-[290px] md:h-[400px] lg:h-[64vh] relative rr lg:w-[50%]">

                            <div className="absolute h-[55%] w-[90%] md:w-[60%] lg:w-[70%] top-[0px] left-[0px]">
                                <Image className="h-full w-full rr object-cover shadow-xl" height={1000} width={1000} priority src={items.image[1].image} alt="" />
                            </div>

                            <div className="absolute h-[55%] w-[90%] md:w-[60%] lg:w-[70%] bottom-[0px] right-[0px]">
                                <Image className="h-full rr w-full object-cover shadow-xl" height={1000} width={1000} priority src={items.image[0].image} alt="" />
                            </div>

                            <div className="absolute w-[27%] top-[0px] right-[0px]">
                                <Image className="h-full rr w-full object-contain " height={500} width={500} priority src={items.logo} />

                            </div>


                        </div>

                        <div className="section12 leading-[26px] flex flex-col lg:justify-center gap-[20px] lg:gap-[30px] lg:w-[50%]">
                            <div className="12title">
                                <div className="font-semibold capitalize hover:text-primary1 text-[28px]">
                                   <Link href={address}> <h2>{items.name}</h2> </Link>
                                    <div className="und "></div>
                                </div>
                            </div>
                            <div className="12head font-semibold text-[17px]">
                                <h3>
                                    "{items.description}"
                                </h3>
                            </div>
                            <div className="12text text-[15px] text-stone-600">
                                
                                   {items.text.filter((items,index)=>index == 0).map((itemss,index)=>{

                                    return(
                                        <div key={index} className="mappedtextbusiness">

                                        <p>{itemss.text}</p>
                                        </div>
                                    )
                                   })}
                                
                            </div>

                            <div className="12link">
                              <Link href={address}>  <p className="font-semibold hover:underline cursor-pointer">
                                    Read more{" "}
                                    <span className="ml-[5px] text-orange-500">
                                        <FontAwesomeIcon icon={faArrowRight} />
                                    </span>
                                </p> </Link>
                            </div>
                        </div>
                    </div>
                )
            })}

            {/* <div data-aos="fade-up" data-aos-duration="400" className="section2 pad flex flex-col lg:flex-row-reverse gap-[40px] py-[40px] lg:py-[100px]">

                <div className="section11 h-[400px] lg:h-[60vh] relative rr lg:w-[50%]">

                    <div className="absolute h-[60%] w-[90%] lg:w-[70%] top-[0px] left-[0px]">
                    <Image className="h-full w-full object-cover shadow-xl" height={1000} width={1000} priority src="/images/home/arch.jpg" alt="" />
                    </div>

                    <div className="absolute h-[60%] w-[90%] lg:w-[70%] bottom-[0px] right-[0px]">
                    <Image className="h-full w-full object-cover shadow-xl" height={1000} width={1000} priority src="/images/home/about.jpg" alt="" />
                    </div>

                    <div className="absolute w-[27%] top-[0px] right-[0px]">
                        <Image className="h-full w-full object-contain " height={500} width={500} priority src="/images/logo/logoc.png"/>

                    </div>


                </div>

                <div className="section12 leading-[26px] flex flex-col lg:justify-center gap-[20px] lg:gap-[30px] lg:w-[50%]">
                    <div className="12title">
                        <div className="font-semibold text-[28px]">
                            <h2>Who we are</h2>
                            <div className="und "></div>
                        </div>
                    </div>
                    <div className="12head font-semibold text-[17px]">
                        <h3>
                            National Investment Group (NIG) is a prominent conglomerate in Ethiopia playing a major role towards nation building.
                        </h3>
                    </div>
                    <div className="12text text-[15px] text-stone-600">
                        <p>
                            Led by its founder and owner, Captain Abera Lemi – a former Ethiopian Airlines Captain, NIG was incorporated as an umbrella company comprising of ten sister companies (business units) which operate across various sectors such as Aviation & Tourism, Technologies, Higher Education, Agro-Solutions, logistics & transportation, and General Trading.
                        </p>
                    </div>

                    <div className="12link">
                        <p className="font-semibold hover:underline cursor-pointer">
                            Read more{" "}
                            <span className="ml-[5px] text-orange-500">
                                <FontAwesomeIcon icon={faArrowRight} />
                            </span>
                        </p>
                    </div>
                </div>
            </div> */}






            {/* section three  */}

            <ContactPrompt />



            <Footer />
            <Navbar />

        </div>
    )
}
export default BusinessesComp;