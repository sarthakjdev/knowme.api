import express from 'express'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import dotenv from 'dotenv/config'
import cors from 'cors'
import ready from './src/controllers/ready'
import 'module-alias/register'
// requiring routes files :
import serverRoute from './src/routes/index'

const port = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/', serverRoute)
app.get('/', ready)

app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Server is listenning on ${port}`)
})
