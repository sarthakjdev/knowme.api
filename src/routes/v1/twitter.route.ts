import express from 'express'
import twitterController from '@controllers/v1/twitter.controller'

const router = express.Router()

router.get('/basic', twitterController.getTweets)
router.get('/:id', twitterController.getTweetById)
router.post('/', twitterController.addTweet)
router.delete('/:id', twitterController.deleteTweet)


export default router