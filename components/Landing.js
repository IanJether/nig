import { useState } from "react";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBars,
  faCircle,
  faEnvelope,
  faLocationPin,
  faPhone,
  faQuoteLeft,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { businessList } from "<nig>/data/business";
import { statsList } from "<nig>/data/stats";
import { newsList } from "<nig>/data/news";
import Footer from "./Footer";
import Image from "next/image";
import { faFacebook, faLinkedin, faTwitch, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { sustainabiltyList } from "<nig>/data/sustainable";

const Landing = () => {
  return (
    <div className="Landing">
      {/* section one  */}

      <div className="section1 relative h-[700px] lg:h-[100vh] bg-primary1">

        {/* <Image className="h-full w-full object-cover filter brightness-[54%]" priority height={1500} width={1500} src="/images/home/home.jpg" alt="" /> */}

        <div className="section1 lg:w-[56%] absolute inset-0 h-full lg:mt-[20px] flex flex-col justify-center gap-[30px] pad text-white">

          <div className="section11 flex gap-[10px]">
            <div className="border-t-[4px] border-orange-500 w-[40px] mt-[16px]"></div>
            <div data-aos='fade-right' data-aos-duration="200" className="text-white font-semibold text-[20px]">
              <h3>Building Ethiopia</h3>
            </div>
          </div>

          <div data-aos='fade-right' data-aos-duration="300" className="section12 text-[32px] lg:text-[44px] leading-[36px] lg:leading-[48px] font-semibold ">
            <h1> Transformation in Key Sectors Across Industries</h1>
          </div>

          <div data-aos='fade-right' data-aos-duration="400" className="section12 lg:w-[80%] font-semibold text-[16px]">
            <h2>
              The top investment group in Aviation and Tourism, Technologies, Higher Education, Agro Solutions and Logistics.
            </h2>
          </div>

          <div className="section14 flex gap-[10px]">
            <div>
              <button data-aos='fade-right' data-aos-duration="500" className="h-[54px] bg-orange-500 hover:bg-sec2 font-semibold px-[20px] rr">
                Learn more
              </button>
            </div>

            <div>
              <button data-aos='fade-right' data-aos-duration="600" className="h-[54px] bg-transparent font-semibold">
                Our Businesses{" "}
                <span className="ml-[3px] text-orange-500">
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>{" "}
              </button>
            </div>



          </div>

        </div>

        <div className="absolute right-[4%] top-[0px] h-[100%] flex items-center">
          <div className="sosholanding hidden lg:flex text-white h-[350px] flex flex-col justify-between">
            <div data-aos='fade-up' data-aos-duration="400" className="hover:text-green-500"><FontAwesomeIcon icon={faPhone} /></div>
            <div data-aos='fade-up' data-aos-duration="600" className="hover:text-yellow-500"><FontAwesomeIcon icon={faEnvelope} /></div>
            <div data-aos='fade-up' data-aos-duration="800" className="hover:text-green-500"><FontAwesomeIcon icon={faWhatsapp} /></div>
            <div data-aos='fade-up' data-aos-duration="1000" className="hover:text-blue-700"><FontAwesomeIcon icon={faLinkedin} /></div>
            <div data-aos='fade-up' data-aos-duration="1200" className="hover:text-red-500"><FontAwesomeIcon icon={faLocationPin} /></div>
          </div>
        </div>



      </div>

      {/* section two  */}

      <div data-aos="fade-up" data-aos-duration="400" className="section2 pad flex flex-col lg:flex-row gap-[40px] py-[40px] lg:py-[100px]">

        <div className="section11 bg-gray-500 shadow-md h-[300px] lg:h-[60vh] relative rr lg:w-[50%]">
          <Image className="h-full w-full object-cover" height={1000} width={1000} priority src="/images/home/about.jpg" alt="" />
          <div className="11abs absolute p-[10px] rr bg-white flex flex-col gap-[5px] justify-center items-center h-[170px] w-[170px] right-[0px] bottom-[0px] shadow-xl">
            <div className="flex gap-[10px] items-center justify-center">
              <div className="text-primary1 text-[20px]"><FontAwesomeIcon icon={faQuoteLeft} /></div>
              <div className="text-orange-500 underline font-semibold"><p>Cpt Moha Juma</p></div>
            </div>
            <div className="font-semibold"><p>We push the limits of whats possible in investment</p></div>

          </div>
        </div>

        <div className="section12 leading-[26px] flex flex-col lg:justify-center gap-[20px] lg:gap-[30px] lg:w-[50%]">
          <div className="12title">
            <div className="font-semibold text-[28px]">
              <h2>About us</h2>
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
      </div>

      {/* section four new  */}

      <div className="sectionfour relative h-[600px] lg:h-[800px]  ">

        <Image className="h-full w-full object-cover" height={1000} width={1000} priority src="/images/home/slide.png" />

        <div className="section41 flex flex-col justify-center gap-[40px] lg:gap-[100px] absolute inset-0 bg-primary1 bg-opacity-[94%] h-[100%] w-[100%] top-[0px] text-white pad py-[40px]">
          <div className="41above flex flex-col lg:justify-between lg:flex-row gap-[20px]">
            <div className="text-[28px] lg:text-[60px] font-light lg:w-[30%]"><h2>Our Vision <div className="und"></div> </h2></div>
            <div className="lg:w-[50%] lg:text-[28px] lg:font-light"><p>Being the top investment group in key sectors of Aviation and Tourism, Technologies, Higher Education, Agro Solutions and Logistics.</p></div>
          </div>
          <div className="line border-b-[2px] border-gray-300"></div>
          <div data-aos="fade-up" data-aos-duration="400" className="41below flex flex-wrap gap-[8px] justify-between">
            {statsList.map((items, index) => {

              return (
                <div className="mappedstatslist text-center font-light w-[37vw] lg:w-[9vw]">
                  <div className="text-[65px] lg:text-[90px]"><h3>{items.number}+</h3></div>
                  <div className="text-stone-300"><p>{items.name}</p></div>
                </div>
              )
            })}

          </div>
        </div>


      </div>


      {/* section three */}

      <div className="sectoin3 flex flex-col bg-gray-100  gap-[50px] lg:gap-[70px] py-[40px] lg:py-[100px] pad">

        <div className="section31 flex flex-col gap-[10px]">
          <div className="text-[28px] lg:w-[60%] font-semibold"><h2>Our Businesses <div className="und"></div> </h2></div>
          <div className="text-stone-600 lg:w-[60%]"><p> NIG's vision is being the top investment group in key sectors of Aviation and Tourism, Technologies, Higher Education, Agro Solutions and Logistics.</p></div>
        </div>

        <div className="section32 flex flex-wrap justify-center lg:justify-between gap-[40px]">
          {businessList.map((items, index) => {

            return (
              <div key={index} className="mappedbusinesslist rr shadow-xl cursor-pointer bg-white  w-[85vw] lg:w-[24vw] flex flex-col items-center gap-[30px]">
                <div className="topbusines relative h-[260px] overflow-hidden lg:h-[33vh] rr w-full bg-gray-300">
                  <Image className="h-full ease-in-out transition duration-200 hover:scale-[110%] w-full object-cover hover:" height={1000} width={1000} priority src={items.image} alt="" />
                  <div className="businessabsolute absolute shadow-xl bottom-[0px] w-[66%] left-[17%] bg-primary1 hover:bg-sec1 hover:bg-opacity-[80%]  bg-opacity-[80%] text-center py-[10px] rr text-[18px] font-semibold text-white">
                    <p>{items.name}</p>
                  </div>

                </div>
                <div className="bottombusines bg-white flex flex-col pb-[30px] px-[10px] gap-[15px]">
                  <div className="text-[15px] text-stone-600"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit cum explicabo officia voluptatem ducimus sint aspernatur necessitatibus! Voluptas recusandae tenetur necessitatibus omnis cum. Ab est recusandae, rerum a rem eos?</p></div>
                  {/* <div className="border-b-[2px] border-gray-100"></div> */}
                  <div className="font-semibold cursor-pointer text-left hover:underline"><p>See more <FontAwesomeIcon className="text-orange-500" icon={faArrowRight} /></p></div>
                </div>
              </div>
            )
          })}
        </div>

      </div>


    


      {/* section six  */}

      <div className="sectionsix h-[740px] lg:h-[100vh] relative">

      <Image className="h-full w-full object-cover filter brightness-[54%]" priority height={1500} width={1500} src="/images/home/land.jpg" alt="" />

        <div className="h-full w-[98vw] absolute lg:mt-[30px] inset-0 flex gap-[30px] flex-col lg:flex-row lg:items-center justify-center pad text-white">
            <div className="flex flex-col gap-[10px] lg:gap-[35px] lg:w-[50%] lg:h-[300px]">

              <div className="text-[14px] font-semibold"><h3>Sustainability</h3></div>
              <div className="text-[32px] font-bold leading-[35px]"><h2>Building prosperity & self-sufficiency</h2></div>
              <div className="text-[16px] font-semibold leading-[22px]"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptate, maiores rem eaque voluptatum, amet tempora repellendus sapiente magni neque ipsa accusantium? Eveniet debitis error libero assumenda nihil repellat odit.</p></div>
              <div className="font-light"> <p>Read More <span className="text-orange-500"><FontAwesomeIcon icon={faArrowRight}/></span></p> </div>

            </div>
            <div className="hidden lg:block"></div>
            <div className="flex flex-col gap-[10px] lg:gap-[35px] lg:w-[50%] lg:h-[300px]">
                <div className="uppercase font-semibold text-[14px]"><p>7 Sustainability Pillars</p></div>
                <div className="flex flex-wrap justify-between lg:justify-start gap-[20px]">
                  {sustainabiltyList.filter((items,index)=>index<4).map((items,index)=>{

                    return(
                      <div key={index} className="mappedsustainability flex flex-col w-[65px] lg:w-[70px] gap-[5px]">
                        <div className="flex items-center justify-center border rr h-[50px] w-[60px]"><FontAwesomeIcon icon={items.icon}/></div>
                        <div className="uppercase font-semibold text-center text-[10px]"><p>{items.title}</p></div>
                      </div>
                    )
                  })}
                </div>
                <div className="flex flex-wrap justify-between lg:justify-start gap-[20px]">
                  {sustainabiltyList.filter((items,index)=>index>=4).map((items,index)=>{

                    return(
                      <div key={index} className="mappedsustainability flex flex-col w-[65px] lg:w-[70px] gap-[5px]">
                        <div className="flex items-center justify-center border rr h-[50px] w-[60px]"><FontAwesomeIcon icon={items.icon}/></div>
                        <div className="uppercase font-semibold text-center text-[10px]"><p>{items.title}</p></div>
                      </div>
                    )
                  })}
                </div>
            </div>
        </div>
      </div>

      <Footer />
      <Navbar />
    </div>
  );
};
export default Landing;
