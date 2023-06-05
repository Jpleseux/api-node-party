//values definition
const express = require("express")
const app =  express();
const mongoose = require("mongoose")

const cors = require("cors")

const port = 3000

//middlewers
app.use(cors())
app.unsubscribe(express.json())

//db conection

const conection = require("./db/connection")
conection();

//routes
const routes = require("./routes/routes")

app.use("/api", routes);


app.listen(port, ()=>{
    console.log(`Server listening is port: ${port}`)
})
