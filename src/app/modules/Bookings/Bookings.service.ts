import { Booking } from '@prisma/client'
import { prisma } from '../../../Shared/prisma'

const createBooking = async (data: Booking): Promise<Booking> => {
  const result = await prisma.booking.create({
    data,
  })
  return result
}

const getBookings = async () => {
  const result = await prisma.booking.findMany({})
  return result
}

const getBooking = async (id: string): Promise<Booking | null> => {
  const result = await prisma.booking.findUnique({
    where: {
      id,
    },
  })
  return result
}

const updateBooking = async (
  id: string,
  payload: Partial<Booking>,
): Promise<Booking> => {
  const result = await prisma.booking.update({
    where: {
      id: id,
    },
    data: payload,
  })
  return result
}

const deleteBooking = async (id: string) => {
  const result = await prisma.booking.delete({
    where: {
      id,
    },
  })
  return result
}

export const BookingService = {
  createBooking,
  getBookings,
  getBooking,
  updateBooking,
  deleteBooking,
}
