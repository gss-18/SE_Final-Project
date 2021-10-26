

const login = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center py-12 px-6 lg:px-8 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 ">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                 <img className="md:h-16 md:w-auto md:px-20 " src="https://erp.bitmesra.ac.in/imgnew1/BITMesradefault-new.png" alt="Smile :)"></img>
                 <span className="mt-10 md:mx-46 mx-28 text-3xl font-extrabold text-gray-900">Login </span>
                
            </div> 
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md"> 
                 <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10"> 
                     <form className="mb-0 space-y-6" action="#" method="post">
                        <div>
                             <label for="email" className="block text-sm font-medium text-gray-700">Email address</label>
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
                            <button type="submit" className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110   w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">Login</button>
                       </div>

                 </form>
                 <span className="text-center  text-base text-semibold text-gray-700 max-w">Not registered yet? </span> <a href="/signup" className="font-medium text-red-600 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 mx-1">Register!</a>
                 </div>
            </div> 
        </div>
    )
}

export default login
