import { getLink } from "<nig>/data/getLink";
import { newsList } from "<nig>/data/news";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Header from "./commons/Header";
import Image from "next/image";
import pic from "../public/images/banner3.jpg";
import ContactComp from "./Contact";
import ContactPrompt from "./commons/ContactPrompt";
import Head from "next/head";



const Newsdetails = ({ title }) => {

   const newsDetails = newsList.find((items, index) => getLink(items.title) == title)

   //  console.log(newsDetails)

   if (!title) {
      return <div>Loading...</div>
   }

   return (
      <div className='Newsdetails bg-gray-100'>

         <Head>
            <title>{newsDetails.title}</title>
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
               content={`${newsDetails.title} - NATIONAL INVESTMENT GROUP `}
            />
          
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <div className='Header relative h-[550px] z-0 lg:h-[78vh] bg-neutral-700'>

            <Image className="h-full w-full object-cover filter brightness-[60%]" height={1500} width={1600} src={newsDetails.image} priority />

            <div className="h-full w-full text-center absolute top-[0px]  px-[5%] lg:px-[20%]  flex items-center lg:justify-start">
               <h2 data-aos="fade-down" data-aos-duration="400" className="capitalize text-white mt-[40px] lg:mt-[10px] text-[40px] lg:text-[55px] leading-[50px]  lg:leading-[75px]"><span className="text-primary1">  </span> {newsDetails.title} </h2>
            </div>

         </div>


         {/* <div className="titlesectionnews relative mx-auto mt-[-60px] lg:mt-[-120px] z-10 w-[90%] lg:w-[84%] rr overflow-hidden bg-teal-500 h-[200px] lg:h-[62vh]">
            <Image className="h-full w-full object-cover filter brightness-[60%]" height={1000} width={1000} src={newsDetails.image} alt="" />

            <div className="absolutetitle text-[20px] lg:text-[40px]  px-[10px] lg:px-[35px]  flex text-white items-center rr justify-center lg:justify-start top-[0px] absolute h-[100%] w-[100%]">
               <h2 className="lg:w-[50%]">{newsDetails.title}</h2>

            </div>

         </div> */}

         {/* sectiontwo  */}

         <div className="sectiontwo flex flex-wrap lg:justify-center gap-[25px] pad2 py-[40px]">

            <div data-aos="fade-right" data-aos-duration="400" className="flex flex-col w-[30%] lg:items-center lg:w-[30%] gap-[2px]">
               <div className="text-gray-500"><p>Author</p></div>
               <div className="lg:text-[20px] "><h3>{newsDetails.author}</h3></div>
            </div>
            <div data-aos="fade-right" data-aos-duration="600" className="flex flex-col lg:items-center w-[53%] lg:w-[30%] gap-[2px]">
               <div className="text-gray-500 "><p>Date</p></div>
               <div className="lg:text-[20px] "><h3>{newsDetails.date}</h3></div>
            </div>
            <div data-aos="fade-right" data-aos-duration="800" className="flex flex-col w-[33%] lg:items-center lg:w-[30%] gap-[2px]">
               <div className="text-gray-500"><p>Category</p></div>
               <div className="lg:text-[20px] "><h3>Articles</h3></div>
            </div>

         </div>

         {/* section three  */}

         <div data-aos="fade-up" data-aos-duration="400" className="sectionthree flex flex-col gap-[13px] mx-[5%] lg:mx-[20%] mb-[40px] lg:mb-[100px] p-[4%] rr bg-white shadow-xl">

            {newsDetails.text.map((items, index) => {

               return (
                  <div key={index} className="mappeddetails">
                     <p>{items.text}</p>
                  </div>
               )
            })}

         </div>



         <ContactPrompt />
         <Footer />
         <Navbar />



      </div>
   )
}
export default Newsdetails;