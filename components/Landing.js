import { useState } from "react";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBars,
  faCircle,
  faEnvelope,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { businessList } from "<nig>/data/business";
import { statsList } from "<nig>/data/stats";
import { newsList } from "<nig>/data/news";
import Footer from "./Footer";
import Image from "next/image";

const Landing = () => {
  return (
    <div className="Landing">
      {/* section one  */}

      <div className="section1 relative h-[700px] lg:h-[98vh] bg-gray-500">

      <Image className="h-full w-full object-cover filter brightness-[54%]" priority height={1500} width={1500} src="/images/home/home.jpg" alt="" />
        
        <div className="section1 lg:w-[60%] absolute inset-0 h-full lg:mt-[20px] flex flex-col justify-center gap-[30px] pad text-white">

          <div className="section11 flex gap-[10px]">
            <div className="border-t-[4px] border-orange-500 w-[50px] mt-[16px]"></div>
            <div className="text-white font-semibold text-[20px]">
              <h3>Meet Consulting</h3>
            </div>
          </div>

          <div className="section12 text-[44px] leading-[48px] font-semibold ">
            <h1>Elevate business operations with consulting</h1>
          </div>

          <div className="section12 font-semibold text-[16px]">
            <h2>
              We know how to achieve the highest standards most productively
            </h2>
          </div>

          <div className="section14 flex gap-[10px]">
            <div>
              <button className="h-[54px] bg-orange-500 font-semibold px-[20px] rr">
                Learn more
              </button>
            </div>

            <div>
              <button className="h-[54px] bg-transparent font-semibold">
                Our Businesses{" "}
                <span className="ml-[3px] text-orange-500">
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>{" "}
              </button>
            </div>

          </div>

        </div>



      </div>

      {/* section two  */}

      <div className="section2 pad flex flex-col lg:flex-row gap-[40px] py-[40px] lg:py-[100px]">

        <div className="section11 bg-gray-500 shadow-md h-[240px] lg:h-[60vh] relative rr lg:w-[50%]">
          <Image className="h-full w-full object-cover" height={1000} width={1000} priority src="/images/home/about.jpg" alt=""/>
          <div className="11abs absolute rr bg-white h-[70px] w-[70px] lg:w-[100px] left-[2px] top-[20%] shadow-md"></div>
          <div className="11abs absolute rr bg-white h-[70px] w-[70px] lg:w-[100px] right-[10%] top-[1%] shadow-md"></div>
          <div className="11abs absolute rr bg-white h-[70px] w-[120px] lg:w-[140px] right-[25%] bottom-[-4%] shadow-md"></div>
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
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              modi! Velit alias inventore est placeat.
            </h3>
          </div>
          <div className="12text text-[15px] text-stone-600">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Assumenda recusandae dolore, eveniet veritatis expedita
              reprehenderit mollitia rem modi error enim praesentium sapiente
              consequuntur nostrum quidem neque a nam ratione ipsam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptate eius vitae corporis. Animi, ipsam ab
            </p>
          </div>
          <div className="12link">
            <p className="font-semibold">
              Read more{" "}
              <span className="ml-[5px] text-orange-500">
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </p>
          </div>
        </div>
      </div>


      {/* section three */}

      <div className="sectoin3 flex flex-col gap-[40px] bg-gray-100 py-[40px] lg:py-[100px] pad">

        <div className="section31 flex flex-col gap-[10px]">
          <div className="text-[28px] font-semibold"><h2>Portfolio <div className="und"></div> </h2></div>
          <div className="text-stone-600"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium repellendus repellat explicabo sunt dolores minima eveniet vitae.</p></div>
        </div>

        <div className="section32 flex flex-wrap justify-center lg:justify-between gap-[40px]">
          {businessList.map((items, index) => {

            return (
              <div key={index} className="mappedbusinesslist w-[85vw] lg:w-[23vw] flex flex-col items-center gap-[20px]">
                <div className="topbusines relative h-[250px] overflow-hidden lg:h-[33vh] rr w-full bg-gray-300">
                <Image className="h-full w-full object-cover" height={1000} width={1000} priority src={items.image} alt=""/>
                  <div className="businessabsolute absolute bottom-[1px] w-[66%] left-[17%] bg-orange-500 bg-opacity-[70%] text-center py-[10px] rr text-[18px] font-semibold text-white">
                    <p>{items.name}</p>
                  </div>

                </div>
                <div className="bottombusines flex flex-col gap-[15px] text-center">
                  <div className="text-[15px] text-stone-600"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit cum explicabo officia voluptatem ducimus sint aspernatur necessitatibus! Voluptas recusandae tenetur necessitatibus omnis cum. Ab est recusandae, rerum a rem eos?</p></div>
                  <div className="border-b-[2px] border-gray-300"></div>
                  <div className="font-semibold"><p>See more <FontAwesomeIcon className="text-orange-500" icon={faArrowRight} /></p></div>
                </div>
              </div>
            )
          })}
        </div>

      </div>

      {/* section four  */}

      <div className="sectionfour relative h-[600px] lg:h-[800px]  ">

        <Image className="h-full w-full object-cover" height={1000} width={1000} priority src="/images/home/slide.png" />

        <div className="section41 flex flex-col justify-center gap-[40px] lg:gap-[100px] absolute inset-0 bg-gray-800 bg-opacity-[99%] h-[100%] w-[100%] top-[0px] text-white pad py-[40px]">
          <div className="41above flex flex-col lg:justify-between lg:flex-row gap-[20px]">
            <div className="text-[28px] lg:text-[60px] font-light lg:w-[30%]"><h2>Our Approach <div className="und"></div> </h2></div>
            <div className="lg:w-[50%] lg:text-[28px] lg:font-light"><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias fuga, atque ducimus provident, tenetur officia est expedita deserunt animi sed voluptatem a beatae ut.</p></div>
          </div>
          <div className="line border-b-[2px] border-gray-500"></div>
          <div className="41below flex flex-wrap gap-[8px] justify-between">
            {statsList.map((items, index) => {

              return (
                <div className="mappedstatslist text-center font-light w-[37vw] lg:w-[9vw]">
                  <div className="text-[65px] lg:text-[90px]"><h3>75+</h3></div>
                  <div className="text-stone-300"><p>Companies</p></div>
                </div>
              )
            })}

          </div>
        </div>


      </div>



      {/* sectoin five  */}

      <div className="sectionfive flex flex-col gap-[50px] lg:gap-[70px] bg-gray-100 pad py-[40px] lg:py-[100px] lg:pb-[130px]">
        <div className="51top flex flex-col lg:flex-row lg:justify-between gap-[20px]">
          <div className="text-[28px] font-semibold"><h2>News and Stories <div className="und"></div></h2></div>
          <div className="hidden lg:block"><button className="bg-orange-500 h-[50px] rr text-white font-semibold px-[15px]">Explore More News</button></div>
        </div>
        <div className="52bottom flex flex-wrap justify-between gap-[40px]">
          {newsList.map((items, index) => {

            return (
              <div className="mappednews bg-white rr shadow-xl lg:w-[24vw]">
                <div className="h-[240px] lg:h-[30vh] overflow-hidden bg-gray-500">
                  <Image priority className="h-full w-full object-cover" quality={70} height={1000} width={1000} src={items.image} />
                </div>
                <div className="p-[18px] flex flex-col gap-[10px]">
                  <div className="text-[15px] font-bold text-stone-600"><p>29 Septmeber 2023</p></div>
                  <div className="text-[16px] font-semibold text-orange-500"><h3>Appointment of captain Al Majeed as CEO and President of NIG</h3></div>
                  <div className="text-[15px]"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis dolorem sequi tenetur culpa vitae saepe non, dolore cum iure magnam modi corporis tempora possimus doloremque </p></div>
                  <div><p className="text-[15px] font-semibold text-blue-500">Read More <span><FontAwesomeIcon icon={faArrowRight} /></span></p></div>
                </div>
              </div>
            )
          })}

        </div>
        <div className="lg:hidden">
          <button className="bg-orange-500 h-[50px] rr text-white font-semibold px-[15px]">Explore More News</button>
        </div>
      </div>

      <Footer />
      <Navbar />
    </div>
  );
};
export default Landing;
