import express from 'express'
import projectController from '@controllers/v1/projects'
import { authorizeAdmin, isAuthenticated } from 'src/middleware/auth'

const router = express.Router()

/**
 * get project
 */
router.get('/', projectController.getProject)

/**
 * get all projects
 */
router.get('/', isAuthenticated, authorizeAdmin, projectController.getProject)

/**
 * Add project
 */
router.post('/', isAuthenticated, authorizeAdmin, projectController.addProject)

/**
 * Update project
 */
router.put('/update', isAuthenticated, authorizeAdmin, projectController.updateProject)

/**
 * Delete a project
 */
router.delete('/', isAuthenticated, authorizeAdmin, projectController.deleteProject)

export default router
