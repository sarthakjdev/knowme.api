import { dyteClient } from '@utils/axiosClient'
import configs from '@configs/config'
import { AxiosInstance } from 'axios'
import logger from '@utils/logger'

export default class Dyte {
    /**
     * Singleton instance of the class
     * @static
     * @type {Dyte}
     * @memberof Dyte
     */
    private static dInstance: Dyte = null

    /**
     * AxiosClient for dyte api requests
     * @static
     * @private
     * @memberof Dyte
     */
    private axiosClient: AxiosInstance = dyteClient

    /**
     * reading the instance of the singleton dyte class
     * @static
     * @readonly
     */
    public static get instance(): Dyte {
        if (this.dInstance === null) {
            this.dInstance = new Dyte()
        }

        return this.dInstance
    }

    /**
     * Create a meeting
    * @memberof Dyte
     */
    async creataMeeting(participantName: string) {
        try {
            const response = await this.axiosClient.post(`/organizations/${configs.DYTE_ORGANISATION_ID}/meeting`, {
                title: `Sarthak-${participantName}`,
                authorization: {
                    waitingRoom: false,
                },
            })

            return response
        } catch (err) {
            logger.error(err)

            return null
        }
    }

    /**
     * Create a meeting
     * @memberof Dyte
     */
    async addParticipant(participant: { name: string, email?: string, role: string | 'participant' }, meetingId: string) {
        try {
            const response = await this.axiosClient.post(`/organizations/${configs.DYTE_ORGANISATION_ID}/meetings/${meetingId}/participant`, {
                clientSpecificId: participant.name,
                userDetails: {
                    name: participant.name,
                    picture: 'https://www.postman.com/_mk-www-v6.103.0/assets/logos/postman-logo-stacked.svg',
                },
                roleName: participant.role,
            })

            return response
        } catch (err) {
            logger.error(err)

            return null
        }
    }

    /**
     * Get meeting
     * @memberof Dyte
     */
    async getMeeting(meetingId: string) {
        try {
            const response = await this.axiosClient.get(`/organizations/${configs.DYTE_ORGANISATION_ID}/meetings/${meetingId}`)

            return response
        } catch (err) {
            return null
        }
    }

    /**
     * Get all meeting
     * @memberof Dyte
     */
    async getAllMeeting() {
        try {
            const response = await this.axiosClient.get(`/organizations/${configs.DYTE_ORGANISATION_ID}/meetings`)

            return response
        } catch (err) {
            return null
        }
    }

    /**
     * End meeting
     * @memberof Dyte
     */
    async endMeeting(meeting) {
        try {
            const response = await this.axiosClient.put(`/organizations/${configs.DYTE_ORGANISATION_ID}/meetings/${meeting.id}`, {
                title: meeting.id,
                status: 'CLOSED',
            })

            return response
        } catch (err) {
            return null
        }
    }
}
