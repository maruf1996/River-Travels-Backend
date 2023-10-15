/* eslint-disable @typescript-eslint/no-explicit-any */
import express from 'express'
import { AuthRoutes } from '../modules/Auth/Auth.route'

const router = express.Router()

const moduleRoutes: any[] = [{ path: '/auth', route: AuthRoutes }]

moduleRoutes.forEach(route => router.use(route.path, route.route))
export default router
