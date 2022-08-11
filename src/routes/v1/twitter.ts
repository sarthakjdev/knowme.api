import express from 'express'
import twitterController from '@controllers/v1/twitter'
const router = express.Router()

router.get('/tweets', twitterController.getTweets)
router.get('/tweet', twitterController.getTweetById)
router.post('/', twitterController.addTweet)
router.delete('/', twitterController.deleteTweet)

export default router
