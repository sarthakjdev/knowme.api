import express from 'express'
import dotenv from 'dotenv/config'
import config from '@configs/config'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import cors from 'cors'
import ready from './src/controllers/ready'
// requiring routes files :
import serverRoute from './src/routes/index'
import logger from '@utils/logger'
const port = config.PORT || 5000

const app = express()
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/', serverRoute)
app.get('/', ready)

app.listen(port, () => {
    // eslint-disable-next-line no-console
    logger.info(`Server is listenning on ${port}`)
})
