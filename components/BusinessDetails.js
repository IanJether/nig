import Image from "next/image";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { businessList } from "<nig>/data/business";
import { getLink } from "<nig>/data/getLink";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faArrowRight, faFile } from "@fortawesome/free-solid-svg-icons";
import ContactComp from "./Contact";
import ContactPrompt from "./commons/ContactPrompt";



const Businessdetails = ({ name }) => {


    const businessDetails = businessList.find((items, index) => getLink(items.name) == name)

    console.log(businessDetails)

    return (
        <div className='Businessdetails'>

            {businessDetails ?

                <div>

                    {/* section one  */}

                    <div className="sectioneonedetails h-[700px] lg:h-screen relative w-full">
                        <Image className="h-full w-full object-cover filter brightness-[43%]" height={2000} width={2000} src={businessDetails.image} />

                        <div className="detailsabsolute absolute h-full w-full top-[0px] flex flex-col lg:flex-row pad items-center justify-center gap-[20px]">

                            <div className="lg:h-[15vw] lg:w-[15vw] h-[160px] w-[160px] bg-gray-200 bg-opacity-[70%] rr overflow-hidden">
                                <Image className="h-full w-full object-contain opacity-[70%]" height={1500} width={1500} src="/images/logo/niglogo.jpg" />
                            </div>

                            <div className="text-white flex text-center flex-col gap-[15px] lg:w-[36vw]">
                                <div className="text-[43px] lg:text-[50px] font-light leading-[43px] lg:leading-[50px]"><h1>{businessDetails.name}</h1></div>
                                <div className="text-[20px]"><p>"Lorem ipsum dolor sit amet consectetur adipisicing elit."</p></div>
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

                            <div className="detailstext lg:w-[68%] flex flex-col gap-[20px] text-[15px] text-neutral-900">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore id repudiandae minus molestias. Id voluptatibus molestiae sit at quam debitis rerum nesciunt molestias temporibus, tempora maxime maiores, amet nisi dicta? Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ut voluptatem at possimus modi beatae voluptates provident cumque iste dolorem, delectus eum earum, labore reprehenderit ab commodi rem atque id! Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quaerat, nobis, asperiores iure culpa quibusdam esse numquam architecto, nesciunt cupiditate voluptatum voluptate dignissimos veritatis fuga deserunt voluptatem molestias fugit voluptas?</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, expedita a. Commodi distinctio consequatur soluta, impedit autem, quia cupiditate nisi consectetur delectus consequuntur voluptatum obcaecati, nobis expedita dolores eaque! Reiciendis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis odit esse sed, unde quae impedit, vitae facilis maxime incidunt deserunt obcaecati quo doloribus natus? Veniam nisi sequi saepe quas doloribus.</p>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, ad maxime nisi a possimus animi nesciunt dolorem harum recusandae ullam soluta autem reiciendis perferendis quia, itaque, omnis eum aspernatur deleniti!</p>

                            </div>

                            <div className="sidebardetails lg:mt-[-60px] flex flex-col gap-[20px] lg:w-[32%] ">



                                <div className="h-[70px] w-full bg-servback text-gray-800 px-[10px] flex items-center font-semibold rr hover:border-l-4 hover:border-orange-500 cursor-pointer">
                                    <p>Aviation</p>
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

                        <div className="flex flex-wrap gap-[10px]">


                            {businessList.map((items, index) => {

                                return (
                                    <div key={index} className="mappedgallery h-[170px] lg:h-[12vw] w-[48%] lg:w-[12vw] bg-gray-200">

                                    </div>
                                )
                            })}

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