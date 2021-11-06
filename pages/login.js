
import ClubsHeader from '../components/clubsHeader'
import {useState,useEffect} from 'react'
import axios from 'axios'

const login = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    function handleSubmit(e){
        e.preventDefault()
        axios.post('/api/login',{
            email:email,
            password:password
        })
        .then(res=>{
            console.log(res)
            if(res.status === 200){
                localStorage.setItem('token',res.data.idToken)
                window.location.href = '/landingPage'
            }
        })
    }

    return (
        
        <div className="" >
        
            <ClubsHeader text="Home" link="/" />
             
                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md "  >
         
           
                 <div className="bg-white py-8 px-6  shadow-lg rounded-lg sm:px-10"> 
                 <div className="  py-5  text-4xl font-bold text-gray-900 text-center">Login </div>
                     <form className="mb-0 space-y-6" onSubmit={handleSubmit}>
                        <div>
                             <label for="email" className="block text-sm font-medium text-gray-700 ">Email address</label>
                             <div className="mt-1 ">
                                 <input className="border-2 rounded-lg border-red-300 flex w-full" id="email" name="email" type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}  />
                             </div>
                        </div>
                      
                        <div>
                            <label for="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <div className="mt-1">
                                <input className="border-2 rounded-lg border-red-300 flex w-full" id="password" name="password" type="password" autocomplete="current-password" value={password} onChange={(e)=>{setPassword(e.target.value)}}  />
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
