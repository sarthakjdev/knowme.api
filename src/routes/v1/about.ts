import express from 'express'
import aboutContoller from '@controllers/v1/about'

const router = express.Router()

router.get('/', aboutContoller.getAbout)
router.put('/update', aboutContoller.updateAbout)

export default router
