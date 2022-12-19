import express from 'express'
import experienceRouter from '@routes/v1/experience'
import aboutRouter from '@routes/v1/about'
import projectRouter from '@routes/v1/projects'
import twitterRouter from '@routes/v1/twitter'
import blogRouter from '@routes/v1/blogs'
import authRouter from '@routes/v1/auth'
import meetingRouter from '@routes/v1/meeting'
import getAssets from '@controllers/v1/assets'
import { isAuthenticated } from 'src/middleware/auth'

const router = express.Router()

router.get('/assets', isAuthenticated, getAssets)
router.use('/projects', projectRouter)
router.use('/about', aboutRouter)
router.use('/experience', experienceRouter)
router.use('/twitter', twitterRouter)
router.use('/blogs', blogRouter)
router.use('/auth', authRouter)
router.use('/meeting', meetingRouter)

export default router
