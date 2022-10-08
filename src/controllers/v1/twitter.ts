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
        console.log('req ', req)
        try {
            const tweets = await Twitter.instance.getAllTweets()
            console.log('tweets ', tweets)

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
            const { id } = req.params
            const tweet = await Twitter.instance.getTweetById(id as string)

            return res.status(200).json(tweet)
        } catch (error) {
            return res.status(500).send(messages.serverError)
        }
    }

    /**
     * Get profile
     * @static
     * @memberof TwitterController
     */
    static async getProfile(req: Request, res: Response) {
        try {
            const profile = await Twitter.instance.getMyProfile()

            return res.status(200).json(profile)
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
            const { id } = req.params

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
            const { text } = req.body
            const tweet = await Twitter.instance.createTweet(text)
            console.log('tweet ', tweet.data)

            return res.status(200).json(tweet.data)
        } catch (error) {
            return res.status(500).send(messages.serverError)
        }
    }
}
