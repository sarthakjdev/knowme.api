import express from 'express'
import aboutContoller from '@controllers/v1/about'
import { authorizeAdmin, isAuthenticated } from 'src/middleware/auth'

const router = express.Router()

/**
 * to get about
 */
router.get('/', aboutContoller.getAbout)

/**
 *add about
 */
router.post('/', aboutContoller.getAbout)

/**
 * to update about
 */
router.put('/:toupdate', isAuthenticated, authorizeAdmin, aboutContoller.updateAbout)


export default router
