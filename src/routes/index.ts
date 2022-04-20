import express from 'express'
import v1Routes from '@routes/v1/index'


const router = express.Router()

router.use('/v1', v1Routes)

export default router
