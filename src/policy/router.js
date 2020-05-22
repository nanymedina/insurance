import { Router } from 'express'
import policy from './controllers/policy'

const router = Router()
router.get('/policy', policy)

export default router