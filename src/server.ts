import app from './app'
import dotenv from 'dotenv'
import { connectDB } from './config'

dotenv.config()

connectDB()

const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
