const express = require("express")
const cookieParser = require("cookie-parser")
const cors = require("cors")


const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: "https://polite-beijinho-e4ef8d.netlify.app",
    credentials: true
}));

/**
 * Routes
 */
const authRoutes = require('./routes/auth.route')
const songRoutes = require('./routes/song.routes')


app.use("/api/auth", authRoutes)
app.use("/api/songs", songRoutes)




module.exports = app