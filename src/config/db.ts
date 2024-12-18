import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

export const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGO_URI
    if (!mongoUri) {
      throw new Error('MONGO_URI is not defined')
    }
    await mongoose.connect(mongoUri)
    console.log('MongoDB connected')
  } catch (error) {
    console.error('MongoDB connection failed:', error)
    process.exit(1)
  }
}
