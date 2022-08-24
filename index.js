import { Express } from "express";
import cors from "cors"

const app = express()
app.use(cors())
app.use(express.json())

const PORT = 4040

app.get('/', (req, res)=> {res.send("my api 🐮")})

app.listen(PORT, () => {
    console.log(`Listenin on PORT" ${PORT}`)
})