import mongoose from 'mongoose'
import config from '@configs/config'

export default async function connectDb() {
    await mongoose.connect(config.DATABASE_URL)
}
