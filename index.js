// eslint-disable-next-line no-unused-vars
import dotenv from 'dotenv/config'
import express from 'express'
import cors from 'cors'
// requiring routes files :
import serverRoute from './src/routes/index.js'

const port = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/', serverRoute)

// eslint-disable-next-line no-unused-vars
app.listen(port, (req, res) => {
    // eslint-disable-next-line no-console
    console.log(`Server is listenning on ${port}`)
})
