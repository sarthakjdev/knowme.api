import express from 'express'
import experienceRoutes from '@routes/v1/experience.route'
import aboutRoutes from '@routes/v1/about.route'
import projectRoutes from '@routes/v1/projects.route'
import twitterRoutes from '@routes/v1/twitter.route'
import blogRoutes from '@routes/v1/blogs.route'

const router = express.Router()


router.use('/projects', projectRoutes)
router.use('/about', aboutRoutes)
router.use('/experience', experienceRoutes)
router.use('/twitter', twitterRoutes)
router.use('/blogs', blogRoutes)

export default router
