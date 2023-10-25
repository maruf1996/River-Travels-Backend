import { NextFunction, Request, Response } from 'express'
import { ReviewService } from './Review.service'

const createReview = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = req.body
    // console.log(data)
    const result = await ReviewService.createReview(data)
    res.status(200).json({
      status: 'success',
      message: 'Review Create is Successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const getReviews = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await ReviewService.getReviews()
    res.status(200).json({
      status: 'success',
      message: 'Review Retrive is Successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const deleteReview = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.id
    const result = await ReviewService.deleteReview(id)
    res.status(200).json({
      status: 'success',
      message: 'Review Delete is Successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

export const ReviewController = {
  createReview,
  getReviews,
  deleteReview,
}
