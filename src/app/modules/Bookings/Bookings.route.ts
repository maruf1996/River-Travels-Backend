import express from 'express'
import { BookingController } from './Bookings.controller'

const router = express.Router()

router.post('/create-booking', BookingController.createBooking)
router.get('/:id', BookingController.getBooking)
router.get('/:email', BookingController.myBooking)
router.patch('/:id', BookingController.updateBooking)
router.delete('/:id', BookingController.deleteBooking)
router.get('/', BookingController.getBookings)

export const BookingRoutes = router
