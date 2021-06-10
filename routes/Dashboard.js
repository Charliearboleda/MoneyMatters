const router = require("express").Router()
const data = require("../db")
const authorization = require("../middleware/authorization")
require('dotenv').config()

router.get("/", authorization, async(req,res) => {
    try {

        const user = await data.query("SELECT user_name FROM users WHERE user_id = $1", [req.user])

        res.json(user.rows[0])
        res.json(user.rows[3])


    } catch (err) {
    console.error(err.messsage)
    res.status(500).json("Server Error")
    }
})


module.exports = router
