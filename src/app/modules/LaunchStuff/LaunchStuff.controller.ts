import { NextFunction, Request, Response } from 'express'
import { StuffService } from './LaunchStuff.service'

const createStuff = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = req.body
    // console.log(data)
    const result = await StuffService.createStuff(data)
    res.status(200).json({
      status: 'success',
      message: 'Launch Stuff Create is Successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const getStuffs = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await StuffService.getStuffs()
    res.status(200).json({
      status: 'success',
      message: 'Launch Stuff Retrive is Successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const getStuff = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id
    const result = await StuffService.getStuff(id)
    res.status(200).json({
      status: 'success',
      message: 'Launch Stuff Retrive is Successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const updateStuff = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const { ...data } = req.body
    const result = await StuffService.updateStuff(id, data)
    res.status(200).json({
      status: 'success',
      message: 'Launch Stuff updated successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const deleteStuff = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id
    const result = await StuffService.deleteStuff(id)
    res.status(200).json({
      status: 'success',
      message: 'Launch Stuff Delete is Successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

export const StuffController = {
  createStuff,
  getStuffs,
  getStuff,
  updateStuff,
  deleteStuff,
}
