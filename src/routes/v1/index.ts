import express from 'express'
import experienceRoutes from '@routes/v1/experience'
import aboutRoutes from '@routes/v1/about'
import projectRoutes from '@routes/v1/projects'
import twitterRoutes from '@routes/v1/twitter'
import blogRoutes from '@routes/v1/blogs'
import authRoutes from '@routes/v1/auth'

const router = express.Router()

router.use('/projects', projectRoutes)
router.use('/about', aboutRoutes)
router.use('/experience', experienceRoutes)
router.use('/twitter', twitterRoutes)
router.use('/blogs', blogRoutes)
router.use('/auth', authRoutes)

export default router
