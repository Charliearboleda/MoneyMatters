const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT


app.use(express.json())
app.use(cors())

app.use('/auth', require('./routes/Auth'))

app.use("/dashboard", require("./routes/Dashboard"))


app.listen(PORT, ()=>{
    console.log("Working in port ")
})
