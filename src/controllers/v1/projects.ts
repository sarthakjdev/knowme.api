import { Request, Response } from 'express'
import messages from '@constants/messages'
import ProjectFactory from '@factory/projectFactory'
import { Projects } from '@prisma/client'

export default class ProjectController {
    /**
     * Get Projects
     * @static
     * @memberof ProjectController
     */
    static async getProject(req: Request, res: Response) {
        try {
            const { id } = req.params
            if (!id) return res.status(400).send(messages.badReq)

            const project = await ProjectFactory.getProject(id)

            return res.status(200).json(project)
        } catch (error) {
            return res.status(500).send(messages.serverError)
        }
    }

    /**
     * Get all projects
     * @static
     * @memberof ProjectController
     */
    static async getAllProjects(req: Request, res: Response) {
        try {
            const projects = await ProjectFactory.getAllProject()

            return res.status(200).json(projects)
        } catch (error) {
            return res.status(500).send(messages.serverError)
        }
    }

    /**
     * Update Project
     * @static
     * @memberof ProjectController
     */
    static async updateProject(req: Request, res: Response) {
        try {
            const { id, updateProjectData } = req.params

            let dbProject = await ProjectFactory.getProject(id)

            dbProject = updateProjectData as any

            const project = await ProjectFactory.updateProject(dbProject)

            return res.status(200).send(project)
        } catch (error) {
            return res.status(500).send(messages.serverError)
        }
    }

    /**
     * Add Project
     * @static
     * @memberof ProjectController
     */
    static async addProject(req: Request, res: Response) {
        try {
            const projecstData: Projects[] = req.body

            let projects: Projects[]

            projecstData.map(async (project) => {
                const dbProject = await ProjectFactory.addProject(project)
                projects.push(dbProject)
            })

            return res.status(200).json(projects)
        } catch (error) {
            return res.status(500).send(messages.serverError)
        }
    }

    /**
     * Delete Project
     * @static
     * @memberof ProjectController
     */
    static async deleteProject(req: Request, res: Response) {
        try {
            const { id } = req.params
            if (!id) return res.status(400).send(messages.badReq)

            await ProjectFactory.deleteProject(id)

            return res.status(200).send(messages.success)
        } catch (error) {
            return res.status(500).send(messages.serverError)
        }
    }
}
