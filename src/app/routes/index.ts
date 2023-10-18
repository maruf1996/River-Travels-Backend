/* eslint-disable @typescript-eslint/no-explicit-any */
import express from 'express'
import { AdminRoutes } from '../modules/Admins/Admin.route'
import { AuthRoutes } from '../modules/Auth/Auth.route'
import { BookingRoutes } from '../modules/Bookings/Bookings.route'
import { LaunchDetailsRoutes } from '../modules/LaunchDetails/LaunchDetails.route'
import { StuffRoutes } from '../modules/LaunchStuff/LaunchStuff.route'
import { RootRoutes } from '../modules/Roots/Roots.route'
import { SheduleRoutes } from '../modules/Shedules/Shedules.route'
import { UserRoutes } from '../modules/Users/User.route'

const router = express.Router()

const moduleRoutes: any[] = [
  { path: '/auth', route: AuthRoutes },
  { path: '/users', route: UserRoutes },
  { path: '/admins', route: AdminRoutes },
  { path: '/stuffs', route: StuffRoutes },
  { path: '/roots', route: RootRoutes },
  { path: '/shedules', route: SheduleRoutes },
  { path: '/booking', route: BookingRoutes },
  { path: '/launchs', route: LaunchDetailsRoutes },
]

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router
