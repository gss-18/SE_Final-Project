import Head from 'next/head'
import Image from 'next/image'
export default function Home() {
  return (


    <div>
    

      <Head>
        <title>BIT-D</title>  
        <link rel="icon" href="/Logo.png" />
      </Head>
      

        <div className="container mx-auto flex  p-5 flex-col md:flex-row items-center md:space-x-xl ">
        
            <img className="md:h-22 md:w-auto md:px-24 " src="https://erp.bitmesra.ac.in/imgnew1/BITMesradefault-new.png" alt="Smile :)"></img>
           <a href="/login"><button className="md:ml-auto transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110   w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-ml font-medium text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">Login</button></a>
        </div>
      

    </div>
  )
}
