import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";



const Header = ({ page, pageDescription, image }) => {
    return (
        <div className='Header relative h-[300px]  lg:h-[50vh] bg-neutral-700'>

            <Image className="h-full w-full object-cover filter brightness-[35%]" height={1500} width={1600}  src={image} priority />

            <div className="h-full w-full absolute top-[0px]  pad flex items-center lg:justify-start">
                <h2 className="capitalize text-white mt-[40px] lg:mt-[10px] font-light text-[47px] lg:text-[60px] leading-[50px] lg:w-[60%] lg:leading-[75px]"><span className="text-primary1">{page}</span> {pageDescription} </h2>
            </div>

        </div>
    )
}
export default Header;