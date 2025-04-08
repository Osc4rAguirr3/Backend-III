import 'dotenv/config'
import express from "express"
import mongoose from "mongoose"
import mocksRouter from "./routes/mocks.router.js"

const app = express()
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.DBPATH)
        console.log("Conectado a MongoDB")
    } catch (error) {
        console.log(error)
        process.exit()
    }
}

connectToMongoDB()

app.use("/api/mocks", mocksRouter)

app.listen(PORT, () => {
    console.log(`Escuchando el puerto ${PORT}`)
})