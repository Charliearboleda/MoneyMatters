const Data = require("pg").Pool

const data = new Data({
    // user:"postgres",
    // password:"test123456",
    // host:"localhost",
    // port:5432,
    // database:"moneymatters"
    connectionString: process.env.DATABASE_URL || "postgresql://localhost:5432/moneymatters"
})

module.exports = data
