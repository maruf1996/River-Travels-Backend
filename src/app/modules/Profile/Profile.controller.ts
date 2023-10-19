import { NextFunction, Request, Response } from 'express'
import { ProfileService } from './Profile.service'

const myProfile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email } = req.params
    // console.log(email)
    const result = await ProfileService.myProfile(email as string)
    res.status(200).json({
      status: 'success',
      message: 'Profile Retrive is successfully!',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

export const ProfileController = { myProfile }
