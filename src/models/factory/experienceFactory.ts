import prisma from "@lib/prisma";
import { Experience } from "@prisma/client";

export default class ExperienceFactory {

    /**
     * Add Experience
     * @static
     * @memberof ExperienceFactory
     */
    static async addExperience(expData: Experience) {
        const experience = await prisma.blogs.create({
            data: {
                ...expData
            }
        })

        return experience
    }

    /**
     * Get Experience
     * @static
     * @memberof ExperienceFactory
     */
    static async getExperience(id: number): Promise<Experience> {
        const experience = await prisma.experience.findFirst({
            where: {
                id: id
            }
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
    static async deleteExperience(id: number) {
        await prisma.experience.delete({
            where: {
                id: id
            }
        })
    }

}