import { Webhook } from './controller/webhook.js'
import express from 'express'

export const Router = () => {
    const router = express.Router()
    router.post("/tray/webhook", Webhook)
    return router
}