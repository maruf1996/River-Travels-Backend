import express from 'express'
import { LaunchDetailsController } from './LaunchDetails.controller'

const router = express.Router()

router.post('/create-launch', LaunchDetailsController.createLaunchDetails)
router.get('/:id', LaunchDetailsController.getLaunchDetails)
router.patch('/:id', LaunchDetailsController.updateLaunchDetails)
router.delete('/:id', LaunchDetailsController.deleteLaunchDetails)
router.get('/', LaunchDetailsController.getLaunchDetailses)

export const LaunchDetailsRoutes = router
