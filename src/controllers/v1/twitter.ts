import { Request, Response } from 'express'
import messages from '@constants/messages'
import Twitter from '@api/twitterApi'

export default class TwitterController {
    /**
     *  Get Tweets
     * @static
     * @memberof TwitterController
     */
    static async getTweets(req: Request, res: Response) {
        try {
            const tweets = await Twitter.instance.getAllTweets()

            return res.status(200).json(tweets)
        } catch (error) {
            return res.status(500).send(messages.serverError)
        }
    }

    /**
     *  Get Tweet By Id
     * @static
     * @memberof TwitterController
     */
    static async getTweetById(req: Request, res: Response) {
        try {
            const { id } = req.query
            const tweet = await Twitter.instance.getTweetById(id as string)

            return res.status(200).json(tweet)
        } catch (error) {
            return res.status(500).send(messages.serverError)
        }
    }

    /**
     * Delete Tweet
     * @static
     * @memberof TwitterController
     */
    static async deleteTweet(req: Request, res: Response) {
        try {
            const { id } = req.query

            await Twitter.instance.deleteTweet(id as string)

            return res.status(200).send(messages.basic)
        } catch (error) {
            return res.status(500).send(messages.serverError)
        }
    }

    /**
     *  Add Tweet
     * @static
     * @memberof TwitterController
     */
    static async addTweet(req: Request, res: Response) {
        try {
            return res.status(200).send(messages.basic)
        } catch (error) {
            return res.status(500).send(messages.serverError)
        }
    }
}
