const Data = require("pg").Data

const Data = new Data({
    user: "postgres",
    password:"test1234567",
    host:"localhost",
    port:'5432',
    database:'moneymatters'
})

module.export = Data
