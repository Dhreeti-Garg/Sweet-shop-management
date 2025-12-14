// backend/server.js
import express from 'express'
import dotenv from 'dotenv'
import authRoutes from './routes/authRoutes.js'
import sequelize from './config/database.js' // your Sequelize instance

dotenv.config()
const app = express()
app.use(express.json())

// Routes
app.use('/api/auth', authRoutes)

// Test route
app.get('/', (req, res) => {
  res.send('Server is running')
})

// Connect to DB and start server
const PORT = process.env.PORT || 5000

sequelize.sync()
  .then(() => {
    console.log('Database connected')
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  })
  .catch(err => console.error('DB connection error:', err))
