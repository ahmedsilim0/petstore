const {bidsService} = require ('../services/bid.service')
const {getAllBidsByOwner} = require('../services/getBids.service')

const pickPets = async(req,res)=>{
        const result = await bidsService(req.body)
        if(!result) return res.status(400).json({"message":"something went wrong try again!"})
        return res.status(200).json({
            "message" : "nice bid!"
        })
}

const getBidsController = async(req,res)=>{
    if(Object.keys(req.query).length ==0) return res.status(400).json({"message":"no pet owner"})
    const result = await getAllBidsByOwner(req.query)
    console.log(result)
    if(!result) return res.status(400).json({"message":"something went wrong try again!"})
    return res.status(200).json({
        result
    })
}
module.exports = {pickPets , getBidsController}