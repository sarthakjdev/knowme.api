import { Request, Response } from 'express'
import messages from '@constants/messages'

export default class TwitterController {
    /**
     *  Get Tweets
     */
     static async getTweets(req: Request, res:Response) {
        try {
            return res.status(200).send(messages.basic)
        } catch (error) {
            return res.status(500).send(messages.serverError)
        }
    }

    /**
     *  Get Tweet By Id
     */
         static async getTweetById(req: Request, res:Response) {
            try {
                return res.status(200).send(messages.basic)
            } catch (error) {
                return res.status(500).send(messages.serverError)
            }
        }

    /**
     *  Delete Tweet
     */
         static async deleteTweet(req: Request, res:Response) {
            try {
                return res.status(200).send(messages.basic)
            } catch (error) {
                return res.status(500).send(messages.serverError)
            }
        }

    /**
     *  Add Tweet
     */
    static async addTweet(req: Request, res:Response) {
        try {
            return res.status(200).send(messages.basic)
        } catch (error) {
            return res.status(500).send(messages.serverError)
        }
    }
}
