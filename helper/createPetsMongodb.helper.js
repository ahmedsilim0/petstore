const PetsMongoDB = require('../models/mongodb.model/Pets.mongodb')


const pet1 = {
    pet_name: "bella",
    pet_type: "cat",
    owner_id: "635803643dd2e3eaae134495",
    status: 2,
    number_of_trials:0
}
const pet2 = {
    pet_name: "Max",
    pet_type: "Dog",
    owner_id: "635803643dd2e3eaae134495",
    status: 2,
    number_of_trials:0
}
const pet3 = {
    pet_name: "Coco",
    pet_type: "Dog",
    owner_id: "635803643dd2e3eaae134495",
    status: 1,
    number_of_trials:0
}

const insertPetsIntoMongoDB = async () => {
    PetsMongoDB.collection.insertMany([pet1, pet2, pet3])
}
module.exports = {
    insertPetsIntoMongoDB
}