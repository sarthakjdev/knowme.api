import jwt, { JwtPayload } from 'jsonwebtoken'
import config from '@configs/config'
import { Request } from 'express'
import UserFactory from '@factory/userFactory'
import { Users } from '@prisma/client'
import { DecodedPayload } from 'src/interfaces/decodedPayload'

export async function generateJwt(data: object, secretKey: string): Promise<string> {
    const token = jwt.sign(data, secretKey, { expiresIn: '30d' })

    return token
}

export async function generateRefreshToken(data: object, secretKey: string): Promise<string> {
    const refreshToken = jwt.sign(data, secretKey, { expiresIn: '30d' })

    return refreshToken
}

export async function verifyToken(token: string, secretKey: string): Promise<string | JwtPayload> {
    const verified = jwt.verify(token, secretKey)

    return verified
}

export default async function retrieveUser(req: Request): Promise<Users> {
    const token = req.headers?.authorization?.split(' ')[1]

    const decodedPayload = await verifyToken(token, config.JWT_SECRET_KEY)

    const { email } = decodedPayload as DecodedPayload

    const dbUser = await UserFactory.getUser(email)

    return dbUser
}
