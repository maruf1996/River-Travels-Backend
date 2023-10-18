import { NextFunction, Request, Response } from 'express'
import { SheduleService } from './Shedules.service'

const createShedule = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = req.body
    // console.log(data)
    const result = await SheduleService.createShedule(data)
    res.status(200).json({
      status: 'success',
      message: 'Shedule is Successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const getShedules = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await SheduleService.getShedules()
    res.status(200).json({
      status: 'success',
      message: 'Shedule Retrive is Successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const getShedule = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id
    const result = await SheduleService.getShedule(id)
    res.status(200).json({
      status: 'success',
      message: 'Shedule Retrive is Successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const updateShedule = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params
    const { ...data } = req.body
    const result = await SheduleService.updateShedule(id, data)
    res.status(200).json({
      status: 'success',
      message: 'Shedule updated successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const deleteShedule = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.id
    const result = await SheduleService.deleteShedule(id)
    res.status(200).json({
      status: 'success',
      message: 'Shedule Delete is Successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

export const SheduleController = {
  createShedule,
  getShedules,
  getShedule,
  updateShedule,
  deleteShedule,
}
