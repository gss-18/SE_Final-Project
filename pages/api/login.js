import auth from '../../helper/fireauth'
import db from '../../helper/firedb'
import axios from 'axios'


export default  async (req, res) => {
    if(req.method === 'POST'){
        try{
            const {email, password} = req.body
            console.log("Got request for ",req.body.email)
            const entries = await db.collection('users').where("email", "==", req.body.email).get();
            const entriesData = entries.docs.map(entry => ({
            ...entry.data()
          }));
          if(entriesData.length >0){
              await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDF2c-J_X4jB-5fXVCFmt10sAXeRYzYtEA',{email:email,password:password,returnSecureToken:true})
              .then(response=>{
                res.status(200).json({idToken:response.data.idToken});
              }).catch((error) => {
                res.status(200).json({error:"Wrong Password"});
              });
          }
          else{
              res.status(200).json({error:"Username does not exist. Please signup or contact the administrator"});
          }
        }
        catch(err){
            console.log("Error is"+err)
            res.status(400).json(err);
        }
    }
}