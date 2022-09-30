import { twitterAxiosClient } from '@utils/axiosClient'
import configs from '@configs/config'

export default class Hashnode {
    /**
     * Singleton instance of the class
     * @static
     * @type {Hashnode}
     * @memberof Hashnode
     */
    private static tInstance: Hashnode = null

    /**
     * AxiosClient for twitter api requests
     * @static
     * @private
     * @memberof Hashnode
     */
    private static axiosClient = twitterAxiosClient

    /**
     * reading the instance of the singleton twitter class
     * @static
     * @readonly
     */
    public static get instance(): Hashnode {
        if (this.tInstance === null) {
            this.tInstance = new Hashnode()
        }

        return this.tInstance
    }

    /**
     * get all blogs
     * @memberof Hashnode
     */
    public async getAllBlogs() {

    }

    /**
     * get tweet by id
     * @param {string} id
     * @returns
     */
    public async getTweetById(id: string) {

    }

    /**
     * get my profile
     * @returns
     */
    public async getMyProfile() {

    }

    /**
     * create a tweet
     * @param {object} tweetContent
     * @returns
     */
    public async createTweet(tweetContent) {

    }

    /**
     * delete a tweet
     * @param {string} id
     */
    public async deleteTweet(id: string):Promise<void> {

    }
}
