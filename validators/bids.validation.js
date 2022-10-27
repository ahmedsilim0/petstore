const Joi = require('joi')
const validator = require('../utils/joiValidator') 

const addBidsValidator = (req,res,next)=>{
    const schema = Joi.object({
        user_id : Joi.string().required(),
        bid_data:Joi.array().items({
            pet_id: Joi.string().required(),
            bid_amount : Joi.number().integer().required(),
            owner_id : Joi.string().required(),
        }),
       
       
    })
    const validateFields = validator.validateFields(req.body , res , schema)
    if(validateFields)  next() 
 
}

module.exports = {addBidsValidator}
