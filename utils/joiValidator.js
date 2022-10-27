const Joi = require('joi')

const validateFields  = (req , res, schema)=>{
    const validation = schema.validate(req)
    if(validation.error){
            const errorReason = validation.error.details[0].message
            return res.status(400).json({
                errorReason
            })
        }
    return true

}
module.exports = {validateFields}