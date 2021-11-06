import db from '../../helper/firedb'


export default  async (req, res) => {
    try {
        if(req.method === 'GET'){
            const {email} = req.query
            console.log(email)
            const userData = await db.collection('users').where("email", "==", email).get()
            const marksData = await db.collection('marks').where("email", "==", email).get()
            //console.log(data)
            const userDetails = userData.docs.map(entry => ({
                ...entry.data()
              }));
              const markDetails = marksData.docs.map(entry => ({
                ...entry.data()
              }));
            
            res.status(200).json({userDetails, markDetails})
        }
        else{
            if(req.method === 'POST'){
                const {email,semester} = req.body
                await db.collection('marks').doc(req.body.email).set({
                    email:email,
                    semester:semester
                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log(error)
                    res.status(200).json(error);
                });
                res.status(200).json({message:'success'});
        
            }
            else{
                res.status(200).json({message:'error'});
            }
        }
    }
    catch(error){
        console.log(error)
        res.status(200).json(error);
    }
}

