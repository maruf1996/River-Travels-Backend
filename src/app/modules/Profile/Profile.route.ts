import express from 'express'
import { ProfileController } from './Profile.controller'

const router = express.Router()

router.get('/:email', ProfileController.myProfile)

export const ProfileRoutes = router
