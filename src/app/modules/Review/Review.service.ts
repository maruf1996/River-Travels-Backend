import { Review } from '@prisma/client'
import { prisma } from '../../../Shared/prisma'

const createReview = async (data: Review): Promise<Review> => {
  const result = await prisma.review.create({
    data,
  })
  return result
}

const getReviews = async () => {
  const result = await prisma.review.findMany({})
  return result
}

const deleteReview = async (id: string) => {
  const result = await prisma.review.delete({
    where: {
      id,
    },
  })
  return result
}

export const ReviewService = {
  createReview,
  getReviews,
  deleteReview,
}
