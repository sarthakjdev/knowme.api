import * as path from 'path'
import * as fs from 'fs'

export default class AboutManager {
    /**
     * Singleton instance of the class
     * @static
     * @type {Twitter}
     * @memberof Twitter
     */
    private static tInstance: AboutManager = null

    private file: string = path.join(__dirname, '../data/about.json')

    private convertBufToJson(buffer) {
        const json = JSON.parse(buffer.toString())

        return json
    }

    /**
     * reading the instance of the singleton twitter class
     * @static
     * @readonly
     */
    public static get instance(): AboutManager {
        if (this.tInstance === null) {
            this.tInstance = new AboutManager()
        }

        return this.tInstance
    }

    public getAbout() {
        const aboutBuf = fs.readFileSync(this.file)

        return this.convertBufToJson(aboutBuf)
    }

    public update(aboutData) {
        const aboutJson = fs.writeFileSync(this.file, aboutData)

        return aboutJson
    }

    public updateEmail(newEmail: string) {
        const aboutBuf = fs.readFileSync(this.file)

        let aboutJson = this.convertBufToJson(aboutBuf)

        aboutJson.email = newEmail

        aboutJson = fs.writeFileSync(this.file, JSON.stringify(aboutJson))

        return aboutJson
    }

    public updatePhone(phone: string) {
        const aboutBuf = fs.readFileSync(this.file)

        let aboutJson = this.convertBufToJson(aboutBuf)

        aboutJson.mobNo = Number(phone)

        aboutJson = fs.writeFileSync(this.file, JSON.stringify(aboutJson))

        return aboutJson
    }

    public updateTwitter(twitter: string) {
        const aboutBuf = fs.readFileSync(this.file)

        let aboutJson = this.convertBufToJson(aboutBuf)

        aboutJson.twitter = twitter

        aboutJson = fs.writeFileSync(this.file, JSON.stringify(aboutJson))

        return aboutJson
    }

    public updateGithub(github: string) {
        const aboutBuf = fs.readFileSync(this.file)

        let aboutJson = this.convertBufToJson(aboutBuf)

        aboutJson.github = github

        aboutJson = fs.writeFileSync(this.file, JSON.stringify(aboutJson))

        return aboutJson
    }

    public updateLinkedin(linkedin: string) {
        const aboutBuf = fs.readFileSync(this.file)

        let aboutJson = this.convertBufToJson(aboutBuf)

        aboutJson.linkedin = linkedin

        aboutJson = fs.writeFileSync(this.file, JSON.stringify(aboutJson))

        return aboutJson
    }

    public updateSocials(linkedin: string, twitter: string, github: string) {
        const aboutBuf = fs.readFileSync(this.file)

        let aboutJson = this.convertBufToJson(aboutBuf)

        aboutJson.linkedin = linkedin
        aboutJson.github = github
        aboutJson.twitter = twitter

        aboutJson = fs.writeFileSync(this.file, JSON.stringify(aboutJson))

        return aboutJson
    }

    public updateIntro(intro: string) {
        const aboutBuf = fs.readFileSync(this.file)

        let aboutJson = this.convertBufToJson(aboutBuf)

        aboutJson.introduction = intro

        aboutJson = fs.writeFileSync(this.file, JSON.stringify(aboutJson))

        return aboutJson
    }
}

