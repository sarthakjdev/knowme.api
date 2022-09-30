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
        const tweets = await Twitter.axiosClient.get(`/users/${configs.TWITTER_USER_ID}/tweets?max_results=100&tweet.fields=attachments,author_id,context_annotations,conversation_id,created_at,entities,geo,id,in_reply_to_user_id,lang,possibly_sensitive,public_metrics,referenced_tweets,reply_settings,source,text,withheld&expansions=attachments.media_keys,attachments.poll_ids,author_id,entities.mentions.username,geo.place_id,in_reply_to_user_id,referenced_tweets.id,referenced_tweets.id.author_id`)

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
        const userFields = 'created_at,description,entities,id,location,name,pinned_tweet_id,profile_image_url,protected,public_metrics,url,username,verified,withheld'
        const tweetFields = 'attachments,author_id,conversation_id,created_at,id,source,text'

        const profile = await Twitter.axiosClient.get(`/users/by/username/${configs.TWITTER_USERNAME}?user.fields=${userFields}&tweet.fields=${tweetFields}`)

        return profile.data.data
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
