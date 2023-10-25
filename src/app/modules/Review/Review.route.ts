import express from 'express'
import { ReviewController } from './Review.controller'

const router = express.Router()

router.post('/create-review', ReviewController.createReview)
router.delete('/:id', ReviewController.deleteReview)
router.get('/', ReviewController.getReviews)

export const ReviewRoutes = router
