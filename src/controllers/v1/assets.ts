
import { Request, Response } from 'express'
import messages from '@constants/messages'
import driveInstance from '@lib/googleAuthClient'

export default async function getAssets(req: Request, res: Response) {
    console.log('req ', req)
    try {
        // const response = await driveInstance.files.list({ fields: '*', fileId: '1wi-_0-ZFfPWFfoghdL0lfbxFeKSz1jcu' })
        // console.log('response ', response)

        // return res.status(200).json(response.data)
    } catch (err) {
        console.log('err ', err)

        return res.status(500).send(messages.serverError)
    }
}
