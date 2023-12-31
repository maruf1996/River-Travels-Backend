import express from 'express'
import { AuthController } from './Auth.controller'

const router = express.Router()

router.post('/signup', AuthController.createUser)
router.post('/signin', AuthController.loginUser)
router.post('/refresh-token', AuthController.refreshToken)

export const AuthRoutes = router
