import express from 'express'
import twitterController from '@controllers/v1/twitter'

const router = express.Router()

/**
 * get all tweets
 */
router.get('/', twitterController.getTweets)

/**
 * get tweet by id
 */
router.get('/:id', twitterController.getTweetById)

/**
 * get profile
 */
router.get('/profile', twitterController.getProfile)

/**
 * add a tweet
 */
router.post('/', twitterController.addTweet)

/**
 * delete tweet
 */
router.delete('/', twitterController.deleteTweet)

export default router
