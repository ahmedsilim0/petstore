const Users = require('../models/mongodb.model/Users.mongodb')

const checkIfUserExistOrNot = async(req,res,next)=>{
    
    let user_id = req.body.user_id
    try{
        await Users.exists({_id:user_id})
    }catch(err){
         return res.status(404).json({
            "message":"user not found"
        })
    }  
    next()
}
module.exports  = {checkIfUserExistOrNot}