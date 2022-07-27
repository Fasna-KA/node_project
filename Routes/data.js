const express = require ("express")
const datacontroller = require("../Controllers/data")

const DataRouter = express.Router()//we are linking our data.js file with our /api main
DataRouter.route("/details")//creating a route
.get(datacontroller.ApiController)//calling the data.js in Controller folder

module.exports = DataRouter
