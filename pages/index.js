import Head from 'next/head'

import { Carousel } from 'react-responsive-carousel';

export default function Home() {
  return (
    
    <div className="bg-gradient-to-r from-red-500 to-yellow-400 min-h-screen ">
        <Head>
           <title>BIT-D</title>  
        <link rel="icon" href="/Logo.png" />
      </Head>
           <div className="container mx-auto flex p-5 flex-col md:flex-row items-center md:space-x-xl ">
              <img className="md:h-22 md:w-auto md:px-24 " src="https://erp.bitmesra.ac.in/imgnew1/BITMesradefault-new.png" alt="Smile :)"></img>
              <a href="/login"><button className="md:ml-auto transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110   w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-ml font-medium text-white ">Login</button></a>
           </div>
           <p className="font-mono  text-center text-2xl italic font-semibold "> Welcome to BIT-D</p> 
        <Carousel className="mt-2 "> 
            
              <div>
                <img className="md:h-22 md:w-auto md:px-24 h-auto w-auto " src="bitd.jpg" alt="Smile :)"></img>
                
             </div>
             <div>
                <img className="md:h-22 md:w-auto md:px-24 h-auto w-auto " src="boysh.jpg" alt="Smile :)"></img>
                
             </div>
             <div>
                <img className="md:h-22 md:w-auto md:px-24 h-auto w-auto " src="girlsh.jpeg" alt="Smile :)"></img>
                
             </div>
             <div>
                <img className="md:h-22 md:w-auto md:px-24 h-auto w-auto " src="cs.jfif" alt="Smile :)"></img>
                
             </div>
         
        </Carousel>
        
        <p className="font-mono  text-center text-xl mt-7 font-medium">"The Jharkhand Government, willing to spread the academic excellence of BIT further across the state, made a request to the institute to establish an Extension Centre at Deoghar. BIT responded wholeheartedly and subsequently, a MoU was signed between the Institute and the Government of Jharkhand. Thus, the Deoghar Extension Centre of BIT commenced functioning in October 2007 as the eighth of the Institute’s campuses within India offering undergraduate programs in different streams of engineering."</p>
       
      
        </div>
  )
}
