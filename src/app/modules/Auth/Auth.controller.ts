import { NextFunction, Request, Response } from 'express'
import config from '../../../config'
import { AuthServices } from './Auth.service'

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { ...userData } = req.body
    const result = await AuthServices.createUser(userData)
    res.status(200).json({
      status: 'success',
      message: 'User created successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AuthServices.loginUser(req.body)

    const { refreshToken, accessToken: token } = result

    // set refresh token into cookie
    const cookieOptions = {
      secure: config.env === 'production',
      httpOnly: true,
    }

    res.cookie('refreshToken', refreshToken, cookieOptions)
    // console.log(token)

    res.status(200).json({
      status: 'success',
      message: 'User sign in successfully!',
      token,
    })
  } catch (error) {
    next(error)
  }
}

const refreshToken = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const token = req.headers.authorization
    // console.log(token)
    const result = await AuthServices.refreshToken(token!)
    res.send({
      statusCode: 200,
      success: true,
      message: 'Token refreshed successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

export const AuthController = { createUser, loginUser, refreshToken }
