const router = require('express').Router()
const data = require('../db')
const bcrypt = require('bcrypt')
const jwtGenerator = require("../utility/jwtGenerator")
const validInfo = require("../middleware/validinfo")
const authorization = require("../middleware/authorization")

router.post("/register", validInfo, async (req, res) =>{
    try {
        const {name, email, password, account_balance} = req.body
        const user = await data.query("SELECT * FROM users WHERE user_email = $1", [
            email
        ])
        if(user.rows.length !== 0){
            return res.status(401).send("User Already Exist")
        }

    const saltRound = 10
    const salt = await bcrypt.genSalt(saltRound)
    const bcryptPassword = await bcrypt.hash(password, salt)

    const newUser = await data.query("INSERT INTO users (user_name, user_email, user_password, account_balance) VALUES ($1, $2, $3, $4) RETURNING *",[name, email, bcryptPassword, account_balance])


    const token = jwtGenerator(newUser.rows[0].user_id)
    res.json({ token })

    } catch (err) {
        console.error(err.message)
        res.status(500).send("server error")
    }
})

router.post("/login",validInfo, async(req, res)=> {
    try {
        const {email, password} = req.body
        const user = await data.query("SELECT * FROM users WHERE user_email = $1", [
            email
        ])
        if(user.rows.length === 0){
        return  res.status(401).json("Email or Password is inCorrect")
        }

        const validPassword = await bcrypt.compare(password, user.rows[0].user_password)
        if(!validPassword ){
            return res.status(401).json("email or password is incorrect")
        }
        const token = jwtGenerator(user.rows[0].user_id)
        res.json({ token })
    } catch (err) {
        console.error(err.message)
        res.status(500).send("server error")
    }
})

router.get("/is-verify", authorization, async(req, res)=> {
    try {
        res.json(true)
    } catch (err) {
        console.error(err.message)
        res.status(500).send("server error")
    }
})

module.exports = router