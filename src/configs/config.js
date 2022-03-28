const dev = {
    AIRTABLE_BASE_URL: process.env.AIRTABLE_BASE_URL,
    AIRTABLE_BASE_ID: process.env.AIRTABLE_BASE_ID,
    AIRTABLE_API_KEY: process.env.AIRTABLE_API_KEY,
}

const prod = {
    AIRTABLE_BASE_URL: process.env.AIRTABLE_BASE_URL,
    AIRTABLE_BASE_ID: process.env.AIRTABLE_BASE_ID,
    AIRTABLE_API_KEY: process.env.AIRTABLE_API_KEY,
}

const configs = process.env.NODE_ENV === 'production' ? prod : dev

export default { ...configs }
