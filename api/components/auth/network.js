const express = require("express");
const response = require("../../../network/response")

const controller  = require("./index")

const router = express.Router()

router.post("/login",(req, res)=>{ 
    const {username, password} = req.body
    controller.login(username, password)
        .then(data =>{
            response.succes(req,res, data, 200)
        })
        .catch(err => {
            response.error(req,res,"Error", 400)
        })
})

module.exports= router