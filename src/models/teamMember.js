export default class TeamMember {
    constructor(data) {
        this.name = data.name
        this.role = data.role
        this.desc = data.desc
        this.twitter = data.twitter
        this.github = data.github
        this.linkedin = data.linkedin
        this.email = data.email
        this.phone = data.phone
        this.imageURl = data.imageUrl
    }
}
