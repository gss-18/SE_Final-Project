import React,{useState,useEffect} from 'react'
import axios from 'axios'
import jwt from 'jsonwebtoken'
import LoadingScreen from './LoadingScreen'
const AuthRequired = (props) => {
    const [isAuthenticated,setIsAuthenticated] = useState(false)
    const [loading,setLoading] = useState(true)
    useEffect(async () => {
        if(localStorage.getItem('token')){
            const token = jwt.decode(localStorage.getItem('token'))
            const url = '/api/access_db?email='+token.email
            await axios.get(url).then(response => {
                console.log(response.data)
                if(response.data.userDetails.length > 0){
                    setIsAuthenticated(true)
                    //setLoading(false)
                }
                else{
                    setIsAuthenticated(false)
                    //setLoading(false)
                }
            })
            .catch(err => {
                console.log(err)
            })
        }
        else{
            setIsAuthenticated(false)
        }
        setLoading(false)
    },[])

    if(isAuthenticated){
        return <>{props.children}</>
    }
    else{
        if(loading){
            return (
                <div className="md:flex flex-col items-center justify-center min-h-screen py-2">
                    <LoadingScreen loading={loading}/>
                </div>
                )
        }
        else{
            return(
                <div className="md:flex flex-col items-center justify-center min-h-screen py-2">
                    <h1 className="text-center text-5xl py-5">You are not authenticated to view this page</h1>
                    <p className="text-center "> <a href="/" >Please <span className="text-blue-500">login</span> at this page</a></p> 
                </div>
                )
        }
        
    }
}

export default AuthRequired