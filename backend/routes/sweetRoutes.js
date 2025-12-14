import express from 'express'
import Sweet from '../models/Sweet.js'
import { protect } from '../middleware/authMiddleware.js'


const router = express.Router()


router.post('/', protect, async (req, res) => {
const sweet = await Sweet.create(req.body)
res.json(sweet)
})


router.get('/', protect, async (req, res) => {
const sweets = await Sweet.findAll()
res.json(sweets)
})


router.post('/:id/purchase', protect, async (req, res) => {
const sweet = await Sweet.findByPk(req.params.id)
sweet.quantity -= 1
await sweet.save()
res.json(sweet)
})


export default router