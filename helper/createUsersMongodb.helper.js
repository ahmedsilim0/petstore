const UsersMongoDB = require('../models/mongodb.model/Users.mongodb')


const user1 = {
    user_name:"ahmed",
    user_email:"ahmedsamir@gmail.com",
    user_phone:"+2011507551",
    user_password:"user1"
}
const user2 = {
    user_name:"samir",
    user_email:"samirsilim@gmail.com",
    user_phone:"+201001545508",
    user_password:"user2"
}
const user3 = {
    user_name:"ahmed11",
    user_email:"samirsilim@gmail.com",
    user_phone:"+201001545508",
    user_password:"user3"
}
const user4 = {
    user_name:"samir11",
    user_email:"samirsilim@gmail.com",
    user_phone:"+201001545508",
    user_password:"user4"
}

const insertUsersIntoMongoDB = async()=>{
    UsersMongoDB.collection.insertMany([user1 ,user2 ,user3 ,user4 ])
}
module.exports = {
    insertUsersIntoMongoDB
}