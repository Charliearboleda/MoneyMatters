const express = require('express')
const app = express()
const cors = require('cors')



app.use(express.json())
app.use(cors())
app.set(PORT, (process.env.PORT || 3000))
app.use('/auth', require('./routes/Auth'))

app.use("/dashboard", require("./routes/Dashboard"))


app.listen(3000, ()=>{
    console.log("Working in port ")
})
