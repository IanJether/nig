import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { sustainabiltyList } from "<nig>/data/sustainable";
import { partnersList } from "<nig>/data/partners";
import ContactPrompt from "./commons/ContactPrompt";
import { businessList } from "<nig>/data/business";



const SustainabilityComp = () => {
  return (
    <div className='SustainabilityComp'>

      {/* section one  */}

      <div className="sectionone h-[800px] lg:h-[100vh] relative">

        <Image className="h-full w-full filter brightness-[55%] object-cover" height={1500} width={1500} src="/images/home/land.jpg" priority />
        <div className="sustainabilitytext absolute inset-0 top-0 h-full w-full flex flex-col gap-[20px] mt-[-50px] lg:gap-[30px] justify-center pad items-center text-white text-center">
          <div className="text-[16px] font-semibold"><h3>Sustainability</h3></div>
          <div className="text-[45px] lg:text-[55px] font-light leading-[50px]"><h2>Building prosperity & self-sufficiency</h2></div>
          <div className="text-[16px] lg:text-[17px] font leading-[23px] lg:w-[60%]"><p>At NIG, our commitment to sustainability extends beyond mere adherence to regulatory requirements. Our motivation is rooted in a strong determination to make meaningful contributions and create a positive influence on the growth and well-being of our host communities and society as a whole</p></div>

        </div>

          <div className="flex flex-wrap absolute w-full pad bottom-[50px] justify-center lg:justify-between gap-[20px]">
          {sustainabiltyList.filter((items, index) => index < 7).map((items, index) => {

            return (
              <div key={index} className="mappedsustainability flex flex-col text-white w-[65px] lg:w-[120px] gap-[5px]">
                <div className="flex items-center justify-center border border-gray-400 rr h-[50px] w-[60px] lg:h-[80px] lg:w-[140px]"><FontAwesomeIcon icon={items.icon} /></div>
                <div className="uppercase font-semibold text-center text-[10px]"><p>{items.title}</p></div>
              </div>
            )
          })}
        </div>
      </div>

      {/* .section two  */}

    

      {/* section three  */}

      <div className="sustaibalitysdgs flex flex-col gap-[16px] lg:gap-[30px] pad py-[40px] lg:py-[100px]">

        <div className="onesdgs  flex flex-col lg:flex-row lg:h-[650px] gap-[10px]">

          <div className="sus lg:h-[102%] lg:w-[50%] relative">
            <Image className="h-full w-full object-cover filter brightness-[60%]" height={1000} width={1000} priority src={businessList[0].image[1].image} alt="kim" />
            <div className="absolute top-[10px] right-[10px] text-white font-semibold text-[30px]">
              <p>SDG #4</p>
            </div>
            <div className="absolute bottom-[15px] text-white w-full text-center">
              <h3 className="font-semibold text-[18px]">National Aviation College</h3>
              <p className="text-[18px]">Promoting sustainable Tourism</p>
            </div>
          </div>
          <div className="flex flex-col gap-[13px] lg:w-[50%] ">
            <div className="sus lg:h-[50%] relative">
              <Image className="h-full w-full object-cover filter brightness-[60%]" height={1000} width={1000} priority src={businessList[1].image[1].image} alt="kim" />
              <div className="absolute top-[10px] right-[10px] text-white font-semibold text-[30px]">
                <p>SDG #9</p>
              </div>
              <div className="absolute bottom-[15px] text-white w-full text-center">
                <h3 className="font-semibold text-[18px]">National Research and Consultancy Institute:</h3>
                <p>Helping organizations adopt more sustainable and innovative practices.</p>
              </div></div>
            <div className="sus lg:h-[50%] relative">
              <Image className="h-full w-full object-cover filter brightness-[60%]" height={1000} width={1000} priority src={businessList[2].image[1].image} alt="kim" />
              <div className="absolute top-[10px] right-[10px] text-white font-semibold text-[30px]">
                <p>SDG #2</p>
              </div>
              <div className="absolute bottom-[15px] text-white w-full text-center">
                <h3 className="font-semibold text-[18px]">National Agro Solutions</h3>
                <p>Improving food security and promoting sustainable agriculture practices</p>
              </div></div>
          </div>

        </div>

        <div className="twosdgs flex flex-col lg:flex-row gap-[10px]">

          <div className="flex flex-col gap-[10px] lg:w-[30%]">
            <div className="sus relative">
              <Image className="h-full w-full object-cover filter brightness-[60%]" height={1000} width={1000} priority src={businessList[3].image[1].image} alt="kim" />
              <div className="absolute top-[10px] right-[10px] text-white font-semibold text-[30px]">
                <p>SDG #9</p>
              </div>
              <div className="absolute bottom-[15px] text-white w-full text-center">
                <h3 className="font-semibold text-[18px]">National Cargo and Logistics Service</h3>
                <p>Enhancing logistics and transportation infrastructure</p>
              </div></div>
            <div className="sus relative">
              <Image className="h-full w-full object-cover filter brightness-[60%]" height={1000} width={1000} priority src={businessList[4].image[1].image} alt="kim" />
              <div className="absolute top-[10px] right-[10px] text-white font-semibold text-[30px]">
                <p>SDG #9</p>
              </div>
              <div className="absolute bottom-[15px] text-white w-full text-center">
                <h3 className="font-semibold text-[18px]">National Telecom Solutions</h3>
                <p>Enabling access to information and education in remote areas.</p>
              </div></div>

          </div>
          <div className="sus lg:h-[610px] lg:w-[40%] relative">
            <Image className="h-full w-full object-cover filter brightness-[60%]" height={1000} width={1000} priority src={businessList[5].image[1].image} alt="kim" />
            <div className="absolute top-[10px] right-[10px] text-white font-semibold text-[30px]">
              <p>SDG #13</p>
            </div>
            <div className="absolute bottom-[15px] text-white w-full text-center">
              <h3 className="font-semibold text-[18px]">National Airways</h3>
              <p>Adopted sustainable aviation practices to mitigate the impact of air travel on climate change.</p>
            </div>
          </div>
          <div className="flex flex-col gap-[10px] lg:w-[30%]">
            <div className="sus relative">
              <Image className="h-full w-full object-cover filter brightness-[60%]" height={1000} width={1000} priority src={businessList[6].image[1].image} alt="kim" />
              <div className="absolute top-[10px] right-[10px] text-white font-semibold text-[30px]">
                <p>SDG #8</p>
              </div>
              <div className="absolute bottom-[15px] text-white w-full text-center">
                <h3 className="font-semibold text-[18px]">Waliya Tours & Travel</h3>
                <p>Promoting sustainable Tourism</p>
              </div></div>
            <div className="sus relative">
              <Image className="h-full w-full object-cover filter brightness-[60%]" height={1000} width={1000} priority src={businessList[7].image[1].image} alt="kim" />
              <div className="absolute top-[10px] right-[10px] text-white font-semibold text-[30px]">
                <p>SDG #1</p>
              </div>
              <div className="absolute bottom-[15px] text-white w-full text-center">
                <h3 className="font-semibold text-[18px]">Tollo Cash</h3>
                <p>Promoting financial inclusion and reducing economic disparities.</p>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* section four  */}

      <ContactPrompt />



      <Footer />
      <Navbar />

    </div>
  )
}
export default SustainabilityComp;