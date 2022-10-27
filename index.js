require('custom-env').env()
const express = require('express')
const bodyParser  = require('body-parser')
const app = express()
app.use(bodyParser.json());

require("./startups/mongodb")
require("./startups/routes")(app)
const port = process.env.PORT || 2021

app.listen(port , ()=>{
    console.log(`Petstore run on port ${port}`)
})

