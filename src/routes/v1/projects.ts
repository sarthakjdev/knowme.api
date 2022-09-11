import express from 'express'
import projectController from '@controllers/v1/projects'
import { authorizeAdmin, isAuthenticated } from 'src/middleware/auth'

const router = express.Router()

/**
 * get project
 */
router.get('/:id', projectController.getProject)

/**
 * get all projects
 */
router.get('/random', isAuthenticated, authorizeAdmin, projectController.getAllProjects)

/**
 * Add project
 */
router.post('/', isAuthenticated, authorizeAdmin, projectController.addProject)

/**
 * Update project
 */
router.put('/:id', isAuthenticated, authorizeAdmin, projectController.updateProject)

/**
 * Delete a project
 */
router.delete('/:id', isAuthenticated, authorizeAdmin, projectController.deleteProject)

export default router
