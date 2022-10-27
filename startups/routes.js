const express = require('express')
const bidsRoute = require('../routes/bids.route')
const {insertUsersIntoMongoDB}  = require('../helper/createUsersMongodb.helper')
const {insertPetsIntoMongoDB} = require('../helper/createPetsMongodb.helper')

module.exports = (app)=>{
    app.use("/petstore/pets" , bidsRoute)
}
    










// app.use("/insert/users" , async(req,res)=>{
    //     const insert = await insertUsersIntoMongoDB()
    //     res.status(200).json({
    //         insert
    //     })
    // })
    // app.use("/insert/pets" ,async(req,res)=>{
    //     const insert = await insertPetsIntoMongoDB()
    //     res.status(200).json({
    //         insert
    //     })
    // })
    








