import express from 'express'
import aboutContoller from '@controllers/v1/aboutController'

const router = express.Router()

router.get('/', aboutContoller.getAbout)
router.put('/update', aboutContoller.updateAbout)

export default router
