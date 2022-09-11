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

            const experience = await ExperienceFactory.getExperience(id)
            if (!experience) return res.status(400).send(messages.notFound)

            return res.status(200).json(experience)
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

            return res.status(200).json(experiences)
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
            const { id } = req.params
            if (!id) return res.status(400).send(messages.badReq)

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
            const experienceData = req.body

            if (!experienceData.title || !experienceData.description || !experienceData.tenure) return res.status(400).send(messages.badReq)

            const experience = await ExperienceFactory.addExperience(experienceData)

            return res.status(200).json(experience)
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
            const { id } = req.params
            if (!id) return res.status(400).send(messages.badReq)

            await ExperienceFactory.deleteExperience(id)

            return res.status(200).send(messages.success)
        } catch (error) {
            return res.status(500).send(messages.serverError)
        }
    }
}
