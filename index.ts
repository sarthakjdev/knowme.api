import express, { Request, Response } from 'express'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import dotenv from 'dotenv/config'
import config from '@configs/config'
import cors from 'cors'
import logger from '@utils/logger'
import path from 'path'
import * as swaggerUI from 'swagger-ui-express'
import swaggerGenarateDoc from '@utils/swagger'
import ready from './src/controllers/ready'
import serverRoute from './src/routes/index'

const port = config.PORT || 5000

const app = express()
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/', serverRoute)
app.get('/', ready)

async function serverDocs() {
    const swaggerDocument = await import(path.resolve(__dirname, './swagger_output.json'))

    return swaggerDocument
}

app.use('/docs', swaggerUI.serve, swaggerUI.setup(serverDocs()))
// Docs in json format
app.get('/docs.json', (req: Request, res: Response) => {
    res.setHeader('Content-type', 'application/json')
    res.send(serverDocs())
})

app.listen(port, () => {
    swaggerGenarateDoc()
    logger.info(`Server is listenning on ${port}`)
    logger.info(`docs aree avaiable at http://localhost:${port}/docs`)
})
