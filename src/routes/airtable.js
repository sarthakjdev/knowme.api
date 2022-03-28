import express from 'express'

// contollers for organisation route:
import controller from '../controllers/airtableController.js'

const router = express.Router() // creating router

/// setting up further route for basic route

// get, update and delete teams
// get, update and delete sponsors
// get, update and delete speakers and judges

router.get('/team', controller.getTeam)
router.post('/team', controller.addTeamMember)

export default router
