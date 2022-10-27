const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_DB_URI).then(()=>{
    console.log('MongoDB Connection ok!')
}).catch(()=>{
    console.log('Falied to Connect MongoDB')
})