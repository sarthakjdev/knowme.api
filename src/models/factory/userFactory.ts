import prisma from '@lib/prisma'
import { Users } from '@prisma/client'

export default class UserFactory {
    /**
     * get user
     * @static
     * @memberof UserFactory
     */
    static async getUser(email: string): Promise<Users> {
        const user = await prisma.users.findFirst({
            where: {
                email,
            },
        })

        return user
    }

    /**
     * create user
     * @static
     * @memberof UserFactory
     */
    static async createUser(userData): Promise<Users> {
        const user = await prisma.users.create({
            data: {
                ...userData,
            },
        })

        return user
    }

    /**
     * Update auth token
     * @static
     * @memberof UserFactory
     */
    static async updateAuthToken(user: Users, token: string) {
        const dbUser = await prisma.users.update({
            where: {
                email: user.email,
            },
            data: {
                authToken: token,
            },
        })

        return dbUser
    }
}
