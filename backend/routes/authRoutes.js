// backend/routes/authRoutes.js
import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../models/User.js'

const router = express.Router()

// REGISTER
router.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body

    const existingUser = await User.findOne({ where: { email } })
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered' })
    }

    const hashed = await bcrypt.hash(password, 10)
    const user = await User.create({ email, password: hashed })

    res.status(201).json({
      message: 'User registered successfully',
      user: { id: user.id, email: user.email }
    })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Registration failed' })
  }
})

// LOGIN
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body

    const user = await User.findOne({ where: { email } })
    if (!user) {
      return res.status(404).json({ message: 'Account not found' })
    }

    const match = await bcrypt.compare(password, user.password)
    if (!match) {
      return res.status(401).json({ message: 'Incorrect password' })
    }

    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    )

    res.json({
      token,
      user: { id: user.id, email: user.email, role: user.role }
    })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Login failed' })
  }
})

export default router
