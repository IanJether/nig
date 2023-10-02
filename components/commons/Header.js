


const Header = ({ page, pageDescription, image }) => {
    return (
        <div className='Header flex items-center lg:justify-start h-[300px]  lg:h-[50vh] pad bg-neutral-700'>

            <h2 className="capitalize text-white mt-[25px] lg:mt-[10px] font-light text-[47px] lg:text-[60px] leading-[50px] lg:w-[60%] lg:leading-[75px]"><span className="text-primary1">{page}</span> {pageDescription} </h2>

        </div>
    )
}
export default Header;