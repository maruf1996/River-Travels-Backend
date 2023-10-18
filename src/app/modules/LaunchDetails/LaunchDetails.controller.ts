import { NextFunction, Request, Response } from 'express'
import { LaunchDetailsService } from './LaunchDetails.service'

const createLaunchDetails = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = req.body
    // console.log(data)
    const result = await LaunchDetailsService.createLaunchDetails(data)
    res.status(200).json({
      status: 'success',
      message: 'Launch Details Create is Successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const getLaunchDetailses = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await LaunchDetailsService.getLaunchDetailses()
    res.status(200).json({
      status: 'success',
      message: 'Launch Details Retrive is Successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const getLaunchDetails = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.id
    const result = await LaunchDetailsService.getLaunchDetails(id)
    res.status(200).json({
      status: 'success',
      message: 'Launch Details Retrive is Successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const updateLaunchDetails = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params
    const { ...data } = req.body
    const result = await LaunchDetailsService.updateLaunchDetails(id, data)
    res.status(200).json({
      status: 'success',
      message: 'Launch Details updated successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const deleteLaunchDetails = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.id
    const result = await LaunchDetailsService.deleteLaunchDetails(id)
    res.status(200).json({
      status: 'success',
      message: 'Launch Details Delete is Successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

export const LaunchDetailsController = {
  createLaunchDetails,
  getLaunchDetailses,
  getLaunchDetails,
  updateLaunchDetails,
  deleteLaunchDetails,
}
