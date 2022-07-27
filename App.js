const express = require ("express")
const app = express()
const DataRouter = require("./Routes/data")
const cors = require("cors")

// app.get("/home", function (req,res) {

//     res.send("Home")
// })

app.use(cors())
app.use("/api",DataRouter)

app.listen(process.env.PORT||8080,function () {
    console.log('Application is Running')
})
