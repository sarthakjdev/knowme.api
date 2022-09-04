import { Request, Response } from 'express'
import messages from '@constants/messages'
import * as fs from 'fs'
import * as path from 'path'
import AboutManager from '@helpers/aboutManager'

export default class AboutContoller {
    /**
     * Get About
     * @static
     * @memberof AboutContoller
     */
    static async getAbout(req: Request, res: Response): Promise<Response> {
        try {
            const about = fs.readFileSync(path.join(__dirname, '../../data/about.json'))

            return res.status(200).json(JSON.parse(about.toString()))
        } catch (error) {
            return res.status(500).send(messages.serverError)
        }
    }

    /**
     * Update Email in about
     * @static
     * @memberof AboutController
     */
    static async updateAbout(req: Request, res: Response): Promise<Response> {
        try {
            const { toupdate } = req.params
            const {
                email, phone, introduction, twitter, linkedin, github, aboutData,
            } = req.body
            let about
            switch (toupdate) {
                case 'email':
                    if (!email) return res.status(400).send(messages.badReq)
                    about = AboutManager.instance.updateEmail(email)
                    break
                case 'phone':
                    if (!phone) return res.status(400).send(messages.badReq)
                    about = await AboutManager.instance.updatePhone(phone)
                    break
                case 'introduction':
                    if (!introduction) return res.status(400).send(messages.badReq)
                    about = AboutManager.instance.updateEmail(introduction)
                    break
                case 'twitter':
                    if (!twitter) return res.status(400).send(messages.badReq)
                    about = AboutManager.instance.updateTwitter(twitter)
                    break
                case 'github':
                    if (!github) return res.status(400).send(messages.badReq)
                    about = AboutManager.instance.updateGithub(github)
                    break
                case 'linkedin':
                    if (!linkedin) return res.status(400).send(messages.badReq)
                    about = AboutManager.instance.updateLinkedin(linkedin)
                    break
                case 'socials':
                    if (!twitter && !github && !linkedin) return res.status(400).send(messages.badReq)
                    about = AboutManager.instance.updateSocials(linkedin, twitter, github)
                    break
                case null:
                    if (!aboutData) return res.status(400).send(messages.badReq)
                    about = AboutManager.instance.update(aboutData)
                    break
                default:
                    break
            }

            about = AboutManager.instance.getAbout()

            return res.status(200).json(about)
        } catch (error) {
            return res.status(500).send(messages.serverError)
        }
    }
}
