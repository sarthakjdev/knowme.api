import { Request, Response } from 'express'
import messages from '@constants/messages'
import ExperienceFactory from '@factory/experienceFactory'

export default class ExperienceController {
    /**
     * Get Experience
     * @static
     * @memberof ExperienceController
     */
    static async getExperience(req: Request, res: Response) {
        try {
            const { id } = req.params
            if (!id) return res.status(400).send(messages.badReq)

            const experience = await ExperienceFactory.getExperience(Number(id))
            if (!experience) return res.status(400).send(messages.notFound)

            return res.status(200).send(experience)
        } catch (error) {
            return res.status(500).send(messages.serverError)
        }
    }

    /**
     * Get Experience
     * @static
     * @memberof ExperienceController
     */
    static async getAllExperience(req: Request, res: Response) {
        try {
            const experiences = await ExperienceFactory.getAllExperience()
            if (!experiences) return res.status(400).send(messages.notFound)

            return res.status(200).send(experiences)

            return res.status(200).send(messages.basic)
        } catch (error) {
            return res.status(500).send(messages.serverError)
        }
    }

    /**
     * Update experience
     * @static
     * @memberof ExperienceController
     */
    static async updateExperience(req: Request, res: Response) {
        try {
            return res.status(200).send(messages.basic)
        } catch (error) {
            return res.status(500).send(messages.serverError)
        }
    }

    /**
     * Add experience
     * @static
     * @memberof ExperienceController
     */
    static async addExperience(req: Request, res: Response) {
        try {
            return res.status(200).send(messages.basic)
        } catch (error) {
            return res.status(500).send(messages.serverError)
        }
    }

    /**
     * Delete an experience
     * @static
     * @memberof ExperienceController
     */
    static async deleteExperience(req: Request, res: Response) {
        try {
            return res.status(200).send(messages.basic)
        } catch (error) {
            return res.status(500).send(messages.serverError)
        }
    }
}
