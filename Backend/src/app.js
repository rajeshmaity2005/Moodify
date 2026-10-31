const express = require("express")
const cookieParser = require("cookie-parser")
const cors = require("cors")


const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: "https://jazzy-mermaid-c9f73c.netlify.app",
    credentials: true,
    // secure: true, 
    // sameSite: "none"
}))

/**
 * Routes
 */
const authRoutes = require('./routes/auth.route')
const songRoutes = require('./routes/song.routes')


app.use("/api/auth", authRoutes)
app.use("/api/songs", songRoutes)




module.exports = app