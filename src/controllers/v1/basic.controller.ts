import { Request, Response } from 'express'
import messages from '@constants/messages'

export default class BasicController {
    /**
     *  Get Basic response
     */
    static async getBasic(req: Request, res:Response) {
        try {
            return res.status(200).send(messages.basic)
        } catch (error) {
            return res.status(500).send(messages.serverError)
        }
    }
}
