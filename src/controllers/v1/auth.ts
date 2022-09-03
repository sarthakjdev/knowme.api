import { Request, Response } from 'express'
import messages from '@constants/messages'
import { checkPassword, checkRole, generateHash } from '@helpers/password'
import config from '@configs/config'
import { Users } from '@prisma/client'
import jwt from 'jsonwebtoken'
import { generateJwt, generateRefreshToken } from '@helpers/authHelpers'
import UserFactory from '@factory/userFactory'


export default class AuthController {
    /**
     *  Sign up the user
     * @static
     * @memberof AuthController
     */
    static async signUp(req: Request, res: Response) {
        try {
            const dbUser = await UserFactory.getUser(req.body.email)
            if (dbUser) return res.status(409).send('user already exists')

            const userData: Users = { ...req.body }
            const hashedPassword = await generateHash(userData.password)
            const token = await generateJwt(
                { type: userData.type, email: userData.email },
                config.JWT_SECRET_KEY,
            )

            userData.password = hashedPassword
            userData.authToken = token

            return res.status(201).json({
                token,
                message: messages.signup_success,
            })
        } catch (err) {
            return res.status(500).send(messages.serverError)
        }
    }

    /**
     * logging in user
     * @static
     * @memberof AuthController
     */
    static async signIn(req: Request, res: Response) {
        try {
            const { email, userType, password } = req.body
            const dbUser = await UserFactory.getUser(email)
            if (!dbUser) return res.status(404).send(messages.notFound)

            const isAuthenticated = await checkPassword(
                password,
                dbUser.password,
            )
            const verifiedRole = await checkRole(dbUser, userType)
            if (!isAuthenticated || !verifiedRole) return res.status(404).send('Invalid Username/password')

            const token = await generateJwt(
                { user_type: dbUser.type, email: dbUser.email },
                config.JWT_SECRET_KEY,
            )


            const updatedUser = await UserFactory.updateAuthToken(
                dbUser,
                token,
            )

            return res.status(200).json({
                token,
                user: updatedUser,
                message: messages.login_success,
            })
        } catch (error) {
            return res.status(500).send(messages.serverError)
        }
    }
}