const Bids = require('../models/mongodb.model/Bids.mongodb')
const {PetStatus} = require('../utils/constants')
const getAllBidsByOwner = async(owner_id)=>{
    console.log(owner_id)
    return Bids.find(owner_id , {status:PetStatus.ONBIDDING}).select('bidders')
}

module.exports = {getAllBidsByOwner}