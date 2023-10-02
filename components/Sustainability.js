import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { sustainabiltyList } from "<nig>/data/sustainable";
import { partnersList } from "<nig>/data/partners";
import ContactPrompt from "./commons/ContactPrompt";



const SustainabilityComp = () => {
  return (
    <div className='SustainabilityComp'>

      {/* section one  */}

      <div className="sectionone h-[800px] lg:h-[100vh] relative">

        <Image className="h-full w-full filter brightness-[55%] object-cover" height={1500} width={1500} src="/images/home/land.jpg" priority />
        <div className="sustainabilitytext absolute inset-0 top-0 h-full w-full flex flex-col gap-[20px] lg:gap-[30px] justify-center pad items-center text-white text-center">
          <div className="text-[16px] font-semibold"><h3>Sustainability</h3></div>
          <div className="text-[45px] lg:text-[55px] font-light leading-[50px]"><h2>Building prosperity & self-sufficiency</h2></div>
          <div className="text-[16px] lg:text-[17px] font leading-[23px] lg:w-[60%]"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptate, maiores rem eaque voluptatum, amet tempora repellendus sapiente magni neque ipsa accusantium? Eveniet debitis error libero assumenda nihil repellat odit.</p></div>

        </div>
      </div>

      {/* .section two  */}

      <div className="sectiontwosust bg-gray-100 py-[40px] lg:py-[100px] pad">
        <div className="flex flex-wrap justify-center lg:justify-between gap-[20px]">
          {sustainabiltyList.filter((items, index) => index < 7).map((items, index) => {

            return (
              <div key={index} className="mappedsustainability flex flex-col w-[65px] lg:w-[120px] gap-[5px]">
                <div className="flex items-center justify-center border border-gray-400 rr h-[50px] w-[60px] lg:h-[75px] lg:w-[130px]"><FontAwesomeIcon icon={items.icon} /></div>
                <div className="uppercase font-semibold text-center text-[10px]"><p>{items.title}</p></div>
              </div>
            )
          })}
        </div>
      </div>

      {/* section three  */}

      {sustainabiltyList.filter((items,index)=>index<7).map((items, index) => {

        const isOddIndex = index % 2 !== 0;
        const lgFlexClass = isOddIndex ? "lg:flex-row-reverse" : "lg:flex-row";

        return (
          <div key={index} className="mappedsustianDet">



            <div data-aos="fade-up" data-aos-duration="400" className={`section2 pad flex flex-col ${lgFlexClass} gap-[40px] py-[40px] lg:py-[100px]`}>

              <div className="section11 text-[170px] lg:text-[200px] flex items-center justify-center text-green-500 h-[300px] lg:h-[60vh] relative rr lg:w-[50%]">
                <FontAwesomeIcon icon={items.icon}/>
                {/* <Image className="h-full w-full object-cover" height={1000} width={1000} priority src="/images/home/about.jpg" alt="" /> */}
              </div>

              <div className="section12 leading-[26px] flex flex-col lg:justify-center gap-[20px] lg:gap-[30px] lg:w-[50%]">
                <div className="12title">
                  <div className="font-semibold capitalize text-[28px]">
                    <h2>{items.title}</h2>
                    <div className="und "></div>
                  </div>
                </div>
                <div className="12head font-semibold text-[17px]">
                  <h3>
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit delectus obcaecati beatae! 
                  </h3>
                </div>
                <div className="12text text-[15px] text-stone-600">
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, eveniet in! Quos provident placeat cum voluptates molestias eius autem, ab nesciunt, maxime, neque tempore temporibus. Harum ipsum labore quas vel.
                  </p>
                </div>

              </div>
            </div>

          </div>
        )
      })}

{/* section four  */}

<ContactPrompt/>



      <Footer />
      <Navbar />

    </div>
  )
}
export default SustainabilityComp;