const router = require("express").Router()
const data = require("../db")
const authorization = require("../middleware/authorization")
require('dotenv').config()

router.get("/", authorization, async(req,res) => {
    try {

        const user = await data.query("SELECT * FROM users WHERE user_id = $1", [req.user])

        res.json(user.rows[0])



    } catch (err) {
    console.error(err.messsage)
    res.status(500).json("Server Error")
    }
})



module.exports = router
