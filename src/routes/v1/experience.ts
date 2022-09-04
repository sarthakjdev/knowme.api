import express from 'express'
import experienceController from '@controllers/v1/experience'
import { authorizeAdmin, isAuthenticated } from 'src/middleware/auth'

const router = express.Router()

/**
 * Get Experience
 */
router.get('/:id', experienceController.getExperience)

/**
 * Get all Experiences
 */
router.get('/all', experienceController.getAllExperience)

/**
 * Add Experience
 */
router.post('/', isAuthenticated, authorizeAdmin, experienceController.addExperience)

/**
 * update Experience
 */
router.put('/:id', isAuthenticated, authorizeAdmin, experienceController.updateExperience)

/**
 * delete experience
 */
router.delete('/:id', isAuthenticated, authorizeAdmin, experienceController.deleteExperience)

export default router
