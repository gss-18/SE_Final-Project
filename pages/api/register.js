import auth from '../../helper/fireauth'
import db from '../../helper/firedb'
import axios from 'axios'

export default  async (req, res) => {


    if(req.method === 'POST'){
        var token = ''
        try{
            console.log("Got request for ",req.body)
            const {email, password, name} = req.body
            console.log(email, password, name)
            await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDF2c-J_X4jB-5fXVCFmt10sAXeRYzYtEA', {
                email: email,
                password: password,
                returnSecureToken: true
            })
            .catch(err => {
                console.log(err)
                res.status(500).json({
                    message: err.message
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

            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(error)
                res.status(200).json(error);
            });
            
            res.status(200).json({auth:true,id:token});

        }
        catch(err){
            console.log("Error is"+err)
            res.status(400).json("User already exists");
        }
    }
}
