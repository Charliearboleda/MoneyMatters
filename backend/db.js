const Data = require("pg").Pool

const data = new Data({
    user:"postgres",
    password:"test123456",
    host:"localhost",
    port:5432,
    database:"moneymatters"
})

module.exports = data
