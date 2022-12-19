import express from 'express'
import meetingControllers from '@controllers/v1/meeting'
import { authorizeAdmin, isAuthenticated } from 'src/middleware/auth'

const router = express.Router()

/**
 * Get all Meetings
 */
router.get('/', meetingControllers.getAllMeeting)

/**
 * Get meeting
 */
router.get('/:id', meetingControllers.getMeeting)

/**
 * Create meeting
 */
router.post('/', meetingControllers.createMeeting)

/**
 * delete meeting
 */
router.delete('/:id', isAuthenticated, authorizeAdmin, meetingControllers.deleteMeeting)

export default router
