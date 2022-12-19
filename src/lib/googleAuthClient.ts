import { google } from 'googleapis'
import * as path from 'path'

const oAuthClient = new google.auth.GoogleAuth(
    {
        keyFile: path.join(__dirname, '../../key.json'),
        scopes: ['https://www.googleapis.com/auth/drive'],
    },
)

const driveInstance = google.drive({ version: 'v3', auth: oAuthClient })

export default driveInstance
