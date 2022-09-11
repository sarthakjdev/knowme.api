import { twitterAxiosClient } from '@utils/axiosClient'
import configs from '@configs/config'

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
        const profile = await this.getMyProfile()
        const tweets = await Twitter.axiosClient.get('/tweets?ids=1556000785141342208')

        return tweets.data
    }

    /**
     * get tweet by id
     * @param {string} id
     * @returns
     */
    public async getTweetById(id: string) {
        const tweet = await Twitter.axiosClient.get(`/tweets/${id}`)

        return tweet.data.data
    }

    /**
     * get my profile
     * @returns
     */
    public async getMyProfile() {
        const filedsToAdd = {
            'user.fields': [
                'created_at',
                'description',
                'entities',
                'id',
                'location',
                'name',
                'pinned_tweet_id',
                'profile_image_url',
                'protected',
                'public_metrics',
                'url',
                'username',
                'verified',
                'withheld',
            ],
            'tweet.fields': [
                'attachments',
                'author_id',
                'conversation_id',
                'created_at',
                'id',
                'source',
                'text',
            ],
        }
        let userFields: string
        let tweetFields: string
        // eslint-disable-next-line array-callback-return
        filedsToAdd['user.fields'].map((field) => {
            userFields += `${field},`
        })

        // eslint-disable-next-line array-callback-return
        filedsToAdd['tweet.fields'].map((field) => {
            tweetFields += field
        })
        const profile = await Twitter.axiosClient.get(`/users/by/username/:${configs.TWITTER_USERNAME}`)

        return profile.data.console.errors
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
