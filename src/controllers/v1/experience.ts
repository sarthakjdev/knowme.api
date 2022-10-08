import { Request, Response } from 'express'
import messages from '@constants/messages'
import ExperienceFactory from '@factory/experienceFactory'
import { Experience } from '@prisma/client'

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
            const { id, updateExperienceData } = req.params

            let dbExperience = await ExperienceFactory.getExperience(id)

            dbExperience = updateExperienceData as any

            const experience = await ExperienceFactory.updateExperience(dbExperience)

            return res.status(200).send(experience)
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
            const experiencesData: Experience[] = req.body

            let experiences: Experience[]
            experiencesData.map(async (exp) => {
                const dbExperience = await ExperienceFactory.addExperience(exp)
                experiences.push(dbExperience)
            })

            return res.status(200).json(experiences)
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
