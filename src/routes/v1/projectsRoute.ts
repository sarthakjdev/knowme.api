import express from 'express'
import projectController from '@controllers/v1/projectsController'

const router = express.Router()

router.get('/', projectController.getProjects)
router.post('/', projectController.addProject)
router.put('/update', projectController.updateProject)
router.delete('/', projectController.deleteProject)

export default router
