const router = require('express').Router()
const data = require('../db')
const bcrypt = require('bcrypt')
const jwtGenerator = require("../utility/jwtGenerator")

router.post("/register", async (req, res) =>{
    try {
        const {name, email, password} = req.body
        const user = await data.query("SELECT * FROM users WHERE user_email = $1", [
            email
        ])
        if(user.rows.length !== 0){
            return res.status(401).send("User Already Exist")
        }

    const saltRound = 10
    const salt = await bcrypt.genSalt(saltRound)
    const bcryptPassword = await bcrypt.hash(password, salt)

    const newUser = await data.query("INSERT INTO users (user_name, user_email, user_password) VALUES ($1, $2, $3) RETURNING *",[name, email, bcryptPassword])


    const token = jwtGenerator(newUser.rows[0].user_id)
    res.json({ token })

    } catch (err) {
        console.error(err.message)
        res.status(500).send("server error")
    }
})



module.exports = router
