import Businessdetails from "<nig>/components/BusinessDetails";
import { useRouter } from "next/router";




 const newsPage = () =>{ 

    const router = useRouter();
    const news = router.query.news


       return( 
          <div className='newsPage'>
                <Businessdetails name={news}/>
          </div> 
)
}
export default newsPage ;