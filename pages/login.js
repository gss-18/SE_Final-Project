

const login = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center py-12 px-6 lg:px-8 bg-blue-200 ">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                 <img className="h-16 w-auto px-32 md:px-44 " src="/Logo.png" alt="Smile :)"></img>
                 <span className="mt-10 md:mx-46 mx-28 text-3xl font-extrabold text-gray-900">Login </span>
                
            </div> 
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md"> 
                 <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10"> 
                     <form className="mb-0 space-y-6" action="#" method="post">
                        <div>
                             <label for="email" className="block text-sm font-medium text-gray-700">Email address</label>
                             <div className="mt-1 ">
                                 <input className="border-2 rounded-lg border-red-300 flex w-full" id="email" name="email" type="email" autocomplete="email" required class="" />
                             </div>
                        </div>
                      
                        <div>
                            <label for="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <div className="mt-1">
                                <input className="border-2 rounded-lg border-red-300 flex w-full" id="password" name="password" type="password" autocomplete="current-password" required class="" />
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Login</button>
                       </div>

                 </form>
                 <span className="text-center  text-base text-semibold text-gray-700 max-w">Don't have an account?</span> <a href="/signup" className="font-medium text-red-600 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 mx-1">Register!</a>
                 </div>
            </div> 
        </div>
    )
}

export default login
