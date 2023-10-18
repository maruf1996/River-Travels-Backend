import express from 'express'
import { SheduleController } from './Shedules.controller'

const router = express.Router()

router.post('/create-shedule', SheduleController.createShedule)
router.get('/:id', SheduleController.getShedule)
router.patch('/:id', SheduleController.updateShedule)
router.delete('/:id', SheduleController.deleteShedule)
router.get('/', SheduleController.getShedules)

export const SheduleRoutes = router
