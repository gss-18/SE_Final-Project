

const signup = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center py-12 px-6 lg:px-8 bg-blue-200 ">
         <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <img className="h-16 w-auto px-32 md:px-44 " src="/Logo.png" alt="Smile :)"></img>
            <span className="mt-10 md:mx-16 mx-2 text-3xl font-extrabold text-gray-900">Create your account </span>
            <p className="text-center mt-2 text-sm text-gray-700 max-w">
            Already Registered?
            <a href="/login" className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 mx-1">Sign Up</a>
            </p>
         </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
            <form className="mb-0 space-y-6" action="#" method="post">
                <div>
                     <label for="name" className="block text-sm font-medium text-gray-700">Name</label>
                     <div className="mt-1 ">
                         <input className="border-2 rounded-lg border-red-300 flex w-full" id="name" name="name" type="text" autocomplete="email" required class="" />
                     </div>
                 </div>
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
                    <label className="block text-sm font-medium text-gray-700" for="semester">Semester</label>
                    <div className="mt-1 ">
                        <select name="semester" id="semester" className="border-2 rounded-lg border-red-300 flex w-full">
                            
                            <option>Sem 1</option>
                            <option>Sem 2</option>
                            <option>Sem 3</option>
                            <option>Sem 4</option>
                            <option>Sem 5</option>
                            <option>Sem 6</option>
                            <option>Sem 7</option>
                            <option>Sem 8</option>
                        
                        </select>
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700" for="semester">Course</label>
                    <div className="mt-1 ">
                    <select name="course" id="course" className="border-2 rounded-lg border-red-300 flex w-full">
                        
                        <option>Computer Science</option>
                        <option>Electronics and Communication</option>
                       
                    </select>
                </div>
                </div>

                <div>
                  <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sign up</button>
               </div>
            
            </form>

            </div>
        
        
        </div>

        </div>
    )
}

export default signup
