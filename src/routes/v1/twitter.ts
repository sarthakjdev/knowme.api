import express from 'express'
import twitterController from '@controllers/v1/twitter'
import { authorizeAdmin, isAuthenticated } from 'src/middleware/auth'

const router = express.Router()

/**
 * get tweets
 */
router.get('/tweets', twitterController.getTweets)

/**
 * get profile
 */
router.get('/', twitterController.getProfile)

/**
 * get tweet by id
 */
router.get('/:id', twitterController.getTweetById)

/**
 * add a tweet
 */
router.post('/', isAuthenticated, authorizeAdmin, twitterController.addTweet)

/**
 * delete tweet
 */
router.delete('/', isAuthenticated, authorizeAdmin, twitterController.deleteTweet)

export default router
