import express from "express"
import { Router } from "./route.js"
import morgan from "morgan"
import cors from "cors"


const porta = 21001
const app = express()

app.use(cors())

app.use(morgan('dev'))

app.use(express.urlencoded({ extended: false }))

app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        return res.status(400).send({ error: 'Erro no JSON da requisição' })
    }
    next()
})


app.use(Router())


app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`)
})

