const express = require ("express")
const app = express()
const DataRouter = require("./Routes/data")

// app.get("/home", function (req,res) {

//     res.send("Home")
// })

app.use("/api",DataRouter)

app.listen(process.env.PORT||8080,function () {
    console.log('Application is Running')
})
