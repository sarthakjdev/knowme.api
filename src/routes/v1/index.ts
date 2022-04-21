import express from 'express'
import experienceRoutes from '@routes/v1/experienceRoute'
import aboutRoutes from '@routes/v1/aboutRoute'
import projectRoutes from '@routes/v1/projectsRoute'
import twitterRoutes from '@routes/v1/twitterRoute'
import blogRoutes from '@routes/v1/blogsRoute'

const router = express.Router()

router.use('/projects', projectRoutes)
router.use('/about', aboutRoutes)
router.use('/experience', experienceRoutes)
router.use('/twitter', twitterRoutes)
router.use('/blogs', blogRoutes)

export default router
