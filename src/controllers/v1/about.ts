import { Request, Response } from "express";
import messages from "@constants/messages";
import AboutFactory from "src/models/factory/aboutFactory";

export default class AboutContoller {
    /**
     * Get About
     * @static
     * @memberof AboutContoller
     */
    static async getAbout(req: Request, res: Response): Promise<Response> {
        try {
            const about = AboutFactory.getAbout();
            return res.status(200).json(about);
        } catch (error) {
            return res.status(500).send(messages.serverError);
        }
    }

    /**
     * Update About
     * @static
     * @memberof AboutContoller
     */
    static async updateAbout(req: Request, res: Response): Promise<Response> {
        try {
            return res.status(200).send(messages.basic);
        } catch (error) {
            return res.status(500).send(messages.serverError);
        }
    }

    /**
     * Update Email in about
     * @static
     * @memberof AboutController
     */
    static async updateEmail(req: Request, res: Response): Promise<Response> {
        try {
            return res.status(200).send(messages.basic);
        } catch (error) {
            return res.status(500).send(messages.serverError);
        }
    }

    /**
     * Update Phone
     * @static
     * @memberof AboutController
     */
    static async updatePhone(req: Request, res: Response): Promise<Response> {
        try {
            return res.status(200).send(messages.basic);
        } catch (error) {
            return res.status(500).send(messages.serverError);
        }
    }

    /**
     * Update twitter
     * @static
     * @memberof AboutController
     */
    static async updateTwitter(req: Request, res: Response): Promise<Response> {
        try {
            return res.status(200).send(messages.basic);
        } catch (error) {
            return res.status(500).send(messages.serverError);
        }
    }

    /**
     * Update Github
     * @static
     * @memberof AboutController
     */
    static async updateGithub(req: Request, res: Response): Promise<Response> {
        try {
            return res.status(200).send(messages.basic);
        } catch (error) {
            return res.status(500).send(messages.serverError);
        }
    }

    /**
     * Update linkedin
     * @static
     * @memberof AboutController
     */
    static async updateLinkedin(req: Request, res: Response): Promise<Response> {
        try {
            return res.status(200).send(messages.basic);
        } catch (error) {
            return res.status(500).send(messages.serverError);
        }
    }

    /**
     * update socials
     * @static
     * @memberof AboutContoller
     */
    static async updateSocials(req: Request, res: Response): Promise<Response> {
        try {
            return res.status(200).send(messages.basic);
        } catch (error) {
            return res.status(500).send(messages.serverError);
        }
    }
}
