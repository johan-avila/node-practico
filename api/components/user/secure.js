const { check } = require("../../../auth")

module.exports = function checkAuth(action) {
    function middleware(req, res, next) {
        switch (action) {
            case "update":
                const owner = req.body.id;
                check.own(req, owner)
                break
            default:
                next()
        }
    }
    return middleware
}