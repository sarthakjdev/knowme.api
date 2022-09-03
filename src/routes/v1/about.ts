import express from 'express'
import aboutContoller from '@controllers/v1/about'
import { authorizeAdmin, isAuthenticated } from 'src/middleware/auth'

const router = express.Router()


/**
 * to get about
 */
router.get('/', aboutContoller.getAbout)
/**
 * to update about
 */
router.put('/', isAuthenticated, authorizeAdmin, aboutContoller.updateAbout)

/**
 * to update email
 */
router.put('/updateEmail ', isAuthenticated, authorizeAdmin, aboutContoller.updateEmail)

/**
 * to update phone
 */
router.put('/updatePhone', isAuthenticated, authorizeAdmin, aboutContoller.updatePhone)

/**
 * to update twitter
 */
router.put('/updateTwitter', isAuthenticated, authorizeAdmin, aboutContoller.updateTwitter)

/**
 * to update github
 */
router.put('/updateGithub', isAuthenticated, authorizeAdmin, aboutContoller.updateGithub)

/**
 * to update linkedin
 */
router.put('/updateLinkedin', isAuthenticated, authorizeAdmin, aboutContoller.updateLinkedin)

/**
 * to update socials
 */
router.put('/updateSocials', isAuthenticated, authorizeAdmin, aboutContoller.updateSocials)


export default router
