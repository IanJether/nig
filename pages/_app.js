import '<nig>/styles/globals.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import 'animate.css';
import { useEffect } from 'react'
// import { Roboto } from '@next/font/google'

export default function App({ Component, pageProps }) {

  useEffect(()=>{
    Aos.init({
      duration:800,
      once: false,
    })
  },[])


// console.log(Roboto)

  return(
    <div className="main noSelect overflow-hidden">
      <Component {...pageProps} />
    </div>
  ) 
}



// npx tailwindcss -i ./styles/globals.css -o ./styles/output.css --watch