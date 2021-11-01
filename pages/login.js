import Head from 'next/head'


const login = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center py-12 px-6 lg:px-8 " style={{background: 'rgba(0, 0, 0, 0.5)', backgroundImage: `url(/bitd.jpg)`,backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition:'center' }}>
        <Head>
            <title>BIT-D</title>  
            <link rel="icon" href="/Logo.png" />
        </Head>
            
            
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md "  >
         
           
                 <div className="bg-white py-8 px-6  shadow-lg rounded-lg sm:px-10"> 
                 <div className="  py-5  text-4xl font-bold text-gray-900 text-center">Login </div>
                     <form className="mb-0 space-y-6" action="#" method="post">
                        <div>
                             <label for="email" className="block text-sm font-medium text-gray-700 ">Email address</label>
                             <div className="mt-1 ">
                                 <input className="border-2 rounded-lg border-red-300 flex w-full" id="email" name="email" type="email" autocomplete="email"  />
                             </div>
                        </div>
                      
                        <div>
                            <label for="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <div className="mt-1">
                                <input className="border-2 rounded-lg border-red-300 flex w-full" id="password" name="password" type="password" autocomplete="current-password"  />
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110   w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">Submit</button>
                       </div>

                 </form>
                 <span className="text-center  text-base text-semibold text-gray-700 max-w">Not registered yet? </span> <a href="/signup" className="font-medium text-red-600 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 mx-1">Register!</a>
                 </div>
            </div> 

        </div>
    )
}

export default login
