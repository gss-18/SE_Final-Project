import ClubsHeader from '../components/clubsHeader'
import {useState,useEffect} from 'react'
import axios from 'axios'
var jwt = require('jsonwebtoken');


const userProfile = () => {
  const [email,setEmail] = useState('')
  const [name,setName] = useState('')
  const [semester,setSemester] = useState('')
  const [course,setCourse] = useState('')
  const [gender,setGender] = useState('')
  const [marks,setMarks] = useState([])


  useEffect(async() => {
    const token = jwt.decode(localStorage.getItem('token'))
    console.log(token.email)
    const url = '/api/access_db?email='+token.email
    console.log(url)
    await axios.get(url).then(res => {
      console.log(res.data)
      setEmail(res.data.userDetails[0].email)
      setName(res.data.userDetails[0].name)
      setCourse(res.data.userDetails[0].course)
      setGender(res.data.userDetails[0].gender)
      setSemester(res.data.userDetails[0].semester)
      setMarks(res.data.markDetails[0].semester)
    }),[]})


    return (
        <div>
            <ClubsHeader className="" text="DashBoard" link="/landingPage" />
            <section className=" py-1 bg-blueGray-50">
            <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                <div className="rounded-t bg-white mb-0 px-6 py-6">
                  <div className="text-center flex justify-between">
                    <h6 className="text-blueGray-700 text-xl font-bold">
                      My account
                    </h6>
                    
                  </div>
                </div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                  <form>
                    <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                      User Information
                    </h6>
                    <div className="flex flex-wrap">
                      <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                          <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" >
                            Name
                          </label>
                          <p  className="border-0 p-5 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">{name}</p>
                        </div>
                      </div>
                      <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                          <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" >
                            Email address
                          </label>
                          <p  className="border-0 p-5 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">{email}</p>
                        </div>
                      </div>
                      <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                          <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" >
                            Semester
                          </label>
                          <p  className="border-0 p-5 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">{semester}</p>
                        </div>
                      </div>
                      <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                          <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" >
                            Course
                          </label>
                          <p  className="border-0 p-5 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">{course}</p>
                        </div>
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                          <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" >
                            Gender
                          </label>
                          <p  className="border-0 p-5 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">{gender}</p>
                        </div>
                      </div>
                      {
                        marks.map((item,index) => {
                          return(
                            <div>Sem {Object.keys(item)} : {item[Object.keys(item)]}</div>
                          )
                        })
                    }  
                  </form>
                </div>
              </div>
              
            </div>
          </section>
        </div>
    )
}

export default userProfile
