import path from 'path'
import dotenv from 'dotenv'

// Parsing the env file.
dotenv.config({ path: path.resolve(__dirname, '../../.env') })
// Interface to load env vlariables
// Note these variables can possibly be undefined
// as someone could skip these varibales or not setup a .env file at all

interface ENV {
    PORT: number | undefined;
    SERVER_URL: string | undefined
    AIRTABLE_API_KEY :string | undefined
    AIRTABLE_BASE_ID: string | undefined
    AIRTABLE_BASE_URL: string | undefined
    TWITTER_API_KEY: string | undefined
    TWITTER_API_KEY_SECRET: string | undefined
    TWITTER_API_BEARER_TOKEN: string | undefined
    TWITTER_BASE_URL: string | undefined
    TWITTER_USER_ID: string | undefined
    HASHNODE_PERSONAL_ACCESS_TOKEN: string | undefined
    OEMBED_BASE_URL: string | undefined
    TWITTER_USERNAME: string | undefined
}

interface Config {
    PORT: number
    SERVER_URL: string
    AIRTABLE_API_KEY :string
    AIRTABLE_BASE_ID: string
    AIRTABLE_BASE_URL: string
    TWITTER_API_KEY: string
    TWITTER_API_KEY_SECRET: string
    TWITTER_API_BEARER_TOKEN: string
    TWITTER_BASE_URL: string
    TWITTER_USER_ID: string
    HASHNODE_PERSONAL_ACCESS_TOKEN: string
    OEMBED_BASE_URL: string
    TWITTER_USERNAME: string
}

// Loading process.env as ENV interface
const getConfig = (): ENV => ({
    PORT: process.env.PORT ? Number(process.env.PORT) : undefined,
    SERVER_URL: process.env.SERVER_URL,
    AIRTABLE_API_KEY: process.env.AIRTABLE_API_KEY,
    AIRTABLE_BASE_ID: process.env.AIRTABLE_BASE_ID,
    AIRTABLE_BASE_URL: process.env.AIRTABLE_BASE_URL,
    TWITTER_API_KEY: process.env.TWITTER_API_KEY,
    TWITTER_API_KEY_SECRET: process.env.TWITTER_API_KEY_SECRET,
    TWITTER_API_BEARER_TOKEN: process.env.TWITTER_API_BEARER_TOKEN,
    TWITTER_BASE_URL: process.env.TWITTER_BASE_URL,
    TWITTER_USER_ID: process.env.TWITTER_USER_ID,
    HASHNODE_PERSONAL_ACCESS_TOKEN: process.env.HASHNODE_PERSONAL_ACCESS_TOKEN,
    OEMBED_BASE_URL: process.env.OEMBED_BASE_URL,
    TWITTER_USERNAME: process.env.TWITTER_USERNAME,
})

// Throwing an Error if any field was undefined we don't
// want our app to run if it can't connect to DB and ensure
// that these fields are accessible. If all is good return
// it as Config which just removes the undefined from our type
// definition.

const getVerifiedConfig = (config: ENV): Config => {
    for (const [key, value] of Object.entries(config)) {
        if (value === undefined) {
            throw new Error(`Missing key ${key} in config.env`)
        }
    }

    return config as Config
}

const config = getConfig()

const verifiedConfig = getVerifiedConfig(config)

export default verifiedConfig

