import airtable from 'airtable'
import configs from '../configs/config.js'

airtable.configure({
    endpointUrl: configs.AIRTABLE_BASE_URL,
    apiKey: configs.AIRTABLE_API_KEY,
})

const base = airtable.base(configs.AIRTABLE_BASE_ID)

export default base
