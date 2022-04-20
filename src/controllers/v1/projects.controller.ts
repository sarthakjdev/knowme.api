import { Request, Response } from 'express'
import messages from '@constants/messages'

export default class ProjectController {
    /**
     *  Get Projects
     */
     static async getProjects(req: Request, res:Response) {
        try {
            return res.status(200).send(messages.basic)
        } catch (error) {
            return res.status(500).send(messages.serverError)
        }
    }

    /**
     *  Update Project
     */
         static async updateProject(req: Request, res:Response) {
            try {
                return res.status(200).send(messages.basic)
            } catch (error) {
                return res.status(500).send(messages.serverError)
            }
        }

    /**
     *  Add Project
     */
    static async addProject(req: Request, res:Response) {
        try {
            return res.status(200).send(messages.basic)
        } catch (error) {
            return res.status(500).send(messages.serverError)
        }
    }

    /**
     *  Delete Project
     */
         static async deleteProject(req: Request, res:Response) {
            try {
                return res.status(200).send(messages.basic)
            } catch (error) {
                return res.status(500).send(messages.serverError)
            }
        }
}
