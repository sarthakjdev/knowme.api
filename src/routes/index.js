import express from 'express'
import airtableRoute from './airtable.js'

const router = express.Router()

router.use('/airtable', airtableRoute)

export default router
