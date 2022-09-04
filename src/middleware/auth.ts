import jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express'
import messages from '@constants/messages'
import { user_type } from '@prisma/client'
import UserFactory from '@factory/userFactory'
import { DecodedPayload } from 'src/interfaces/decodedPayload'
import config from '../configs/config'

/**
 * Is Authenticated
 */
export async function isAuthenticated(req: Request, res: Response, next: NextFunction): Promise<void | Response> {
    try {
        const token = req.headers?.authorization?.split(' ')[1]

        if (!token) return res.status(401).send(messages.invalidToken)
        const decoded = jwt.verify(token, config.JWT_SECRET_KEY)

        const { email } = decoded as DecodedPayload
        const dbUser = await UserFactory.getUser(email)

        if (dbUser) return next()

        return res.status(400).send(messages.unauthorized_req)
    } catch (error) {
        return res.status(500).send(messages.serverError)
    }
}

/**
 * Authorize user
 */

export async function authorizeAdmin(req: Request, res: Response, next: NextFunction): Promise<void | Response> {
    try {
        const token = req.headers?.authorization?.split(' ')[1]

        const decoded = jwt.verify(token, config.JWT_SECRET_KEY)

        const { email } = decoded as DecodedPayload
        const dbUser = await UserFactory.getUser(email)

        if (dbUser.type === user_type.ADMIN) return next()

        return res.status(400).send(messages.unauthorized_req)
    } catch (error) {
        return res.status(500).send(messages.serverError)
    }
}
