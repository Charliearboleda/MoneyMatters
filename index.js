const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT
const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus:200
}
app.use(cors(corsOptions))
require('dotenv').config()

app.use(express.json())


app.use('/auth', require('./routes/Auth'))

app.use("/dashboard", require("./routes/Dashboard"))


app.listen(PORT, ()=>{
    console.log("Working in port ")
})
