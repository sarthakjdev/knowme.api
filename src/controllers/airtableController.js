import airtableBase from '../utils/airtable.js'

export default class AirtableController {
    /**
     * Get team
     * @param  req
     * @param  res
     * @returns
     */
    static async getTeam(req, res) {
        try {
            const data = await airtableBase('Team').select({ maxRecords: 100 }).all()
            const team = []
            await data.forEach(async (member) => {
                await team.push(member.fields)
            })

            if (!data) return res.status(404)

            return res.status(200).json(data)
        } catch (error) {
            return res.status(500).send('Server error occurred')
        }
    }

    /**
     * Add team member
     * @param  req
     * @param  res
     * @returns
     */
    static async addTeamMember(req, res) {
        try {
            const data = await airtableBase('Team').select({ maxRecords: 100 }).all()
            const team = []
            await data.forEach(async (member) => {
                await team.push(member.fields)
            })

            if (!data) return res.status(404)

            return res.status(200).json(data)
        } catch (error) {
            return res.status(500).send('Server error occurred')
        }
    }
}
