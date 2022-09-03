import prisma from "@lib/prisma";
import { About } from "@prisma/client";

export default class AboutFactory {

    /**
     * create about me
     * @static
     * @memberof AboutFactory
     */
    static async createAbout(): Promise<About> {
        const about = await prisma.about.create({
            data: {
                name: 'Sarthak Jain',
                mobNo: '9643500545',
                introduction: '',
                email: 'contact.sarthakjain@gmail.com'
            }
        })

        return about
    }

    /**
     * Get about me
     * @static
     * @memberof AboutFactory
     */
    static async getAbout(): Promise<About> {
        const about = await prisma.about.findFirst();

        return about
    }

    /**
     * Update email
     * @static
     * @memberof AboutFactory
     */
    static async updateEmail(newEmail: string): Promise<About>  {
        const about = await prisma.about.update({
            where: {
                name: 'Sarthak Jain',
            },
            data: {
                email: newEmail
            }
        })

        return about
    }

    /**
     * Update phone
     * @static
     * @memberof AboutFactory
     */
    static async updatePhone(newPhone: string): Promise<About>  {
        const about = await prisma.about.update({
            where: {
                name: 'Sarthak Jain',
            },
            data: {
                mobNo: newPhone
            }
        })

        return about
    }

    /**
     * Update Introduction
     * @static
     * @memberof AboutFactory
     */
    static async updateIntro(newIntro: string): Promise<About>  {
        const about = await prisma.about.update({
            where: {
                name: 'Sarthak Jain',
            },
            data: {
                introduction: newIntro
            }
        })

        return about
    }

    /**
     * Update Twitter
     * @static
     * @memberof AboutFactory
     */
    static async updateTwitter(twitter: string): Promise<About>  {
        const about = await prisma.about.update({
            where: {
                name: 'Sarthak Jain',
            },
            data: {
                twitter: twitter
            }
        })

        return about
    }


    /**
    * Update Linkedin
    * @static
    * @memberof AboutFactory
    */
    static async updateLinkedin(linkedin: string): Promise<About>  {
        const about = await prisma.about.update({
            where: {
                name: 'Sarthak Jain',
            },
            data: {
                linkedin: linkedin
            }
        })

        return about
    }

    /**
     * Update Github
     * @static
     * @memberof AboutFactory
     */
    static async updateGithub(github: string): Promise<About>  {
        const about = await prisma.about.update({
            where: {
                name: 'Sarthak Jain',
            },
            data: {
                github: github
            }
        })

        return about
    }

    /**
     * Update Socials
     * @static
     * @memberof AboutFactory
     */
     static async updateSocials(twitter: string, linkedin: string, github: string): Promise<About>  {
        const about = await prisma.about.update({
            where: {
                name: 'Sarthak Jain',
            },
            data: {
                twitter: twitter,
                github: github,
                linkedin: linkedin
            }
        })

        return about
    }
}