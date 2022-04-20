import { Request, Response } from 'express'
import messages from '../constants/messages'

export default function ready(req: Request, res: Response) {
    return res.status(200).json(messages.ready)
}
