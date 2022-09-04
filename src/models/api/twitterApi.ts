import { twitterAxiosClient } from '@utils/axiosClient'

export default class Twitter {
    /**
     * Singleton instance of the class
     * @static
     * @type {Twitter}
     * @memberof Twitter
     */
    private static tInstance: Twitter = null

    /**
     * AxiosClient for twitter api requests
     * @static
     * @private
     * @memberof Twitter
     */
    private static axiosClient = twitterAxiosClient

    /**
     * reading the instance of the singleton twitter class
     * @static
     * @readonly
     */
    public static get instance(): Twitter {
        if (this.tInstance === null) {
            this.tInstance = new Twitter()
        }

        return this.tInstance
    }

    /**
     * get all tweets
     * @memberof Twitter
     */
    public async getAllTweets() {
        const tweets = await Twitter.axiosClient.post('tweets')

        return tweets
    }

    /**
     * get tweet by id
     * @param {string} id
     * @returns
     */
    public async getTweetById(id: string) {
        const tweet = await Twitter.axiosClient.post(`/tweets/${id}`)

        return tweet
    }

    /**
     * get my profile
     * @returns
     */
    public async getMyProfile() {
        const profile = await Twitter.axiosClient.get('/me')

        return profile
    }

    /**
     * create a tweet
     * @param {object} tweetContent
     * @returns
     */
    public async createTweet(tweetContent) {
        const tweet = await Twitter.axiosClient.post('/tweets', tweetContent)

        return tweet
    }

    /**
     * delete a tweet
     * @param {string} id
     */
    public async deleteTweet(id: string):Promise<void> {
        await Twitter.axiosClient.delete(`/tweets/${id}`)
    }
}
