import prisma from '@lib/prisma'
import { Projects } from '@prisma/client'

export default class ProjectFactory {
    /**
     * Add Project
     * @static
     * @memberof ProjectFactory
     */
    static async addProject(projectData: Projects): Promise<Projects> {
        const project = await prisma.projects.create({
            data: {
                ...projectData,
            },
        })

        return project
    }

    /**
     * Get Project
     * @static
     * @memberof ProjectFactory
     */
    static async getProject(id: number): Promise<Projects> {
        const project = await prisma.projects.findFirst({
            where: {
                id,
            },
        })

        return project
    }

    /**
    * Get all Project
    * @static
    * @memberof ProjectFactory
    */
    static async getAllProject(): Promise<Projects[]> {
        const projects = await prisma.projects.findMany()

        return projects
    }

    /**
     * Delete Project
     * @static
     * @memberof ProjectFactory
     */
    static async deleteProject(id: number): Promise<void> {
        await prisma.projects.delete({
            where: {
                id,
            },
        })
    }
}
