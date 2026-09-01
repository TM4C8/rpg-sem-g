import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'
import sequelize from './config/database.js'
import router from './routers/index.js'
dotenv.config()

const app = express()
const PORT = process.env.PORT || 4000

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '..', 'public', 'views'))
sequelize.sync({ force: true }).then(() => {
  console.log('Drop and Resync DB')
})

app.use(router)

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
})