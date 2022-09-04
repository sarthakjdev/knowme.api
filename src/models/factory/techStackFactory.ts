import prisma from '@lib/prisma'
import { TechStack } from '@prisma/client'

export default class TechStackFactory {
    /**
     * Add TechStack
     * @static
     * @memberof TechStackFactory
     */
    static async addTechStack(techStackData: TechStack): Promise<TechStack> {
        const techStack = await prisma.techStack.create({
            data: {
                ...techStackData,
            },
        })

        return techStack
    }

    /**
     * Get TechStack
     * @static
     * @memberof TechStackFactory
     */
    static async getTechStack(name: string): Promise<TechStack> {
        const techStack = await prisma.techStack.findFirst({
            where: {
                name,
            },
        })

        return techStack
    }

    /**
    * Get all TechStack
    * @static
    * @memberof TechStackFactory
    */
    static async getAllTechStack(): Promise<TechStack[]> {
        const techStacks = await prisma.techStack.findMany()

        return techStacks
    }

    /**
     * Delete TechStack
     * @static
     * @memberof TechStackFactory
     */
    static async deleteTechStack(name: string): Promise<void> {
        await prisma.techStack.delete({
            where: {
                name,
            },
        })
    }
}
