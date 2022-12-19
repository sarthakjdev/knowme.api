import { Request, Response } from 'express'
import messages from '@constants/messages'
import Dyte from '@api/dyteApi'

export default class MeetingControllers {
    /**
     * Get meeting
     * @static
     * @memberof MeetingControllers
     */
    static async getMeeting(req: Request, res: Response) {
        try {
            const { id } = req.params
            if (!id) return res.status(400).send(messages.badReq)
            const { data } = await Dyte.instance.getMeeting(id)

            return res.status(200).json(data.data.meeting)
        } catch (error) {
            return res.status(500).send(messages.serverError)
        }
    }

    /**
     * Get meeting
     * @static
     * @memberof MeetingControllers
     */
    static async getAllMeeting(req: Request, res: Response) {
        try {
            const { data } = await Dyte.instance.getAllMeeting()

            return res.status(200).json(data.data.meetings)
        } catch (error) {
            return res.status(500).send(messages.serverError)
        }
    }

    /**
     * Add meeting
     * @static
     * @memberof MeetingControllers
     */
    static async createMeeting(req: Request, res: Response) {
        try {
            const { participantName } = req.body
            if (!participantName) return res.status(400).send(messages.badReq)

            const { data } = await Dyte.instance.creataMeeting(participantName)

            return res.status(200).json(data.data.meeting)
        } catch (error) {
            return res.status(500).send(messages.serverError)
        }
    }

    /**
     * Delete an meeting
     * @static
     * @memberof MeetingControllers
     */
    static async deleteMeeting(req: Request, res: Response) {
        try {
            const { id } = req.params
            if (!id) return res.status(400).send(messages.badReq)
            const meeting = await Dyte.instance.getMeeting(id)
            await Dyte.instance.endMeeting(meeting)

            return res.status(200).send(messages.success)
        } catch (error) {
            return res.status(500).send(messages.serverError)
        }
    }
}
