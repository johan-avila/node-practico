const express = require("express")

const config = require("../config.js") 
const users = require("./components/user/network")

const app = express()

//Router
app.use("/api/users", users)


//listen api

app.listen(config.api.port, ()=>{
    console.log(`listen on http://localhost:${config.api.port}`);
})