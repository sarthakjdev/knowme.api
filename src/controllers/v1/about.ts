import { Request, Response } from 'express'
import messages from '@constants/messages'

export default class AboutContoller {
    /**
     *  Get About
     */
    static async getAbout(req: Request, res:Response) {
        try {
            return res.status(200).send(messages.basic)
        } catch (error) {
            return res.status(500).send(messages.serverError)
        }
    }

    /**
     *  Update About
     */
    static async updateAbout(req: Request, res:Response) {
        try {
            return res.status(200).send(messages.basic)
        } catch (error) {
            return res.status(500).send(messages.serverError)
        }
    }
}
