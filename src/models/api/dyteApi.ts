import { dyteClient } from '@utils/axiosClient'
import configs from '@configs/config'

export default class Dyte {
    /**
     * Singleton instance of the class
     * @static
     * @type {Hashnode}
     * @memberof Hashnode
     */
    private static dInstance: Dyte = null

    /**
     * AxiosClient for twitter api requests
     * @static
     * @private
     * @memberof Hashnode
     */
    private static axiosClient = dyteClient

    /**
     * reading the instance of the singleton twitter class
     * @static
     * @readonly
     */
    public static get instance(): Dyte {
        if (this.dInstance === null) {
            this.dInstance = new Dyte()
        }

        return this.dInstance
    }

    async creataMeeting(participants, title) {
        try {
            const response = await dyteClient.post(`/organizations/${configs.DYTE_ORGANISATION_ID}/meeting`, {
                title: 'Meeting from Postman v1.0',
                authorization: {
                    waitingRoom: false,
                },
            })

            return response
        } catch {
            return null
        }
    }
}
