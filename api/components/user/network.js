const express = require("express");

const router = express.Router()

router.get("/",(req, res)=>{
    res.send("funciona mi pendejo")
})


module.exports= router