import { Request, Response } from 'express'
import messages from '@constants/messages'
import AboutFactory from 'src/models/factory/aboutFactory'

export default class AboutContoller {
    /**
     * Get About
     * @static
     * @memberof AboutContoller
     */
    static async getAbout(req: Request, res: Response): Promise<Response> {
        try {
            const about = AboutFactory.getAbout()

            return res.status(200).json(about)
        } catch (error) {
            return res.status(500).send(messages.serverError)
        }
    }

    /**
     * Update About
     * @static
     * @memberof AboutContoller
     */
    static async updateAbout(req: Request, res: Response): Promise<Response> {
        try {
            return res.status(200).send(messages.basic)
        } catch (error) {
            return res.status(500).send(messages.serverError)
        }
    }

    /**
     * Update Email in about
     * @static
     * @memberof AboutController
     */
    static async updateEmail(req: Request, res: Response): Promise<Response> {
        try {
            const { email } = req.body
            if (!email) return res.status(400).send(messages.badReq)

            const about = await AboutFactory.updateEmail(email)
            if (!about) return res.status(400).send(messages.notFound)

            return res.status(200).json(about)
        } catch (error) {
            return res.status(500).send(messages.serverError)
        }
    }

    /**
     * Update Phone
     * @static
     * @memberof AboutController
     */
    static async updatePhone(req: Request, res: Response): Promise<Response> {
        try {
            const { phone } = req.body
            if (!phone) return res.status(400).send(messages.badReq)

            const about = await AboutFactory.updatePhone(phone)
            if (!about) return res.status(400).send(messages.notFound)

            return res.status(200).json(about)
        } catch (error) {
            return res.status(500).send(messages.serverError)
        }
    }

    /**
     * Update twitter
     * @static
     * @memberof AboutController
     */
    static async updateTwitter(req: Request, res: Response): Promise<Response> {
        try {
            const { twitter } = req.body
            if (!twitter) return res.status(400).send(messages.badReq)

            const about = await AboutFactory.updateTwitter(twitter)
            if (!about) return res.status(400).send(messages.notFound)

            return res.status(200).json(about)
        } catch (error) {
            return res.status(500).send(messages.serverError)
        }
    }

    /**
     * Update Github
     * @static
     * @memberof AboutController
     */
    static async updateGithub(req: Request, res: Response): Promise<Response> {
        try {
            const { github } = req.body
            if (!github) return res.status(400).send(messages.badReq)

            const about = await AboutFactory.updateEmail(github)
            if (!about) return res.status(400).send(messages.notFound)

            return res.status(200).json(about)
        } catch (error) {
            return res.status(500).send(messages.serverError)
        }
    }

    /**
     * Update linkedin
     * @static
     * @memberof AboutController
     */
    static async updateLinkedin(req: Request, res: Response): Promise<Response> {
        try {
            const { linkedin } = req.body
            if (!linkedin) return res.status(400).send(messages.badReq)

            const about = await AboutFactory.updateEmail(linkedin)
            if (!about) return res.status(400).send(messages.notFound)

            return res.status(200).json(about)
        } catch (error) {
            return res.status(500).send(messages.serverError)
        }
    }

    /**
     * update socials
     * @static
     * @memberof AboutContoller
     */
    static async updateSocials(req: Request, res: Response): Promise<Response> {
        try {
            const { twitter, github, linkedin } = req.body
            if (!twitter && !github && !linkedin) return res.status(400).send(messages.badReq)

            const about = await AboutFactory.updateSocials(twitter, linkedin, github)
            if (!about) return res.status(400).send(messages.notFound)

            return res.status(200).json(about)
        } catch (error) {
            return res.status(500).send(messages.serverError)
        }
    }
}
