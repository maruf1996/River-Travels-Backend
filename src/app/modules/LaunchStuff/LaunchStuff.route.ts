import express from 'express'
import { StuffController } from './LaunchStuff.controller'

const router = express.Router()

router.post('/create-stuff', StuffController.createStuff)
router.get('/:id', StuffController.getStuff)
router.patch('/:id', StuffController.updateStuff)
router.delete('/:id', StuffController.deleteStuff)
router.get('/', StuffController.getStuffs)

export const StuffRoutes = router
