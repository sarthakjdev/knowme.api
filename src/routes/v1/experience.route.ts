import express from 'express'
import experienceController from '@controllers/v1/experience.controller'

const router = express.Router()

router.get('/', experienceController.getExperience)
router.post('/', experienceController.addExperience)
router.put('/about', experienceController.updateExperience)

export default router