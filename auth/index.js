const jwt = require("jsonwebtoken")

let secret = "secret" 

function sign(data){
    return jwt.sign(data, secret, {})
}

module.exports = {
    sign
}