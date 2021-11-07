import auth from '../../helper/fireauth'
import db from '../../helper/firedb'
import axios from 'axios'

export default  async (req, res) => {


    function generateMarks(email,semester){
        //Generate random semester scores and return JSON object
        let marks = []
        for(let i=1;i<Number(semester);i++){
            var sem_marks = {}
            let random = Math.floor(Math.random() * (3))+5  + 0.1*Math.floor(Math.random() * (9))+1
            sem_marks[i] = random
            marks.push(sem_marks)
        }
        return {
            email: email,
            semester: marks
        }
    }


    if(req.method === 'POST'){
        var token = ''
        try{
            console.log("Got request for ",req.body)
            const {email, password, name, semester} = req.body
            console.log(email, password, name)
            await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDF2c-J_X4jB-5fXVCFmt10sAXeRYzYtEA', {
                email: email,
                password: password,
                returnSecureToken: true
            })
            .catch(err => {
                console.log(err)
                res.status(200).json({
                    auth:false,error:"Username already exists"
                })
            })
            .then((axios_res) => {
                // Signed in 
                console.log(axios_res.data)
                console.log("Username Registered")
                token = axios_res.data.idToken
                // ...
            })

            await db.collection('users').doc(req.body.email).set({
              email:req.body.email,
              password:req.body.password,
              name:req.body.name,
              gender:req.body.gender,
              course:req.body.course,
              semester:req.body.semester,
            })
            await db.collection('marks').doc(req.body.email).set(generateMarks(email,semester))
            

            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(error)
                res.status(200).json({auth:false,error:"Database Error, Please try again"});
            });
            
            res.status(200).json({auth:true,id:token});

        }
        catch(err){
            console.log("Error is"+err)
            res.status(200).json({auth:false,error:"User already exists"});
        }
    }
}
