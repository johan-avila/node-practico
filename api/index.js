const express = require("express")
const swaggerUi = require("swagger-ui-express")

const config = require("../config.js") 
const swaggerDocs = require("./swagger.json")

const usersRoutes = require("./components/user/network")
const authRoutes = require("./components/auth/network")

const app = express()

// Middlewares

app.use(express.json())
//Router
app.use("/api/users", usersRoutes)
app.use("/api/auth", authRoutes)

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))

//listen api

app.listen(config.api.port, ()=>{
    console.log(`listen on http://localhost:${config.api.port}`);
})