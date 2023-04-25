import { Webhook } from './controller/webhook.js'
import { Teste } from './controller/teste.js'

import express from 'express'

export const Router = () => {
    const router = express.Router()
    // router.post("/tray/webhook", Webhook)
    router.post("/tray/webhook", Teste)
    return router
}

