const Bids = require('../models/mongodb.model/Bids.mongodb')
const {
    PetStatus
} = require('../utils/constants')

let prepareBidObject

const bidsService = async (data) => {
    //object for bulkinsert
    //object to already exist to push and check if deleted or no
    console.log(data)
    const petFirstTimeBid = []
    let newBidObject
    const allPetsId = data.bid_data.map(i => i.pet_id)
    console.log(allPetsId)
    try {
        let existPets = await Bids.find({
            pet_id: {
                $in: allPetsId
            }
        }, 'pet_id').lean()
        existPets = existPets.map(i => i.pet_id)
        console.log('exist:', existPets)
        //prepare object for both exist and not exist on the db
        for (let bid of data.bid_data) {
            if (existPets.includes(bid.pet_id)) {
                await Bids.findOneAndUpdate({
                    pet_id: bid.pet_id
                }, {
                    $push: {
                        bidders: {
                            bidder_id: data.user_id,
                            bidder_amount: bid.bid_amount
                        }
                    }
                })
            } else {
                const checkIndexPosIfExist = petFirstTimeBid.findIndex(i => i.pet_id == bid.pet_id)
                if (checkIndexPosIfExist == -1) {
                    newBidObject = {
                        pet_id: bid.pet_id,
                        owner_id: bid.owner_id,
                        status: PetStatus.ONBIDDING,
                        bidders: [{
                            bidder_id: data.user_id,
                            bidder_amount: bid.bid_amount
                        }]
                    }
                    petFirstTimeBid.push(newBidObject)
                } else {
                    petFirstTimeBid[checkIndexPosIfExist].bidders.push({
                        bidder_id: data.user_id,
                        bidder_amount: bid.bid_amount
                    })
                }

            }

        }
        console.log(petFirstTimeBid)
        if (petFirstTimeBid.length > 0) await Bids.insertMany(petFirstTimeBid)
        return true
    } catch (error) {
        console.log(error)
        return false
    }
}
module.exports = {
    bidsService
}