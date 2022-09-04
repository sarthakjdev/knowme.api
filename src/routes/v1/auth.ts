import express from 'express'
import AuthController from '@controllers/v1/auth'

const router = express.Router()

/**
 * signup
 */
router.post('/signup', AuthController.signUp)

/**
 * signin
 */
router.post('/signin', AuthController.signIn)

export default router
