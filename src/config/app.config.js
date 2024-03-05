import {config} from 'dotenv'

config()

export const PORT = process.env.PORT || 3002
export const MONGODB_URI = process.env.MONGODB_URI
export const SECRET_JWT = process.env.SECRET_JWT

