import express from 'express'
import twitterController from '@controllers/v1/twitter'
import { authorizeAdmin, isAuthenticated } from 'src/middleware/auth'

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
router.post('/', isAuthenticated, authorizeAdmin, twitterController.addTweet)

/**
 * delete tweet
 */
router.delete('/', isAuthenticated, authorizeAdmin, twitterController.deleteTweet)

export default router
