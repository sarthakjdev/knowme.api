import { Request, Response } from "express";
import messages from "@constants/messages";

export default class ExperienceController {
    /**
     * Get Experience
     * @static
     * @memberof ExperienceController
     */
    static async getExperience(req: Request, res: Response) {
        try {
            return res.status(200).send(messages.basic);
        } catch (error) {
            return res.status(500).send(messages.serverError);
        }
    }

    /**
     * Update experience
     * @static
     * @memberof ExperienceController
     */
    static async updateExperience(req: Request, res: Response) {
        try {
            return res.status(200).send(messages.basic);
        } catch (error) {
            return res.status(500).send(messages.serverError);
        }
    }

    /**
     * Add experience
     * @static
     * @memberof ExperienceController
     */
    static async addExperience(req: Request, res: Response) {
        try {
            return res.status(200).send(messages.basic);
        } catch (error) {
            return res.status(500).send(messages.serverError);
        }
    }
}
