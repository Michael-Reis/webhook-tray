import express from "express"
import { Router } from "./route.js"

const porta = 3001
const app = express()

app.use(Router())

app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`)
})

