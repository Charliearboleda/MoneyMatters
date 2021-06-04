const Data = require("pg").Data

const Data = new Data({
    user: "postgres",
    password:"test1234567",
    host:"localhost",
    database:'moneymatters'
})

module.export = Data
