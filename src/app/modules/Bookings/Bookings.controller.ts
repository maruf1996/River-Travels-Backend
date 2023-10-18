import { NextFunction, Request, Response } from 'express'
import { BookingService } from './Bookings.service'

const createBooking = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = req.body
    // console.log(data)
    const result = await BookingService.createBooking(data)
    res.status(200).json({
      status: 'success',
      message: 'Booking Create is Successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const getBookings = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await BookingService.getBookings()
    res.status(200).json({
      status: 'success',
      message: 'Booking Retrive is Successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const getBooking = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id
    const result = await BookingService.getBooking(id)
    res.status(200).json({
      status: 'success',
      message: 'Booking Retrive is Successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const updateBooking = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params
    const { ...data } = req.body
    const result = await BookingService.updateBooking(id, data)
    res.status(200).json({
      status: 'success',
      message: 'Booking updated successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const deleteBooking = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.id
    const result = await BookingService.deleteBooking(id)
    res.status(200).json({
      status: 'success',
      message: 'Booking Delete is Successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

export const BookingController = {
  createBooking,
  getBookings,
  getBooking,
  updateBooking,
  deleteBooking,
}
