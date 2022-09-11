import prisma from '@lib/prisma'
import { Experience } from '@prisma/client'

export default class ExperienceFactory {
    /**
     * Add Experience
     * @static
     * @memberof ExperienceFactory
     */
    static async addExperience(expData: Experience) {
        const experience = await prisma.experience.create({
            data: {
                ...expData,
            },
        })

        return experience
    }

    /**
     * Get Experience
     * @static
     * @memberof ExperienceFactory
     */
    static async getExperience(id: string): Promise<Experience> {
        const experience = await prisma.experience.findFirst({
            where: {
                id,
            },
        })

        return experience
    }

    /**
    * Get all Experience
    * @static
    * @memberof ExperienceFactory
    */
    static async getAllExperience() {
        const experience = await prisma.experience.findMany()

        return experience
    }

    /**
     * Delete Experience
     * @static
     * @memberof ExperienceFactory
     */
    static async deleteExperience(id: string) {
        await prisma.experience.delete({
            where: {
                id,
            },
        })
    }
}
