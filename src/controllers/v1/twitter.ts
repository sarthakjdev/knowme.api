import { Request, Response } from "express";
import messages from "@constants/messages";
import { twitterAxiosClient } from "@utils/axiosClient";
import config from "@configs/config";
export default class TwitterController {
    /**
     *  Get Tweets
     * @static
     * @memberof TwitterController
     */
    static async getTweets(req: Request, res: Response) {
        try {
            const twitterResponse = await twitterAxiosClient(
                `/users/${config.TWITTER_USER_ID}/tweets`
            );
            return res.status(200).json(twitterResponse.data.data);
        } catch (error) {
            console.log("error ", error);
            return res.status(500).send(messages.serverError);
        }
    }

    /**
     *  Get Tweet By Id
     * @static
     * @memberof TwitterController
     */
    static async getTweetById(req: Request, res: Response) {
        try {
            const { id } = req.query;
            const { data } = await twitterAxiosClient.get(`/tweets/${id}`);

            return res.status(200).json(data);
        } catch (error) {
            return res.status(500).send(messages.serverError);
        }
    }

    /**
     *  Delete Tweet
     * @static
     * @memberof TwitterController
     */
    static async deleteTweet(req: Request, res: Response) {
        try {
            const { id } = req.query;

            const { data } = await twitterAxiosClient.delete(`/tweets/${id}`);
            return res.status(200).send(messages.basic);
        } catch (error) {
            return res.status(500).send(messages.serverError);
        }
    }

    /**
     *  Add Tweet
     * @static
     * @memberof TwitterController
     */
    static async addTweet(req: Request, res: Response) {
        try {
            return res.status(200).send(messages.basic);
        } catch (error) {
            return res.status(500).send(messages.serverError);
        }
    }
}
