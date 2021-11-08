
import ClubsHeader from '../components/clubsHeader'
import {useState,useEffect} from 'react'
import axios from 'axios'

const signup = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [name,setName] = useState('')
    const [semester,setSemester] = useState('Sem 1')
    const [course,setCourse] = useState('Computer Science')
    const [gender,setGender] = useState('Male')
    const [error,setError] = useState('')

    function handleSubmit(event){
        // Create a function to send data to API
        event.preventDefault();
        const data = {
            email: email,
            password: password,
            name: name,
            semester: semester,
            course: course,
            gender: gender
        }
        axios.post('/api/register',data).then((response) => {
            console.log(response)
            try{
                if(response.data.auth){
                    localStorage.setItem('token', response.data.id)
                    window.location.href = '/landingPage'
                }
                else{
                    setError('Username Exists')
                }
            }
            catch(err){
                setError('Username Exists')
            }
            
        })
    }


    return ( 
        <div className="flex flex-col justify-center ">
        <ClubsHeader text="Home" link="/"/>
        
        
         <div className="sm:mx-auto sm:w-full sm:max-w-md ">
           
            <span className="mt-10 md:mx-16 mx-10  text-3xl font-extrabold text-gray-900 text-center px-4 md:px-2">Create your account </span>
            <p className="text-center mt-2 text-sm text-gray-700 max-w">
            Already Registered?
            <a href="/login" className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 mx-1">Sign In</a>
            </p>
         </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-red-500 font-bold p-2 text-center">{error}</div>
            <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
            <form className="mb-0 space-y-6" action="#" method="post" onSubmit={handleSubmit}>
                <div>
                     <label for="name" className="block text-md font-medium text-gray-700">Name</label>
                     <div className="mt-1 ">
                         <input className="p-2 border-2 rounded-lg border-red-300 flex w-full" id="name" name="name" type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />
                     </div>
                 </div>
                <div>
                    <label for="email" className="block text-md font-medium text-gray-700">Email address</label>
                    <div className="mt-1 ">
                        <input className="p-2 border-2 rounded-lg border-red-300 flex w-full" id="email" name="email" type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                     </div>
                </div>
                <div>
                     <label for="password" className="block text-md font-medium text-gray-700">Password</label>
                     <div className="mt-1">
                         <input className="p-2 border-2 rounded-lg border-red-300 flex w-full" id="password" name="password" type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}   />
                     </div>
                </div>
                <div>
                    <label className="block text-md font-medium text-gray-700" for="semester">Semester</label>
                    <div className="mt-1 ">
                        <select name="semester" id="semester" className="p-2 border-2 rounded-lg border-red-300 flex w-full" value={semester} onChange={(e)=>{setSemester(e.target.value)}}>
                            
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                        
                        </select>
                    </div>
                </div>
                <div>
                    <label className="block text-md font-medium text-gray-700" for="semester">Course</label>
                    <div className="mt-1 ">
                    <select name="course" id="course" className="p-2 border-2 rounded-lg border-red-300 flex w-full" value={course} onChange={(e)=>{setCourse(e.target.value)}}>
                        
                        <option>Computer Science</option>
                        <option>Electronics and Communication</option>
                       
                    </select>
                </div>
                </div>

                <div>
                    <label className="block text-md font-medium text-gray-700" for="semester">Gender</label>
                    <div className="mt-1 ">
                    <select name="course" id="course" className="p-2 border-2 rounded-lg border-red-300 flex w-full" value={gender} onChange={(e)=>{setGender(e.target.value)}}>
                        
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                    </select>
                </div>
                </div>

                <div>
                  <button type="submit" className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110   w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">Sign up</button>
               </div>
            
            </form>

            </div>
        
            </div>
        </div>
    )
}

export default signup
